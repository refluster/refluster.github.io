import React, { useEffect } from 'react';
import { Box, Button, Chip, Container, Grid, Link, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Selfie from '../img/mypic-0.jpg';
import { Projects, Project } from '../projects/index';
import WorkforceSection from './workforce';
import { Section, SectionHeading } from './section';
import { scrollToSection } from './navbar';
import { ink } from '../styles/theme';

export const EMAIL = 'refluster@gmail.com';
export const SOCIAL = {
    linkedin: 'https://www.linkedin.com/in/koh-uehara-26986910a',
    github: 'https://github.com/refluster',
    x: 'https://x.com/refluster',
    youtube: 'https://www.youtube.com/@KohUehara',
};

const Home: React.FC = () => {
    useEffect(() => {
        // Land on the right section when the page opens with a hash. Wait a
        // beat so images and the live section have laid out.
        const id = window.location.hash.replace(/^#/, '');
        if (!id) return;
        const timer = window.setTimeout(() => scrollToSection(id), 300);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <Box component="main" sx={{ bgcolor: 'background.default' }}>
            <HeroSection />
            <AboutSection id="about" />
            <ServicesSection id="services" />
            <WorkforceSection id="agents" />
            <ProjectsSection id="projects" />
            <ContactSection id="contact" />
        </Box>
    );
};

/* ------------------------------------------------------------------ Hero */

const HeroSection: React.FC = () => {
    const go = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        scrollToSection(id);
    };
    return (
        <Section
            id="home"
            sx={{
                py: { xs: 8, sm: 10, md: 14 },
                minHeight: { md: 'calc(100vh - 64px)' },
                display: 'flex',
                alignItems: 'center',
                scrollMarginTop: 0,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
                    <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
                        <Typography variant="overline" component="p" sx={{ color: 'text.secondary', mb: 2 }}>
                            Koh Uehara · Software architect
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{ mb: { xs: 3, md: 4 }, fontSize: { xs: '2.1rem', sm: '2.6rem', md: '3.4rem' } }}
                        >
                            I find the problem worth solving, then build the system that solves it.
                        </Typography>
                        <Typography
                            variant="h5"
                            component="p"
                            color="text.secondary"
                            sx={{
                                mb: { xs: 4, md: 5 },
                                fontWeight: 400,
                                fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.3rem' },
                                lineHeight: 1.6,
                                maxWidth: 620,
                            }}
                        >
                            Technology, design and business, worked on together. Energy and mobility
                            platforms, consumer products, and now an organisation of AI agents that
                            ships work with me every day.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                size="large"
                                href="#projects"
                                onClick={go('projects')}
                                endIcon={<ArrowForwardIcon />}
                            >
                                See the work
                            </Button>
                            <Button variant="outlined" size="large" href="#contact" onClick={go('contact')}>
                                Get in touch
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
                        <Box
                            component="img"
                            src={Selfie}
                            alt="Koh Uehara"
                            width={271}
                            height={271}
                            sx={{
                                display: 'block',
                                width: { xs: 160, sm: 200, md: '100%' },
                                maxWidth: 400,
                                height: 'auto',
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                                borderRadius: 1,
                                filter: 'grayscale(30%)',
                                ml: { md: 'auto' },
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
};

/* ----------------------------------------------------------------- About */

const FACTS: { label: string; value: string }[] = [
    { label: 'Role', value: 'Software architect and product lead, from concept to launch' },
    { label: 'Domains', value: 'Energy and mobility (HEMS, EV charging, DERMS), smart home, consumer electronics, SaaS, art and wellness' },
    { label: 'Craft', value: 'System architecture, UX design, DevOps, and lately organisation design for AI agents' },
    { label: 'Languages', value: 'Japanese and English' },
];

const AboutSection: React.FC<{ id: string }> = ({ id }) => (
    <Section id={id} sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
            <SectionHeading
                overline="About"
                title="Most problems stay unsolved because they were never properly named."
                mb={{ xs: 4, md: 6 }}
            />
            <Grid container spacing={{ xs: 4, md: 8 }}>
                <Grid item xs={12} md={7}>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        I work at the point where a business, a technology and a user experience have to
                        meet. My background spans engineering and design, and I use both to find the
                        fundamental challenge underneath the visible one. Once that challenge is clearly
                        articulated, the solution is usually the straightforward part.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        That approach has taken me through video codecs for cameras, home energy
                        management, EV charging and distributed energy resources, SaaS product
                        leadership, and platforms for art and wellness. Most of it was at Panasonic,
                        some of it on my own.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: { xs: 3, md: 0 } }}>
                        Today it also means designing how people and AI agents work together as one
                        organisation. I run one myself, and its live activity is on this page.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box component="dl" sx={{ m: 0, borderTop: `1px solid ${ink[100]}` }}>
                        {FACTS.map((f) => (
                            <Box
                                key={f.label}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '96px 1fr', sm: '120px 1fr' },
                                    gap: 2,
                                    py: 2,
                                    borderBottom: `1px solid ${ink[100]}`,
                                }}
                            >
                                <Typography component="dt" variant="body2" sx={{ color: 'text.secondary' }}>
                                    {f.label}
                                </Typography>
                                <Typography component="dd" variant="body2" sx={{ m: 0, lineHeight: 1.7 }}>
                                    {f.value}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', mt: 3, gap: { xs: 0.5, sm: 1 }, flexWrap: 'wrap' }}>
                        <SocialButton Icon={LinkedInIcon} label="LinkedIn" url={SOCIAL.linkedin} />
                        <SocialButton Icon={GitHubIcon} label="GitHub" url={SOCIAL.github} />
                        <SocialButton Icon={XIcon} label="X" url={SOCIAL.x} />
                        <SocialButton Icon={YouTubeIcon} label="YouTube" url={SOCIAL.youtube} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Section>
);

const SocialButton: React.FC<{ Icon: React.ElementType; label: string; url: string }> = ({ Icon, label, url }) => (
    <Button
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<Icon />}
        variant="text"
        sx={{ px: { xs: 1, md: 1.5 }, fontWeight: 400 }}
    >
        {label}
    </Button>
);

/* -------------------------------------------------------------- Services */

const SERVICES: { title: string; body: string; proof: string }[] = [
    {
        title: 'Finding the real problem',
        body: 'Discovery and problem framing for a business, a product or a market. Interviews, prototypes and a clearly articulated challenge the whole team can rally around.',
        proof: 'HomeX, ondu, MedicalArt',
    },
    {
        title: 'Architecture for a first launch and a long roadmap',
        body: 'Systems designed to ship quickly and keep growing: platforms, data flows, and the trade-offs that keep both possible. Hands-on from design to DevOps.',
        proof: 'Consumer DERMS, Smart HEMS, Uttzs',
    },
    {
        title: 'Building an AI-native organisation',
        body: 'Roles, governance and platform for AI agents that do real, accountable work alongside a team. I design and run one, and the numbers are public.',
        proof: 'Software Talent Network',
    },
];

const ServicesSection: React.FC<{ id: string }> = ({ id }) => (
    <Section id={id}>
        <Container maxWidth="lg">
            <SectionHeading
                overline="What I can help with"
                title="Three kinds of work I take on."
                aside={
                    <Typography variant="body1" color="text.secondary">
                        As an architect on your team, an advisor to it, or the person who builds the
                        first version. Each comes with a project on this page as proof.
                    </Typography>
                }
                mb={{ xs: 4, md: 6 }}
            />
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {SERVICES.map((s, i) => (
                    <Grid item xs={12} md={4} key={s.title}>
                        <Box
                            sx={{
                                height: '100%',
                                p: { xs: 3, md: 4 },
                                bgcolor: 'background.paper',
                                border: `1px solid ${ink[100]}`,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography variant="overline" component="p" sx={{ color: 'text.secondary', mb: 1.5 }}>
                                0{i + 1}
                            </Typography>
                            <Typography variant="h5" component="h3" sx={{ mb: 2, fontSize: { xs: '1.15rem', md: '1.3rem' } }}>
                                {s.title}
                            </Typography>
                            <Typography variant="body2" sx={{ lineHeight: 1.8, mb: 3, flexGrow: 1 }}>
                                {s.body}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                See: {s.proof}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Section>
);

/* -------------------------------------------------------------- Projects */

const ProjectsSection: React.FC<{ id: string }> = ({ id }) => (
    <Section id={id} sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
            <SectionHeading
                overline="Projects"
                title="Selected work, newest first."
                aside={
                    <Typography variant="body1" color="text.secondary">
                        Products that reached the market, research that shaped a roadmap, and a few
                        things built for the joy of it. Press links are included where they exist.
                    </Typography>
                }
            />
            <Grid container spacing={{ xs: 4, md: 5 }}>
                {Projects.map((project) => (
                    <Grid item xs={12} sm={6} md={project.featured ? 12 : 6} key={project.title}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Section>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { image, featured } = project;
    const fit = image.fit ?? 'cover';
    const media = (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: fit === 'contain' ? 'background.default' : ink[100],
                border: `1px solid ${ink[100]}`,
                aspectRatio: featured ? { xs: '16 / 10', md: '4 / 3' } : '16 / 10',
                width: '100%',
            }}
        >
            <Box
                component="img"
                src={image.src}
                alt={image.alt}
                loading={featured ? 'eager' : 'lazy'}
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: fit,
                    p: fit === 'contain' ? 3 : 0,
                    boxSizing: 'border-box',
                    transition: 'transform 0.5s ease',
                    'a:hover &': { transform: 'scale(1.02)' },
                }}
            />
        </Box>
    );

    const body = (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5, fontVariantNumeric: 'tabular-nums' }}>
                {project.period} · {project.org}
            </Typography>
            <Typography
                variant="h5"
                component="h3"
                sx={{ mb: 0.5, fontSize: featured ? { xs: '1.4rem', md: '1.8rem' } : { xs: '1.2rem', md: '1.4rem' } }}
            >
                {project.url ? (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ color: 'inherit' }}>
                        {project.title}
                    </Link>
                ) : project.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.5 }}>
                {project.subtitle}
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, mb: 2 }}>
                {project.description}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
                <Box component="span" sx={{ color: 'text.secondary' }}>Role · </Box>
                {project.role}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: project.articles.length ? 2.5 : 0 }}>
                {project.tags.map((t) => (
                    <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: ink[200], color: ink[700] }} />
                ))}
            </Box>
            {project.articles.length > 0 && (
                <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, mt: 'auto' }}>
                    {project.articles.map((a) => (
                        <Box component="li" key={a.url} sx={{ mb: 0.75, display: 'flex', gap: 0.75, alignItems: 'flex-start' }}>
                            <ArrowOutwardIcon sx={{ fontSize: 14, mt: '5px', color: 'text.secondary', flexShrink: 0 }} />
                            <Link
                                href={a.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="body2"
                                sx={{ color: ink[700], lineHeight: 1.5 }}
                            >
                                {a.title}
                            </Link>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );

    if (featured) {
        return (
            <Box component="article" sx={{ pb: { xs: 2, md: 4 }, borderBottom: `1px solid ${ink[100]}`, mb: { xs: 0, md: 2 } }}>
                <Grid container spacing={{ xs: 3, md: 6 }}>
                    <Grid item xs={12} md={6}>
                        {project.url ? (
                            <Link href={project.url} target="_blank" rel="noopener noreferrer" aria-label={project.title} sx={{ display: 'block' }}>
                                {media}
                            </Link>
                        ) : media}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {body}
                    </Grid>
                </Grid>
            </Box>
        );
    }

    return (
        <Box component="article" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 2.5 }}>
                {project.url ? (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" aria-label={project.title} sx={{ display: 'block' }}>
                        {media}
                    </Link>
                ) : media}
            </Box>
            {body}
        </Box>
    );
};

/* --------------------------------------------------------------- Contact */

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from kohuehara.xyz')}`;

const ContactSection: React.FC<{ id: string }> = ({ id }) => (
    <Section id={id} sx={{ borderBottom: 'none' }}>
        <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
                <Grid item xs={12} md={7}>
                    <Typography variant="overline" component="p" sx={{ color: 'text.secondary', mb: 2 }}>
                        Contact
                    </Typography>
                    <Typography variant="h3" component="h2" sx={{ mb: 3, fontSize: { xs: '1.6rem', sm: '1.85rem', md: '2.4rem' } }}>
                        Have a problem that resists the obvious fix?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: { xs: 3, md: 4 }, maxWidth: 560 }}>
                        Tell me what you are trying to change, where it is stuck, and what a good
                        outcome looks like. A short email is enough to start. I read everything and
                        reply in Japanese or English, whichever you write in.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                        <Button variant="contained" size="large" href={MAILTO} startIcon={<MailOutlineIcon />}>
                            Email me
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            href={SOCIAL.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<LinkedInIcon />}
                        >
                            LinkedIn
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: 'background.paper', border: `1px solid ${ink[100]}` }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                            Email
                        </Typography>
                        <Link href={MAILTO} sx={{ fontSize: '1.05rem', wordBreak: 'break-all' }}>
                            {EMAIL}
                        </Link>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3, mb: 1 }}>
                            Good to include
                        </Typography>
                        <Box component="ul" sx={{ m: 0, pl: 2.5, '& li': { mb: 0.5, lineHeight: 1.7 } }}>
                            <li>What you are building or changing, in a sentence</li>
                            <li>Where it is stuck, or what you cannot yet name</li>
                            <li>Rough timeline and how you would like to work together</li>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3, mb: 1 }}>
                            Elsewhere
                        </Typography>
                        <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 }, flexWrap: 'wrap', ml: -1 }}>
                            <SocialButton Icon={GitHubIcon} label="GitHub" url={SOCIAL.github} />
                            <SocialButton Icon={XIcon} label="X" url={SOCIAL.x} />
                            <SocialButton Icon={YouTubeIcon} label="YouTube" url={SOCIAL.youtube} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Section>
);

export default Home;
