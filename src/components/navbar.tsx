import React, { useEffect, useState } from 'react';
import {
    AppBar, Box, Button, Container, Toolbar, Typography, useMediaQuery,
    Drawer, List, ListItem, ListItemButton, IconButton, Slide,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ink } from '../styles/theme';

export const NAV_ITEMS = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Agents', id: 'agents' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
];

// Hide the bar while scrolling down, show it again on the way up.
const useHideOnScroll = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let prev = window.pageYOffset;
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const current = window.pageYOffset;
                setVisible(current < 100 || current < prev);
                prev = current;
                ticking = false;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return visible;
};

// Sections carry scroll-margin-top, so a plain in-page anchor lands below the
// bar and the URL hash stays shareable. We only add smooth scrolling on top.
export const scrollToSection = (id: string) => {
    const target = id === 'home' ? document.body : document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.history.replaceState) {
        window.history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`);
    }
};

const NavBar: React.FC = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isVisible = useHideOnScroll();

    const handleNavClick = (event: React.MouseEvent, id: string) => {
        event.preventDefault();
        scrollToSection(id);
        setDrawerOpen(false);
    };

    return (
        <Slide appear={false} direction="down" in={isVisible}>
            <AppBar
                position="sticky"
                color="transparent"
                elevation={0}
                component="header"
                sx={{
                    borderBottom: `1px solid ${ink[100]}`,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(6px)',
                    height: isSmall ? 56 : 64,
                    justifyContent: 'center',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ minHeight: { xs: '56px !important', md: '64px' }, padding: 0 }}>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <Typography
                                variant="h6"
                                component="a"
                                href="#home"
                                onClick={(e: React.MouseEvent) => handleNavClick(e, 'home')}
                                sx={{
                                    fontWeight: 500,
                                    color: ink[900],
                                    textDecoration: 'none',
                                    letterSpacing: '-0.01em',
                                    '&:hover': { opacity: 0.8 },
                                }}
                            >
                                Koh Uehara
                            </Typography>
                        </Box>

                        <Box component="nav" aria-label="Sections" sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            {NAV_ITEMS.map((item) => (
                                <Button
                                    key={item.id}
                                    component="a"
                                    href={`#${item.id}`}
                                    onClick={(e: React.MouseEvent) => handleNavClick(e, item.id)}
                                    sx={{ fontSize: '0.95rem', fontWeight: 400, px: 1.5, py: 0.5, minWidth: 'auto' }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        {isSmall && (
                            <IconButton
                                size="small"
                                edge="end"
                                color="inherit"
                                aria-label="Open menu"
                                onClick={() => setDrawerOpen(true)}
                                sx={{ padding: 0.5 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>

                <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <Box sx={{ width: 260 }} role="presentation">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                p: 2,
                                borderBottom: `1px solid ${ink[100]}`,
                            }}
                        >
                            <Typography variant="h6">Menu</Typography>
                            <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <List component="nav" aria-label="Sections">
                            {NAV_ITEMS.map((item) => (
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href={`#${item.id}`}
                                        onClick={(e: React.MouseEvent) => handleNavClick(e, item.id)}
                                        sx={{ py: 1.5, px: 3 }}
                                    >
                                        <Typography>{item.label}</Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </AppBar>
        </Slide>
    );
};

export default NavBar;
