// Live figures for the "Working with Agents" section.
//
// Source of truth is the agent-workforce API (repo: refluster/ai-native-article,
// workforce/lambdas/agents-api) served at workforce-api.kohuehara.xyz. Both
// routes used here are public reads and already allow this origin in the API's
// CORS configuration.
//
//   1. GET /public/workforce-summary — the purpose-built card payload:
//      small, and memoised server-side for 5 minutes so a public page view
//      doesn't fan out one ledger query per agent.
//   2. GET /stats — the operator dashboard aggregate. Kept as a fallback so
//      this section keeps working if (1) is unavailable, e.g. before the API
//      change deploys. Everything the card shows is derivable from it.
//
// The API deliberately publishes no cost or token figures — per-run token
// usage isn't observable in its execution path, so wall-clock run duration
// ("agent-hours") is the honest compute measure. Don't invent one here.

export const WORKFORCE_API_BASE = 'https://workforce-api.kohuehara.xyz';
export const WORKFORCE_CONSOLE_URL = 'https://workforce.kohuehara.xyz/';

export type WorkforceRun = {
    agent: string;
    name: string;
    role: string;
    skill: string;
    startedAt: string;
    status: 'ok' | 'throw' | 'dlq';
};

export type WorkforceSummary = {
    generatedAt: string;
    agentsTotal: number;
    agentsActiveToday: number;
    runsToday: number;
    runsThisWeek: number;
    deliverablesThisWeek: number;
    agentsActiveThisWeek: number;
    computeHoursThisMonth: number;
    /** Runs per UTC day, oldest first, ending today. */
    activity30d: { date: string; runs: number }[];
    recentRuns: WorkforceRun[];
};

type SummaryPayload = {
    generated_at: string;
    roster: { agents_total: number; agents_active_today: number };
    today: { runs: number };
    week: { runs: number; deliverables: number; agents_active: number };
    month: { compute_hours: number };
    activity_30d: { date: string; runs: number }[];
    recent_runs: {
        agent: string;
        name: string;
        role: string;
        skill: string;
        started_at: string;
        status: WorkforceRun['status'];
    }[];
};

type StatsPayload = {
    generated_at: string;
    totals: {
        agents_running: number;
        agents_paused: number;
        agents_throwing: number;
        compute_seconds_this_month: number;
    };
    agents: Record<string, { archived: boolean }>;
    activity: { days: string[]; by_slug: Record<string, number[]> };
    recent_runs: {
        slug: string;
        started_at: string;
        status: WorkforceRun['status'];
        skill: string;
    }[];
};

const WEEK_DAYS = 7;

function titleCase(slug: string): string {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
}

function fromSummary(p: SummaryPayload): WorkforceSummary {
    return {
        generatedAt: p.generated_at,
        agentsTotal: p.roster.agents_total,
        agentsActiveToday: p.roster.agents_active_today,
        runsToday: p.today.runs,
        runsThisWeek: p.week.runs,
        deliverablesThisWeek: p.week.deliverables,
        agentsActiveThisWeek: p.week.agents_active,
        computeHoursThisMonth: p.month.compute_hours,
        activity30d: p.activity_30d,
        recentRuns: p.recent_runs.map((r) => ({
            agent: r.agent,
            name: r.name || titleCase(r.agent),
            role: r.role,
            skill: r.skill,
            startedAt: r.started_at,
            status: r.status,
        })),
    };
}

// Fallback projection. /stats carries a per-agent 30-day run strip, so the
// day/week counters are a sum over its buckets rather than a second fetch.
// Deliverables aren't in that strip, so the weekly figure falls back to the
// run count (the API counts a non-throwing run as delivered).
function fromStats(p: StatsPayload): WorkforceSummary {
    const days = p.activity.days;
    const strips = Object.entries(p.activity.by_slug)
        .filter(([slug]) => !p.agents[slug]?.archived)
        .map(([, strip]) => strip);

    const perDay = days.map((date, i) => ({
        date,
        runs: strips.reduce((sum, strip) => sum + (strip[i] ?? 0), 0),
    }));
    const lastIndex = days.length - 1;
    const runsToday = perDay[lastIndex]?.runs ?? 0;
    const runsThisWeek = perDay.slice(-WEEK_DAYS).reduce((sum, d) => sum + d.runs, 0);
    const activeIn = (from: number) =>
        strips.filter((strip) => strip.slice(from).some((n) => n > 0)).length;

    return {
        generatedAt: p.generated_at,
        agentsTotal: p.totals.agents_running + p.totals.agents_paused + p.totals.agents_throwing,
        agentsActiveToday: activeIn(lastIndex),
        runsToday,
        runsThisWeek,
        deliverablesThisWeek: runsThisWeek,
        agentsActiveThisWeek: activeIn(Math.max(0, days.length - WEEK_DAYS)),
        computeHoursThisMonth: Math.round((p.totals.compute_seconds_this_month / 3600) * 10) / 10,
        activity30d: perDay,
        recentRuns: p.recent_runs.map((r) => ({
            agent: r.slug,
            name: titleCase(r.slug),
            role: '',
            skill: r.skill,
            startedAt: r.started_at,
            status: r.status,
        })),
    };
}

async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
    const res = await fetch(`${WORKFORCE_API_BASE}${path}`, { signal });
    if (!res.ok) throw new Error(`${path} responded ${res.status}`);
    return (await res.json()) as T;
}

export async function fetchWorkforceSummary(signal?: AbortSignal): Promise<WorkforceSummary> {
    try {
        return fromSummary(await getJson<SummaryPayload>('/public/workforce-summary', signal));
    } catch (err) {
        if (signal?.aborted) throw err;
        return fromStats(await getJson<StatsPayload>('/stats', signal));
    }
}
