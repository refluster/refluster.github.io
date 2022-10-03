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
            //backgroundColor: 'primary.dark',
            height: 420,
            py: 22,
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
        </Box>
    )
}

function Name2() {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Box sx={{ backgroundColor: 'primary.dark', height: 420 }}>

                </Box>
                Koh Uehara
            </Grid>
            <Grid item xs={6}>
                <Box sx={faceStyle} />
            </Grid>
        </Grid>
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
