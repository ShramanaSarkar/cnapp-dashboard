import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WidgetCard = ({ title, children }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, height: '100%' }}>
      <CardContent>
        {title && (
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
            {title}
          </Typography>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

export default WidgetCard;
