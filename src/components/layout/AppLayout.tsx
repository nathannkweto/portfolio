import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Header } from './Header';
import { Footer } from './Footer';

export const AppLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        {/* The Outlet renders the child route's element */}
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
