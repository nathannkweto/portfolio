import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Nkweto Technologies.
        </Typography>
      </Container>
    </Box>
  );
};
