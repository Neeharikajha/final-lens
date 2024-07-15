import * as React from 'react';
import Box from '@mui/material/Box';
import Main from './Main';
import BottomNavbar from './Bottomnav';
import SelectionCard from './SelectionCard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';


const Game = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: 2, 
      padding: '16px', 
    }}>
      <Main />

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        gap: 1, 
        padding: '8px', 
        maxWidth: 315, 
        margin: 'auto', 
        marginBottom: '40px', 
      }}>
        <SelectionCard
          icon={SportsEsportsIcon}
          title="Participate, Style and Play"
          description="Play this by styling models and get selected to win exciting offers !!"
          ctaName="Play Now"
          
        />
        <SelectionCard
          icon={ThreeDRotationIcon}
          title="Use Virtual Try-ons"
          description="Play this by styling models and get selected to win exciting offers !!"
          ctaName="Try now"
          
        />
        <SelectionCard
          icon={TipsAndUpdatesIcon}
          title="Get fashion Inspiration :)"
          description="Play this by styling models and get selected to win exciting offers !!"
          ctaName="VIEW NOW"
        />
      </Box>

      <BottomNavbar />
    </Box>
  );
};

export default Game;
