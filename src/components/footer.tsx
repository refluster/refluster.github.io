import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import { ink } from '../styles/theme';
import { NAV_ITEMS, scrollToSection } from './navbar';
import { SOCIAL } from './home';

const Footer: React.FC = () => (
    <Box component="footer" sx={{ borderTop: `1px solid ${ink[100]}`, bgcolor: 'background.paper', py: { xs: 4, md: 5 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Container maxWidth="lg">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    © {new Date().getFullYear()} Koh Uehara
                </Typography>
                <Box component="nav" aria-label="Footer" sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}>
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            variant="body2"
                            onClick={(e: React.MouseEvent) => { e.preventDefault(); scrollToSection(item.id); }}
                            sx={{ color: 'text.secondary' }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link href={SOCIAL.github} target="_blank" rel="noopener noreferrer" variant="body2" sx={{ color: 'text.secondary' }}>
                        GitHub
                    </Link>
                </Box>
            </Box>
        </Container>
    </Box>
);

export default Footer;
