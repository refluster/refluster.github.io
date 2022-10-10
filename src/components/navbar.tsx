//import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';

const NavBar: React.FC = () => {
    const barHeight = 54;
    return (
            <Box sx={{
                display: 'flex',
                height: barHeight,
                lineHeight: `${barHeight}px`,
                width: '100%',
                py: 1,
                px: 4,
                boxSizing: 'border-box',
            }}>
                <Box sx={{ 
                    flex: 1,
                    lineHeight: `${barHeight}px`,
                }}>Koh Uehara</Box>
            </Box>
    )
};

export default NavBar;
