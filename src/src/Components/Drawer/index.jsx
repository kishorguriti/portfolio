import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function DrawerComponent() {
  const [open, setOpen] = React.useState(true);
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['ABOUT', 'SKILLS', 'EXPERIENCE', 'PROJECTS','MODULES','COMMENTS'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <a href={`#${text.toLowerCase()}`}>
              <ListItemText  primary={text} onClick={()=>setOpen(false)} />
            </a>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );

  return (
    <div>
      <Drawer open={open}  anchor='right' >
        {DrawerList}
      </Drawer>
    </div>
  );
}
