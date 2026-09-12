import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {
    fetchWorkforceSummary,
    WORKFORCE_CONSOLE_URL,
    WorkforceSummary,
} from '../api/workforce';
import { Section, SectionHeading } from './section';

export const INSIGHTS_URL = 'https://kohuehara.xyz/ai-native-article/';

// "Working with Agents" — the live section.
//
// Numbers come from the agent-workforce API (see ../api/workforce.ts). If the
// fetch fails the section still renders, minus the figures: an empty state is
// honest, a placeholder number is not.

const dark = {
    bg: '#111111',
    rule: '#2a2a2a',
    faint: '#3a3a3a',
    muted: '#8a8a8a',
    dim: '#6f6f6f',
    body: '#bdbdbd',
    text: '#fafafa',
};

const formatNumber = (n: number): string => Math.round(n).toLocaleString('en-US');

const formatAgo = (iso: string, now: number): string => {
    const then = Date.parse(iso);
    if (!Number.isFinite(then)) return '';
    const mins = Math.max(0, Math.round((now - then) / 60000));
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.round(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.round(hours / 24)}d ago`;
};

const WorkforceSection: React.FC<{ id: string }> = ({ id }) => {
    const [summary, setSummary] = useState<WorkforceSummary | null>(null);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        fetchWorkforceSummary(controller.signal)
            .then(setSummary)
            .catch((err) => {
                if (controller.signal.aborted) return;
                // Non-fatal: the section degrades to its static copy.
                console.warn('workforce summary unavailable', err);
                setFailed(true);
            });
        return () => controller.abort();
    }, []);

    const now = Date.now();

    return (
        <Section id={id} sx={{ bgcolor: dark.bg, color: dark.text }}>
            <Container maxWidth="lg">
                <SectionHeading
                    overline="Working with agents"
                    overlineColor={dark.muted}
                    title="I don't work alone. An organisation of AI agents works with me, every day."
                    aside={
                        <Typography variant="body1" sx={{ color: dark.body, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                            A standing team of AI agents, each with a role, a persona and a schedule,
                            researches, writes, reviews and ships alongside me. I designed the organisation,
                            its governance and the platform it runs on. The figures below are read live
                            from that platform's API, not written by hand.
                        </Typography>
                    }
                />

                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <KpiTile
                        value={summary ? formatNumber(summary.agentsActiveToday) : null}
                        unit={summary ? `of ${formatNumber(summary.agentsTotal)} agents` : ''}
                        label="On duty today"
                        failed={failed}
                    />
                    <KpiTile
                        value={summary ? formatNumber(summary.runsToday) : null}
                        unit="tasks"
                        label="Executed today"
                        failed={failed}
                    />
                    <KpiTile
                        value={summary ? formatNumber(summary.deliverablesThisWeek) : null}
                        unit={summary ? `from ${formatNumber(summary.runsThisWeek)} tasks` : ''}
                        label="Delivered this week"
                        failed={failed}
                    />
                    <KpiTile
                        value={summary ? formatNumber(summary.computeHoursThisMonth) : null}
                        unit="agent-hours"
                        label="Worked this month"
                        failed={failed}
                    />
                </Grid>

                {summary && (
                    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mt: { xs: 1, md: 2 } }}>
                        <Grid item xs={12} md={7}>
                            <ActivityStrip activity={summary.activity30d} />
                            {summary.topSkills7d.length > 0 && <TopSkills skills={summary.topSkills7d} />}
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <LiveFeed runs={summary.recentRuns} now={now} />
                        </Grid>
                    </Grid>
                )}

                <Box sx={{ mt: { xs: 5, md: 7 }, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                        component="a"
                        href={WORKFORCE_CONSOLE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            color: dark.text,
                            border: `1px solid ${dark.faint}`,
                            px: { xs: 1.5, md: 2.5 },
                            py: 1,
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.06)', borderColor: dark.muted },
                        }}
                    >
                        Meet the workforce
                    </Button>
                    <Button
                        component="a"
                        href={INSIGHTS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ArrowOutwardIcon fontSize="small" />}
                        sx={{
                            color: dark.body,
                            px: { xs: 1.5, md: 2 },
                            py: 1,
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.06)', color: dark.text },
                        }}
                    >
                        Read what they write
                    </Button>
                    {summary && (
                        <Typography variant="caption" sx={{ color: dark.dim, ml: { md: 'auto' } }}>
                            Live from the workforce API · updated {formatAgo(summary.generatedAt, now)}
                        </Typography>
                    )}
                </Box>
            </Container>
        </Section>
    );
};

const KpiTile: React.FC<{
    value: string | null;
    unit: string;
    label: string;
    failed: boolean;
}> = ({ value, unit, label, failed }) => (
    <Grid item xs={6} md={3}>
        <Box sx={{ borderTop: `1px solid ${dark.rule}`, pt: { xs: 2, md: 3 }, height: '100%' }}>
            <Typography
                component="p"
                sx={{
                    fontWeight: 400,
                    lineHeight: 1,
                    fontSize: { xs: '2.4rem', sm: '3rem', md: '3.6rem' },
                    color: value ? dark.text : dark.faint,
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: '-0.02em',
                }}
            >
                {value ?? (failed ? '—' : '···')}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: dark.muted }}>
                {value ? unit : failed ? 'unavailable' : 'loading'}
            </Typography>
            <Typography variant="body1" sx={{ mt: 0.5, color: dark.text, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                {label}
            </Typography>
        </Box>
    </Grid>
);

const ActivityStrip: React.FC<{ activity: { date: string; runs: number }[] }> = ({ activity }) => {
    const max = activity.reduce((m, d) => Math.max(m, d.runs), 0);
    const total = activity.reduce((sum, d) => sum + d.runs, 0);
    return (
        <Box>
            <Typography variant="body2" sx={{ color: dark.muted, mb: 2 }}>
                Tasks executed per day, last 30 days · {formatNumber(total)} in total
            </Typography>
            <Box
                role="img"
                aria-label={`Daily task counts for the last ${activity.length} days, peaking at ${max}`}
                sx={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: { xs: 80, md: 110 } }}
            >
                {activity.map((d) => (
                    <Box
                        key={d.date}
                        title={`${d.date}: ${d.runs} tasks`}
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            height: `${max > 0 ? Math.max(2, (d.runs / max) * 100) : 2}%`,
                            bgcolor: d.runs > 0 ? dark.text : dark.faint,
                            opacity: d.runs > 0 ? 0.85 : 1,
                        }}
                    />
                ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="caption" sx={{ color: dark.dim }}>
                    {activity[0]?.date}
                </Typography>
                <Typography variant="caption" sx={{ color: dark.dim }}>
                    today
                </Typography>
            </Box>
        </Box>
    );
};

const TopSkills: React.FC<{ skills: { skill: string; runs: number }[] }> = ({ skills }) => (
    <Box sx={{ mt: 4 }}>
        <Typography variant="body2" sx={{ color: dark.muted, mb: 1.5 }}>
            What they did most this week
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.slice(0, 5).map((s) => (
                <Box
                    key={s.skill}
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        gap: 1,
                        px: 1.25,
                        py: 0.5,
                        border: `1px solid ${dark.rule}`,
                        borderRadius: 1,
                        fontSize: '0.85rem',
                        color: dark.body,
                    }}
                >
                    {s.skill}
                    <Box component="span" sx={{ color: dark.dim, fontVariantNumeric: 'tabular-nums' }}>
                        {formatNumber(s.runs)}
                    </Box>
                </Box>
            ))}
        </Box>
    </Box>
);

const LiveFeed: React.FC<{ runs: WorkforceSummary['recentRuns']; now: number }> = ({ runs, now }) => (
    <Box>
        <Typography variant="body2" sx={{ color: dark.muted, mb: 2 }}>
            Latest activity
        </Typography>
        {runs.slice(0, 6).map((run) => (
            <Box
                key={`${run.agent}-${run.startedAt}`}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 2,
                    py: 1.2,
                    borderBottom: `1px solid ${dark.rule}`,
                }}
            >
                <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontSize: '0.95rem', color: dark.text }}>
                        {run.name}
                        <Box component="span" sx={{ color: dark.dim }}>
                            {' · '}
                            {run.skill}
                        </Box>
                    </Typography>
                    {run.role && (
                        <Typography variant="caption" sx={{ color: dark.dim }}>
                            {run.role}
                        </Typography>
                    )}
                </Box>
                <Typography variant="caption" sx={{ color: dark.muted, whiteSpace: 'nowrap' }}>
                    {formatAgo(run.startedAt, now)}
                </Typography>
            </Box>
        ))}
    </Box>
);

export default WorkforceSection;
