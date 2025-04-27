import React from 'react';
import WidgetCard from './WidgetCard';
import { Typography } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

const TopNamespaceAlerts = () => (
  <WidgetCard title="Workload Alerts">
    <div style={{ textAlign: 'center', padding: 30 }}>
      <BarChartIcon style={{ fontSize: 40, color: '#ccc' }} />
      <Typography variant="body2" color="textSecondary">
        No Graph data available!
      </Typography>
    </div>
  </WidgetCard>
);

export default TopNamespaceAlerts;