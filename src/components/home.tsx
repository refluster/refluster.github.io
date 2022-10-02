import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React from 'react';
import Contents from './contents';
import Selfie from '../img/mypic-0.jpg';

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
    height: 320,
    width: 320,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

export default Home;
