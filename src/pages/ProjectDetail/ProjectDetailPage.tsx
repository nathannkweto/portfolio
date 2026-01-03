import React from 'react';
import { useParams, Navigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { projects } from '../../data/projects';

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Data Logic: Find the project synchronously
  const project = projects.find((p) => p.id === projectId);

  // Guard Clause: If project not found, redirect gracefully (or show 404 component)
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Box>
      <Button startIcon={<ArrowBackIcon />} component={RouterLink} to="/projects" sx={{ mb: 4 }}>
        Back to Projects
      </Button>

      <Typography variant="h3" component="h1" gutterBottom>
        {project.title}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
        {project.technologies.map((tech) => (
          <Chip key={tech} label={tech} color="primary" variant="outlined" />
        ))}
      </Box>

      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
        {project.fullDescription}
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Key Features & Architecture
      </Typography>
      <List>
        {project.features.map((feature, index) => (
          <ListItem key={index} disableGutters>
            <ListItemText primary={`• ${feature}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
