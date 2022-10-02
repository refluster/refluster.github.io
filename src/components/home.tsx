import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React from 'react';
import Contents from './contents';

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
            <Grid item xs={8}>
                <Box sx={{ backgroundColor: 'primary.dark', height: 420 }}></Box>
                Koh Uehara
            </Grid>
            <Grid item xs={4}>
                Picture here
            </Grid>
        </Grid>
    )
}

export default Home;
