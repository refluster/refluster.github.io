import { Box, Grid, ImageList, ImageListItem, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Projects, Project } from '../projects/index';

function ProjectView({project}: {project: Project}) {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box>
            <Grid container rowSpacing={2} sx={{
                px: isSmall? 2: 8,
                py: 4
            }}>
                <Grid sm={6}>
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
                <Grid sm={6} sx={{
                }}>
                    <Typography variant='h5'>
                        {project.description}
                    </Typography>
                </Grid>
            </Grid>
            <ImageList sx={{  }} cols={3}>
                {project.images.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            src={`${item}`}
                            loading="lazy"
                            />
                    </ImageListItem>
                ))}
            </ImageList>
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
        <ProjectView project={Projects[0]} />
    )
};

export default Contents;
