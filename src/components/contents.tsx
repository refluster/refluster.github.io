import { Box, Grid, ImageList, ImageListItem, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Projects, Project } from '../projects/index';

function ProjectView({project}: {project: Project}) {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            py: 10,
        }}>
            <Grid container rowSpacing={2} sx={{
                px: isSmall? 2: 8,
                py: 4
            }}>
                <Grid item sm={6}>
                    <Typography variant="h4" sx={{
                        my: 2,
                    }}>
                        {project.title}
                    </Typography>
                    <Typography sx={{
                        my: 2,
                    }}>
                        <a href={project.url}>Website</a>
                    </Typography>
                    {/*
                    <Typography variant="h5" sx={{
                        pr: 4,
                        my: 2,
                    }}>
                        {project.subtitle}
                    </Typography>
                */}
                </Grid>
                <Grid item sm={6} sx={{
                }}>
                    <Typography variant='h5'>
                        {project.description}
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{
                height: 420,
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                {project.images.map((item) => (
                    <Box key={item.src} sx={{
                        flex: 1,
                        minWidth: 180,
                        backgroundSize: item.backgroundSize || 'cover',
                        backgroundImage: `url(${item.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 50%',
                    }}>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

const Contents: React.FC = () => {
    return (
        <Box>
            {
                Projects.map((project: Project) => {
                    return (<ProjectView key={project.url} project={project} />)
                })
            }
        </Box>
    )
};

export default Contents;
