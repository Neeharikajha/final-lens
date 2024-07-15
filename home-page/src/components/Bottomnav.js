import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const BottomNavigationComponent = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/');
    } else if (newValue === 1) {
      navigate('/game');
    } else if (newValue === 2) {
      navigate('/profile');
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed', // Make it fixed to the bottom of the screen
        bottom: 0,
        zIndex: 1000, // Ensure it's above other content
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        sx={{ backgroundColor: 'white' }}
      >
        <BottomNavigationAction 
          label="Home" 
          icon={<HomeIcon />} 
          sx={{ '&.Mui-selected': { color: '#EE5F73' } }} // Change color when selected
        />
        <BottomNavigationAction 
          label="Game" 
          icon={<CheckroomOutlinedIcon />} 
          sx={{ '&.Mui-selected': { color: '#EE5F73' } }} // Change color when selected
        />
        <BottomNavigationAction 
          label="Profile" 
          icon={<PersonIcon />} 
          sx={{ '&.Mui-selected': { color: '#EE5F73' } }} // Change color when selected
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationComponent;
