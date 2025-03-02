import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, useMediaQuery, Drawer, List, ListItem, IconButton, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// スクロール処理のためのカスタムフック
const useScrollToElement = () => {
    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offsetTop - 64, // ヘッダーの高さ分オフセット
                behavior: 'smooth'
            });
        }
    };
    return scrollToElement;
};

// スクロール時にヘッダーを隠すためのカスタムフック
const useHideOnScroll = () => {
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = prevScrollPos < currentScrollPos;

            if (currentScrollPos > 100) { // 100px以上スクロールした場合のみ適用
                setVisible(!isScrollingDown);
            } else {
                setVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return visible;
};

const NavBar: React.FC = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const scrollToElement = useScrollToElement();
    const isVisible = useHideOnScroll();

    const handleNavClick = (id: string) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            scrollToElement(id);
        }
        if (drawerOpen) setDrawerOpen(false);
    };

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <Slide appear={false} direction="down" in={isVisible}>
            <AppBar
                position="sticky"
                color="transparent"
                elevation={0}
                sx={{
                    borderBottom: '1px solid #eaeaea',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(5px)',
                    height: isSmall ? '56px' : '64px', // モバイルでは高さを小さく
                    justifyContent: 'center'
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: isSmall ? '56px !important' : '64px',
                            padding: 0
                        }}
                    >
                        <Box sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Typography
                                variant="h6"
                                component="a"
                                onClick={() => handleNavClick('home')}
                                sx={{
                                    fontWeight: 500,
                                    color: '#000',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity: 0.8,
                                    }
                                }}
                            >
                                Koh Uehara
                            </Typography>
                        </Box>

                        {/* デスクトップ表示のナビゲーション */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.id}
                                    label={item.label}
                                    onClick={() => handleNavClick(item.id)}
                                />
                            ))}
                        </Box>

                        {/* モバイル表示のメニューボタン */}
                        {isSmall && (
                            <IconButton
                                size="small"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setDrawerOpen(true)}
                                sx={{ padding: 0.5 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>

                {/* モバイル用のドロワーメニュー */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                    >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 2,
                            borderBottom: '1px solid #eaeaea'
                        }}>
                            <Typography variant="h6">Menu</Typography>
                            <IconButton onClick={() => setDrawerOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <List>
                            {navItems.map((item) => (
                                <ListItem
                                    button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    sx={{ py: 1.5 }}
                                >
                                    <Typography>{item.label}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </AppBar>
        </Slide>
    );
};

const NavLink: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                color: '#000',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 400,
                px: 1.5, // 水平方向のパディングを小さく
                py: 0.5, // 垂直方向のパディングを小さく
                minWidth: 'auto',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    opacity: 0.9,
                }
            }}
        >
            {label}
        </Button>
    );
};

export default NavBar;