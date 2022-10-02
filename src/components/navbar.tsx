import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>Koh Uehara</Box>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
      </Box>
    )
};

export default NavBar;
