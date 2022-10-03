import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React from 'react';
import Contents from './contents';
import Selfie from '../img/mypic-0.jpg';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Name />
            <Contents />
        </div>
    )
};

function Name() {
    return (
        <Box sx={{
            backgroundColor: 'primary.dark',
            py: 32,
            px: 8,
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
            <Box sx={{

            }}>
                Hoge Hoge hoge hoge Hoge Hoge hoge hog Hoge Hoge hoge hog Hoge Hoge hoge hoge Hoge Hoge hoge hog Hoge Hoge hoge hog Hoge Hoge hoge hoge Hoge Hoge hoge hog Hoge Hoge hoge hog Hoge Hoge hoge hoge Hoge Hoge hoge hog Hoge Hoge hoge hog
            </Box>
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
