import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Projects } from '../projects/index';

const Project = () => {
    const project = Projects[0];
    return (
        <Box>
            <Grid container rowSpacing={2} sx={{
                px: 16,
                py: 4
            }}>
                <Grid xs={6}>
                    <Typography variant="h2" sx={{
                    }}>
                        {project.title}
                    </Typography>
                    <Typography variant="h4" sx={{
                        pr: 4,
                    }}>
                        {project.subtitle}
                    </Typography>
                </Grid>
                <Grid xs={6} sx={{
                }}>
                    <Typography variant='h5'>
                        {project.description}
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{
                height: 480,
                backgroundColor: 'primary.dark',
                display: 'flex',
            }}>
                {project.images.map(image => {
                    return <img src={image} />
                })
            }
            </Box>
        </Box>
    )
}

const Ondu = () => {
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
}

const Contents: React.FC = () => {
    return (
        <Project />
    )
};

export default Contents;
