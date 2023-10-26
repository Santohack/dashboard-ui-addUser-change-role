import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { deepOrange } from '@mui/material/colors';

const Cards = ({ name, des, role, updateRole }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userRole, setUserRole] = React.useState(role);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRoleChange = (newRole) => {
    setUserRole(newRole);
    updateRole(name, newRole);
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: '10px'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 3 }}>
        <Avatar sx={{ width: 'auto', height: '72px' }} src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' alt='ram' />

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="subtitle1" color={"#8e8f9c"}>{des}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', }}>{userRole}</Typography>
        <IconButton size="small" onClick={handleClick} sx={{ background: 'none' }}>
          <ExpandMoreIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => handleRoleChange('Can Edit')}>Can Edit</MenuItem>
          <MenuItem onClick={() => handleRoleChange('Owner')}>Owner</MenuItem>
          <MenuItem onClick={() => handleRoleChange('Can commit')}>Can commit</MenuItem>
          <MenuItem onClick={() => handleRoleChange('Can View')}>Can View</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Cards;
