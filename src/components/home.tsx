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
                <img src={`${Selfie}?w=320&h=320&fit=crop&auto=format`} />
            </Grid>
        </Grid>
    )
}

export default Home;
