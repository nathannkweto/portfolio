import React from 'react';
import { Grid, Typography, Card, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { projects } from '../../data/projects'; // Direct import of static data

export const ProjectsPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Selected Work
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, md: 6}} key={project.id}>
            <Card
              variant="outlined"
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.shortDescription}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Chip key={tech} label={tech} size="small" />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" component={RouterLink} to={`/projects/${project.id}`}>
                  View Case Study
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
