import { useTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import Selfie from '../img/mypic-0.jpg';
import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Projects } from '../projects/index';

const Home: React.FC = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: offsetTop - 64,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    }, []);

    return (
        <Box sx={{ bgcolor: '#fafafa' }}>
            <HeroSection isSmall={isSmall} isMobile={isMobile} />
            <AboutSection id="about" isSmall={isSmall} isMobile={isMobile} />
            <ProjectsSection id="projects" isSmall={isSmall} isMobile={isMobile} />
            <ContactSection id="contact" isSmall={isSmall} isMobile={isMobile} />
        </Box>
    );
};

const HeroSection: React.FC<{ isSmall: boolean, isMobile: boolean }> = ({ isSmall, isMobile }) => {
    return (
        <Box
            id="home"
            sx={{
                py: { xs: 6, sm: 8, md: 12 },
                px: { xs: 2, sm: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 64px)' },
                borderBottom: '1px solid #eaeaea',
            }}
        >
            <Container maxWidth="lg" disableGutters={isMobile}>
                <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 500,
                                mb: { xs: 2, md: 3 },
                                fontSize: { xs: '2rem', sm: '2.2rem', md: '3.2rem' },
                                lineHeight: 1.2
                            }}
                        >
                            A Software Architect Who Discovers Societal and Businesses Challenges.
                        </Typography>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{
                                mb: { xs: 4, md: 6 },
                                fontWeight: 400,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                                maxWidth: '600px'
                            }}
                        >
                            Merging technology and design to uncover hidden challenges and lead them toward solutions.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                width: '100%',
                                height: { xs: '300px', sm: '400px', md: '500px' },
                                borderRadius: '4px',
                                overflow: 'hidden',
                                position: 'relative',
                                display: { xs: 'block', md: 'block' },
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundImage: `url(${Selfie})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '80%',
                                    height: '80%',
                                    filter: 'grayscale(30%)',
                                    transition: 'transform 0.3s ease-in-out',
                                    //'&:hover': {
                                    //    transform: 'scale(1.03)',
                                    //},
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const AboutSection: React.FC<{ id: string, isSmall: boolean, isMobile: boolean }> = ({ id, isSmall, isMobile }) => {
    return (
        <Box
            id={id}
            sx={{
                py: { xs: 8, sm: 10, md: 14 },
                px: { xs: 2, sm: 3, md: 4 },
                bgcolor: '#fff',
                borderBottom: '1px solid #eaeaea',
                scrollMarginTop: { xs: '56px', md: '64px' },
            }}
        >
            <Container maxWidth="lg" disableGutters={isMobile}>
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        mb: { xs: 4, md: 6 },
                        fontWeight: 500,
                        fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2.5rem' },
                    }}
                >
                    Uncovering Future Challenges with Technology and Design
                </Typography>

                <Grid container spacing={{ xs: 3, md: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                            I focus on discovering fundamental challenges faced by society and businesses, leveraging my background in both engineering and design.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                            Once a challenge is clearly identified, finding solutions becomes relatively straightforward. However, many problems today remain unresolved because they are only tackled at a surface level, without addressing the core issues.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                            My approach combines technology and design to identify and articulate these hidden, fundamental challenges and lead them toward feasible solutions.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                            I have worked on various projects, including developing EV charging infrastructure management systems, researching the decentralization of energy systems, and leading SaaS product development. With a strong business perspective, I integrate technology architecture and UX design to create new value.
                        </Typography>
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', mt: 4, gap: { xs: 1, sm: 2, md: 3 }, flexWrap: 'wrap' }}>
                    <SocialButton Icon={LinkedInIcon} label="LinkedIn" />
                    <SocialButton Icon={GitHubIcon} label="GitHub" />
                    <SocialButton Icon={TwitterIcon} label="X" />
                    <SocialButton Icon={YouTubeIcon} label="YouTube" />
                </Box>
            </Container>
        </Box>
    );
};

const SocialButton: React.FC<{
    Icon: React.ElementType,
    label: string,
    url?: string
}> = ({ Icon, label, url }) => {

    const getDefaultUrl = (service: string): string => {
        switch (service.toLowerCase()) {
            case 'linkedin':
                return `https://www.linkedin.com/in/koh-uehara-26986910a`;
            case 'github':
                return `https://github.com/refluster`;
            case 'x':
            case 'twitter':
                return `https://x.com/refluster`;
            case 'youtube':
                return `https://www.youtube.com/@KohUehara`;
            default:
                return '#';
        }
    };

    const linkUrl = url || getDefaultUrl(label);

    return (
        <Button
            component="a"
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Icon />}
            variant="text"
            sx={{
                color: '#000',
                textTransform: 'none',
                px: { xs: 1, md: 2 },
                '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.04)',
                }
            }}
        >
            {label}
        </Button>
    );
};

const ProjectsSection: React.FC<{ id: string, isSmall: boolean, isMobile: boolean }> = ({ id, isSmall, isMobile }) => {
    return (
        <Box
            id={id}
            sx={{
                py: { xs: 8, sm: 10, md: 14 },
                px: { xs: 2, sm: 3, md: 4 },
                bgcolor: '#fafafa',
                borderBottom: '1px solid #eaeaea',
                scrollMarginTop: { xs: '56px', md: '64px' },
            }}
        >
            <Container maxWidth="lg" disableGutters={isMobile}>
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        mb: { xs: 5, md: 8 },
                        fontWeight: 500,
                        fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2.5rem' },
                    }}
                >
                    Projects
                </Typography>

                <Grid container spacing={{ xs: 3, md: 5 }}>
                    {Projects.map((project, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Box
                                sx={{
                                    mb: { xs: 4, md: 6 },
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease',
                                    //'&:hover': {
                                    //    transform: 'translateY(-8px)',
                                    //},
                                }}
                            >
                                <Box
                                    sx={{
                                        mb: 2,
                                        height: { xs: 200, sm: 220, md: 280 },
                                        //borderRadius: '4px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        //boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundImage: `url(${project.images[0].src})`,
                                            backgroundSize: project.images[0].backgroundSize || 'cover',
                                            backgroundPosition: 'center',
                                            width: '100%',
                                            height: '100%',
                                            transition: 'transform 0.5s ease',
                                            //'&:hover': {
                                            //    transform: 'scale(1.05)',
                                            //},
                                        }}
                                    />
                                </Box>

                                <Box sx={{
                                    mb: 2,
                                    pb: 0.5,
                                }}>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            mb: 1,
                                            fontWeight: 500,
                                            lineHeight: 1.3,
                                            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                                            textTransform: 'capitalize',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{
                                            lineHeight: 1.6,
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                        }}
                                    >
                                        {project.description}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Button
                                        component="a"
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="text"
                                        sx={{
                                            color: '#666',
                                            textTransform: 'none',
                                            border: '1px solid #ccc',
                                            px: { xs: 1, md: 2 },
                                            '&:hover': {
                                                bgcolor: 'rgba(0,0,0,0.04)',
                                            }
                                        }}
                                    >
                                        View Project
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

const ContactSection: React.FC<{ id: string, isSmall: boolean, isMobile: boolean }> = ({ id, isSmall, isMobile }) => {
    return (
        <Box
            id={id}
            sx={{
                py: { xs: 8, sm: 10, md: 14 },
                px: { xs: 2, sm: 3, md: 4 },
                bgcolor: '#fff',
                scrollMarginTop: { xs: '56px', md: '64px' },
            }}
        >
            <Container maxWidth="lg" disableGutters={isMobile}>
                <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                mb: 3,
                                fontWeight: 500,
                                fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2.5rem' },
                            }}
                        >
                            Let's Work Together
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: { xs: 4, md: 6 },
                                maxWidth: '500px',
                                lineHeight: 1.8,
                                fontSize: { xs: '0.95rem', md: '1rem' },
                            }}
                        >
                            Interested in discovering and solving the fundamental challenges facing your business or project? I'd love to hear from you.
                        </Typography>
                        <Button
                            variant="contained"
                            size={isSmall ? "medium" : "large"}
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                '&:hover': {
                                    bgcolor: '#333',
                                    color: '#fafafa'
                                }
                            }}
                        >
                            Get in Touch
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            p: { xs: 3, md: 4 },
                            bgcolor: '#fafafa',
                            //borderRadius: '4px',
                            border: '1px solid #eaeaea',
                        }}>
                            <Typography
                                variant="h5"
                                component="h3"
                                sx={{
                                    mb: 3,
                                    fontWeight: 500,
                                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                                }}
                            >
                                Contact
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 2,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                }}
                            >
                                Email: <a href="mailto:refluster@gmail.com" style={{ color: '#000', textDecoration: 'none', borderBottom: '1px solid #000' }}>refluster@gmail.com</a>
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                mt: 3,
                                gap: { xs: 1, md: 2 },
                                flexWrap: 'wrap'
                            }}>
                                <SocialButton Icon={LinkedInIcon} label="LinkedIn" />
                                <SocialButton Icon={GitHubIcon} label="GitHub" />
                                <SocialButton Icon={TwitterIcon} label="X" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
