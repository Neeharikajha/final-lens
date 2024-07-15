import * as React from 'react';
import Box from '@mui/material/Box';
import MultiActionAreaCard from './MultiActionAreaCard'; // Import your card component

export default function ThreeCards() {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, // Stack cards vertically on small screens, horizontally on medium screens
      justifyContent: 'center', 
      gap: 2, // Gap between cards
      padding: '8px', // External padding
    }}>
      <MultiActionAreaCard />
      <MultiActionAreaCard />
      <MultiActionAreaCard />
    </Box>
  );
}
