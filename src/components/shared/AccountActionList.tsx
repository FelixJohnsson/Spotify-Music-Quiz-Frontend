import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const AccountActionList = () => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, color: 'white'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemText primary="Settings" />
      </ListItemButton>

      <ListItemButton>
        <ListItemText primary="Account" />
      </ListItemButton>
    </List>
  );
}

export default AccountActionList