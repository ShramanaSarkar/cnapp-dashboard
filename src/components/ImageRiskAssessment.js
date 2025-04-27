import React from 'react';
import WidgetCard from './WidgetCard';
import { Typography, LinearProgress, Box } from '@mui/material';

const ImageRiskAssessment = () => (
  <WidgetCard title="Image Risk Assessment" sx={{ minHeight: 250 }}>
    <Typography variant="h6">1470 Total Vulnerabilities</Typography>
    <Box sx={{ my: 2 }}>
      <Typography variant="body2">Critical (9)</Typography>
      <LinearProgress variant="determinate" value={10} color="error" />
    </Box>
    <Box sx={{ my: 2 }}>
      <Typography variant="body2">High (150)</Typography>
      <LinearProgress variant="determinate" value={60} sx={{ bgcolor: '#f5d0d0', '& .MuiLinearProgress-bar': { bgcolor: '#f2994a' } }} />
    </Box>
  </WidgetCard>
);

export default ImageRiskAssessment;
