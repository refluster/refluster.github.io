import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    fetchWorkforceSummary,
    WORKFORCE_CONSOLE_URL,
    WorkforceSummary,
} from '../api/workforce';

// "Working with Agents" — the live section.
//
// Numbers come from the agent-workforce API (see ../api/workforce.ts). If the
// fetch fails the section still renders, minus the figures: an empty state is
// honest, a placeholder number is not.

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

const WorkforceSection: React.FC<{ id: string; isSmall: boolean; isMobile: boolean }> = ({ id, isMobile }) => {
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
        <Box
            id={id}
            sx={{
                py: { xs: 8, sm: 10, md: 14 },
                px: { xs: 2, sm: 3, md: 4 },
                bgcolor: '#111',
                color: '#fafafa',
                borderBottom: '1px solid #eaeaea',
                scrollMarginTop: { xs: '56px', md: '64px' },
            }}
        >
            <Container maxWidth="lg" disableGutters={isMobile}>
                <Typography
                    variant="overline"
                    sx={{ letterSpacing: '0.18em', color: '#8a8a8a', display: 'block', mb: 2 }}
                >
                    Working with Agents
                </Typography>

                <Grid container spacing={{ xs: 3, md: 6 }} sx={{ mb: { xs: 5, md: 8 } }}>
                    <Grid item xs={12} md={7}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: 500,
                                fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2.5rem' },
                                lineHeight: 1.25,
                            }}
                        >
                            I don't work alone. An agent workforce works with me — every day.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography
                            variant="body1"
                            sx={{ lineHeight: 1.8, color: '#bdbdbd', fontSize: { xs: '0.95rem', md: '1rem' } }}
                        >
                            A standing organisation of AI agents — each with a role, a persona and a schedule —
                            researches, writes, reviews and ships alongside me. The figures below are read live
                            from the workforce's own API, not written by hand.
                        </Typography>
                    </Grid>
                </Grid>

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
                        value={summary ? formatNumber(summary.runsThisWeek) : null}
                        unit={summary ? `by ${formatNumber(summary.agentsActiveThisWeek)} agents` : ''}
                        label="Tasks this week"
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
                            color: '#fafafa',
                            textTransform: 'none',
                            border: '1px solid #444',
                            px: { xs: 1.5, md: 2.5 },
                            py: 1,
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.06)', borderColor: '#888' },
                        }}
                    >
                        Meet the workforce
                    </Button>
                    {summary && (
                        <Typography variant="caption" sx={{ color: '#6f6f6f' }}>
                            Live from the workforce API · updated {formatAgo(summary.generatedAt, now)}
                        </Typography>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

const KpiTile: React.FC<{
    value: string | null;
    unit: string;
    label: string;
    failed: boolean;
}> = ({ value, unit, label, failed }) => (
    <Grid item xs={6} md={3}>
        <Box sx={{ borderTop: '1px solid #333', pt: { xs: 2, md: 3 }, height: '100%' }}>
            <Typography
                sx={{
                    fontWeight: 400,
                    lineHeight: 1,
                    fontSize: { xs: '2.4rem', sm: '3rem', md: '3.6rem' },
                    color: value ? '#fafafa' : '#3a3a3a',
                    fontVariantNumeric: 'tabular-nums',
                }}
            >
                {value ?? (failed ? '—' : '···')}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#8a8a8a' }}>
                {value ? unit : failed ? 'unavailable' : 'loading'}
            </Typography>
            <Typography variant="body1" sx={{ mt: 0.5, color: '#fafafa', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                {label}
            </Typography>
        </Box>
    </Grid>
);

const ActivityStrip: React.FC<{ activity: { date: string; runs: number }[] }> = ({ activity }) => {
    const max = activity.reduce((m, d) => Math.max(m, d.runs), 0);
    return (
        <Box>
            <Typography variant="body2" sx={{ color: '#8a8a8a', mb: 2 }}>
                Tasks executed per day — last 30 days
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: { xs: 80, md: 110 } }}>
                {activity.map((d) => (
                    <Box
                        key={d.date}
                        title={`${d.date}: ${d.runs} tasks`}
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            height: `${max > 0 ? Math.max(2, (d.runs / max) * 100) : 2}%`,
                            bgcolor: d.runs > 0 ? '#fafafa' : '#333',
                            opacity: d.runs > 0 ? 0.85 : 1,
                        }}
                    />
                ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="caption" sx={{ color: '#6f6f6f' }}>
                    {activity[0]?.date}
                </Typography>
                <Typography variant="caption" sx={{ color: '#6f6f6f' }}>
                    today
                </Typography>
            </Box>
        </Box>
    );
};

const LiveFeed: React.FC<{ runs: { agent: string; name: string; role: string; skill: string; startedAt: string; status: string }[]; now: number }> = ({ runs, now }) => (
    <Box>
        <Typography variant="body2" sx={{ color: '#8a8a8a', mb: 2 }}>
            Latest activity
        </Typography>
        {runs.slice(0, 5).map((run) => (
            <Box
                key={`${run.agent}-${run.startedAt}`}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 2,
                    py: 1.2,
                    borderBottom: '1px solid #262626',
                }}
            >
                <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontSize: '0.95rem', color: '#fafafa' }}>
                        {run.name}
                        <Box component="span" sx={{ color: '#6f6f6f' }}>
                            {' · '}
                            {run.skill}
                        </Box>
                    </Typography>
                    {run.role && (
                        <Typography variant="caption" sx={{ color: '#6f6f6f' }}>
                            {run.role}
                        </Typography>
                    )}
                </Box>
                <Typography variant="caption" sx={{ color: '#8a8a8a', whiteSpace: 'nowrap' }}>
                    {formatAgo(run.startedAt, now)}
                </Typography>
            </Box>
        ))}
    </Box>
);

export default WorkforceSection;
