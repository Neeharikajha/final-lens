import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SelectionCard({ title, description, ctaName, onClick, backgroundImage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (ctaName === 'VIEW NOW') {
      navigate('/swipe');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Card sx={{ 
      maxWidth: 315, 
      marginBottom: 2, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start',
      position: 'relative',
    }}>
      {backgroundImage && (
        <div
          style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: 0.8,
          }}
        />
      )}
      <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column' }}>
        <CardContent sx={{ 
          flex: '1 0 auto', 
          paddingLeft: 2, 
          textAlign: 'left', 
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
          zIndex: 1, 
        }}>
          <Typography variant="h6" component="div" sx={{ fontSize: 16, marginBottom: 1, fontWeight: 600, color: '#6F6F6F' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14, marginBottom: 1 }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 2, paddingTop: 0, zIndex: 1 }}>
        <Button size="small" color="primary" sx={{ fontSize: 14 }} onClick={handleClick}>
          {ctaName}
        </Button>
      </CardActions>
    </Card>
  );
}
