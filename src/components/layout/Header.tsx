import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'text.primary', fontWeight: 700 }}
          >
            NKWETO.tech
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography
              component={RouterLink}
              to="/projects"
              sx={{ textDecoration: 'none', color: 'text.primary' }}
            >
              Projects
            </Typography>
            <Typography
              component={RouterLink}
              to="/experience"
              sx={{ textDecoration: 'none', color: 'text.primary' }}
            >
              Experience
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
