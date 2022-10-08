import { useTheme } from '@mui/material/styles';
import React from 'react';
import Contents from './contents';
import Selfie from '../img/mypic-0.jpg';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Name />
            <Contents />
        </div>
    )
};

function Name() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            //backgroundColor: 'primary.dark',
            py: 24,
            px: isSmall? 2: 8,
            typography: {
                h2: {
                    fontWeight: 400,
                },
            },
        }}>
            <Typography variant="h2">
                Software architect
            </Typography>
            <Typography variant="h3">
                based in bay area.
            </Typography>
        </Box>
    )
}

const faceStyle = {
    backgroundImage: `url(${Selfie})`,
    height: '100%',
    width: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

export default Home;
