import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const Contents: React.FC = () => {
    return (
        <Grid container rowSpacing={2} sx={{
            height: 480
        }}>
            <Grid xs={6}>
                <Typography variant="h2" sx={{
                    px: 16,
                }}>
                    Uttzs
                </Typography>
                <Typography variant="h4" sx={{
                    px: 16,
                }}>
                    Hoge Hoge hoge hoge Hoge Hoge hoge hog Hoge Hoge hoge hog
                </Typography>
            </Grid>
            <Grid xs={6} sx={{
                pr: 12,
            }}>
                <Typography variant='h5'>
                    Hoge Hoge hoge hoge Hoge Hoge hoge hog Hoge Hoge hoge hog
                    Hoge Hoge hoge hoge Hoge Hoge hoge hog Hoge Hoge hoge hog
                    Hoge Hoge hoge hoge Hoge Hoge hoge hog Hoge Hoge hoge hog
                    Hoge Hoge hoge hoge Hoge Hoge hoge hog Hoge Hoge hoge hog
                </Typography>
            </Grid>
        </Grid>
    )
};

export default Contents;
