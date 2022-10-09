import { Box, Grid, ImageList, ImageListItem, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Projects, Project } from '../projects/index';

function ProjectView({project}: {project: Project}) {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            py: 8,
        }}>
            <Grid container rowSpacing={2} sx={{
                px: isSmall? 2: 8,
                py: 4
            }}>
                <Grid item sm={6}>
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
                <Grid item sm={6} sx={{
                }}>
                    <Typography variant='h5'>
                        {project.description}
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{
                height: 540,
                display: 'flex',
            }}>
                {project.images.map((item) => (
                    <Box key={item} sx={{
                        flex: 1,
                        backgroundSize: 'cover',
                        backgroundImage: `url(${item})`,
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
