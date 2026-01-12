import React from 'react';
import { Typography, Card, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import { projects } from '../../data/projects';

export const ProjectsPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Selected Work
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {projects.map((project) => {
          // FIX: Flatten the new 'technologyStack' to get a simple list of tech for the card preview
          const previewTech = project.technologyStack
            .flatMap((stack) => stack.technologies) // Merge all categories
            .slice(0, 4); // Take only the first 4 items

          return (
            <Grid size={{ xs: 12, md: 6 }} key={project.id}>
              <Card
                variant="outlined"
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {project.name}{' '}
                    {/* Note: updated from title to name if you changed that too, otherwise keep title */}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.shortDescription}
                  </Typography>

                  {/* Render the flattened tech stack */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {previewTech.map((tech) => (
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
          );
        })}
      </Grid>
    </Box>
  );
};
