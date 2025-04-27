import React from 'react';
import WidgetCard from './WidgetCard';
import { Typography, LinearProgress, Box } from '@mui/material';

const ImageSecurityIssues = () => (
  <WidgetCard title="Image Security Issues" sx={{ minHeight: 250 }}>
    <Typography variant="h6">2 Total Images</Typography>

    <Box sx={{ my: 2 }}>
      <Typography variant="body2">Critical (2)</Typography>
      <LinearProgress
        variant="determinate"
        value={100}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#FDEAEA',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#D73B3B',
          },
        }}
      />
    </Box>

    <Box sx={{ my: 2 }}>
      <Typography variant="body2">High (2)</Typography>
      <LinearProgress
        variant="determinate"
        value={100}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#FDF3E9',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#F2994A',
          },
        }}
      />
    </Box>

    <Box sx={{ my: 2 }}>
      <Typography variant="body2">Medium (0)</Typography>
      <LinearProgress
        variant="determinate"
        value={0}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#ECECEC',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#6C63FF',
          },
        }}
      />
    </Box>

    <Box sx={{ my: 2 }}>
      <Typography variant="body2">Low (0)</Typography>
      <LinearProgress
        variant="determinate"
        value={0}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#ECECEC',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#27AE60',
          },
        }}
      />
    </Box>
  </WidgetCard>
);

export default ImageSecurityIssues;
