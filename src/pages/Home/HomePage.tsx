import React from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  Grid,
  Tooltip,
  Stack,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article'; // Generic icon for other platforms
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { profile } from '../../data/profile';
import type { SocialLink } from '../../types/profile';

// Helper to map string identifiers to Icons.
// This keeps UI logic out of the data layer.
const getIcon = (platform: SocialLink['platform']) => {
  switch (platform) {
    case 'github':
      return <GitHubIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'email':
      return <EmailIcon />;
    default:
      return <ArticleIcon />;
  }
};

export const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column: Text Content */}
          <Grid size={{ xs: 12, md: 10}}>
            {/* Name & Title */}
            <Typography
              variant="overline"
              color="primary.main"
              sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}
            >
              {profile.title}
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(45deg, #0A1929 30%, #0050ff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {profile.name}
            </Typography>

            <Typography variant="h4" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
              {profile.tagline}
            </Typography>

            {/* About Section */}
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: '1.1rem', maxWidth: '600px', mb: 4, lineHeight: 1.8 }}
            >
              {profile.shortBio}
            </Typography>

            {/* Action Area: CTA + Socials */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/projects"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5 }}
              >
                View Projects
              </Button>

              <Box sx={{ display: 'flex', gap: 1 }}>
                {profile.socials.map((social) => (
                  <Tooltip key={social.platform} title={social.platform} arrow>
                    <IconButton
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': { borderColor: 'primary.main', backgroundColor: 'action.hover' },
                      }}
                    >
                      {getIcon(social.platform)}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
