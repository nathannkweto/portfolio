import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  useTheme,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { experience } from '../../data/experience';

export const ExperiencePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Professional Experience
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        A timeline of my professional career and technical leadership roles.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {experience.map((job) => (
          <Paper key={job.id} elevation={0} variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            {/* Header Section: Role & Company */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              <Box>
                <Typography variant="h5" component="h2" color="primary.main" fontWeight="bold">
                  {job.role}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mt: 0.5,
                    color: 'text.secondary',
                  }}
                >
                  <BusinessIcon fontSize="small" />
                  <Typography variant="body1" fontWeight="500">
                    {job.company}
                  </Typography>
                  <Typography variant="body2" sx={{ mx: 1 }}>
                    •
                  </Typography>
                  <Typography variant="body2">{job.location}</Typography>
                </Box>
              </Box>

              {/* Date Section */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mt: { xs: 1, md: 0 },
                  color: 'text.secondary',
                }}
              >
                <CalendarTodayIcon fontSize="small" />
                <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                  {job.startDate} — {job.endDate}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Responsibility List */}
            <List dense>
              {job.description.map((point, index) => (
                <ListItem key={index} alignItems="flex-start" sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24, mt: 1 }}>
                    <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={point}
                    primaryTypographyProps={{
                      variant: 'body1',
                      style: { lineHeight: 1.6 },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* Tech Stack Chips */}
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {job.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.action.hover,
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
