import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { ink } from '../styles/theme';

// Shared section chrome so every block on the page shares the same rhythm:
// the same vertical padding, the same rule between sections, and the same
// scroll offset for the sticky bar.

export const Section: React.FC<{
    id: string;
    sx?: SxProps<Theme>;
    children: React.ReactNode;
}> = ({ id, sx, children }) => (
    <Box
        component="section"
        id={id}
        sx={[
            {
                py: { xs: 8, sm: 10, md: 14 },
                px: { xs: 2, sm: 3, md: 4 },
                borderBottom: `1px solid ${ink[100]}`,
                scrollMarginTop: { xs: '56px', md: '64px' },
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ]}
    >
        {children}
    </Box>
);

export const SectionHeading: React.FC<{
    overline?: string;
    overlineColor?: string;
    title: string;
    /** Optional lead paragraph shown beside the title on wide screens. */
    aside?: React.ReactNode;
    mb?: { xs: number; md: number };
}> = ({ overline, overlineColor = ink[500], title, aside, mb = { xs: 5, md: 8 } }) => (
    <Box sx={{ mb }}>
        {overline && (
            <Typography variant="overline" component="p" sx={{ color: overlineColor, display: 'block', mb: 2 }}>
                {overline}
            </Typography>
        )}
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="flex-start">
            <Grid item xs={12} md={aside ? 7 : 10}>
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{ fontSize: { xs: '1.6rem', sm: '1.85rem', md: '2.4rem' } }}
                >
                    {title}
                </Typography>
            </Grid>
            {aside && (
                <Grid item xs={12} md={5}>
                    {aside}
                </Grid>
            )}
        </Grid>
    </Box>
);
