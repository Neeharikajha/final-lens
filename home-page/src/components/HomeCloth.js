import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import frock from '../Images/frock.png';

export default function TwoActionAreaCards() {
  return (
    <Box sx={{ display: 'flex', gap: 2, padding: 2 }}>
      <Card sx={{ maxWidth: 160, height: 280}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={frock}
            alt="Frock"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ padding: '8px' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', textAlign: 'left', fontWeight : 500 }}>
              Frock
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', textAlign: 'left' }}>
              Frock description goes here.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4, textAlign: 'left' }}>
              <StarIcon sx={{ fontSize: '12px', color: '#ffb400' }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', marginTop : 0.5 }}>
                4.2
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontSize: '16px', color: 'green', marginTop: 0, fontWeight: 'medium', textAlign: 'right', fontWeight: 'bold' }}>
              ₹400
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 160, height: 280 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={frock}
            alt="Frock"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ padding: '8px' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', textAlign: 'left' }}>
              Dress
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', textAlign: 'left' }}>
              Dress description goes here.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.2, textAlign: 'left' }}>
              <StarIcon sx={{ fontSize: '12px', color: '#ffb400' }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', marginTop : 0.5}}>
                4.2
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontSize: '16px', color: 'green', marginTop: 0, fontWeight: 'bold', textAlign: 'right' }}>
              ₹400
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
