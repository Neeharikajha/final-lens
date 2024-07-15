
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeCloth from './HomeCloth';

export default function TrendingNow() {
  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
        <Typography variant="h6" sx={{ color: 'black', fontSize: 16, fontWeight: 600 }}>
          Trending Now
        </Typography>
        <Typography variant="body2" sx={{ color: 'blue', fontSize: '12px' }}>
          See More
        </Typography>
      </Box>
      <HomeCloth />
    </Box>
  );
}
