import React from 'react';
import { useParams, Navigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Chip,
  Button,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import WarningIcon from '@mui/icons-material/Warning';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import { projects } from '../../data/projects';
import type { ProjectStatus } from '../../types/project';

// Helper for Status Colors
const getStatusColor = (status: ProjectStatus) => {
  switch (status) {
    case 'production':
      return 'success';
    case 'production-ready':
      return 'info';
    case 'mvp':
      return 'warning';
    case 'prototype':
      return 'default';
  }
};

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <Box sx={{ maxWidth: '1000px', mx: 'auto', pb: 8 }}>
      {/* 1. HEADER SECTION */}
      <Box sx={{ mb: 6 }}>
        <Button startIcon={<ArrowBackIcon />} component={RouterLink} to="/projects" sx={{ mb: 3 }}>
          Back to Projects
        </Button>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
          <Chip
            label={project.status.toUpperCase().replace('-', ' ')}
            color={getStatusColor(project.status)}
            size="small"
            sx={{ fontWeight: 'bold' }}
          />
          <Typography variant="overline" sx={{ fontSize: '1rem', color: 'text.secondary' }}>
            {project.role}
          </Typography>
        </Box>

        <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
          {project.name}
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 3, maxWidth: '800px' }}>
          {project.shortDescription}
        </Typography>

        {project.repositoryUrl && (
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={project.repositoryUrl}
            target="_blank"
          >
            View Repository
          </Button>
        )}
      </Box>
      <Divider sx={{ my: 4 }} />
      {/* 2. PROBLEM & SCOPE */}
      <Box component="section" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Problem & Scope
        </Typography>
        <Typography paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
          {project.problemStatement}
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              variant="outlined"
              sx={{
                p: 3,
                height: '100%',
                borderColor: 'success.light',
                bgcolor: 'success.lighter',
              }}
            >
              <Typography
                variant="h6"
                color="success.main"
                gutterBottom
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <CheckCircleIcon /> In Scope
              </Typography>
              <List dense>
                {project.inScope.map((item, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText primary={`• ${item}`} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 3, height: '100%', borderColor: 'error.light' }}>
              <Typography
                variant="h6"
                color="error.main"
                gutterBottom
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <CancelIcon /> Out of Scope
              </Typography>
              <List dense>
                {project.outOfScope.map((item, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText primary={`• ${item}`} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* 3. ARCHITECTURE */}
      <Box component="section" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Architecture
        </Typography>
        <Typography paragraph>{project.architectureOverview}</Typography>

        {project.architectureDiagrams.map((diag, index) => (
          <Box key={index} sx={{ my: 4, textAlign: 'center' }}>
            <Paper variant="outlined" sx={{ p: 1, display: 'inline-block' }}>
              <img
                src={diag.imagePath}
                alt={diag.title}
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </Paper>
            <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
              Figure {index + 1}: {diag.title} — {diag.description}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* 4. TECHNOLOGY STACK */}
      <Box component="section" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Technology Stack
        </Typography>
        <Grid container spacing={2}>
          {project.technologyStack.map((stack) => (
            <Grid size={{ xs: 12, sm: 4 }} key={stack.category}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default' }}>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {stack.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {stack.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="small" variant="outlined" />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* 5. DESIGN DECISIONS (CRITICAL SECTION) */}
      <Box component="section" sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight="bold"
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <BuildIcon /> Engineering Decisions
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Key architectural trade-offs and rationale.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {project.designDecisions.map((decision, i) => (
            <Paper key={i} variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {decision.decision}
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="subtitle2" color="success.main">
                    Why we chose this:
                  </Typography>
                  <Typography variant="body2">{decision.rationale}</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="subtitle2" color="warning.main">
                    Trade-offs & Risks:
                  </Typography>
                  <Typography variant="body2">{decision.tradeOffs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      </Box>
      {/* 6. RELIABILITY & SECURITY */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <SecurityIcon fontSize="small" /> Security
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table size="small">
              <TableHead sx={{ bgcolor: 'action.hover' }}>
                <TableRow>
                  <TableCell>Area</TableCell>
                  <TableCell>Mitigation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {project.securityConsiderations.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell sx={{ fontWeight: 'bold', width: '30%' }}>{item.area}</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <WarningIcon fontSize="small" /> Failure Modes
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table size="small">
              <TableHead sx={{ bgcolor: 'action.hover' }}>
                <TableRow>
                  <TableCell>Scenario</TableCell>
                  <TableCell>Handling Strategy</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {project.failureModes.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell sx={{ fontWeight: 'bold', width: '30%' }}>{item.scenario}</TableCell>
                    <TableCell>{item.handling}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {/* 7. QUALITY & MATURITY */}
      <Box component="section">
        <Typography variant="h5" gutterBottom>
          Retrospective
        </Typography>
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Testing Strategy:</strong> {project.testingStrategy}
        </Alert>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Lessons Learned
            </Typography>
            <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
              {project.lessonsLearned.map((lesson, i) => (
                <ListItem key={i} sx={{ display: 'list-item' }}>
                  <ListItemText primary={lesson} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="text.secondary">
              Known Limitations
            </Typography>
            <List dense sx={{ listStyleType: 'circle', pl: 2, color: 'text.secondary' }}>
              {project.knownLimitations.map((limitation, i) => (
                <ListItem key={i} sx={{ display: 'list-item' }}>
                  <ListItemText primary={limitation} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
