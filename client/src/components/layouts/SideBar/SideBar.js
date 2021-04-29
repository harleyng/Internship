import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemIcon, ListItemText, Divider, Hidden, Drawer, Typography } from '@material-ui/core'
import { Mail, MenuIcon, Inbox } from '@material-ui/icons'
import useStyles from './styles'
import { useTheme } from '@material-ui/core/styles';

import logo from '../../../img/logo-blue.png';
import { toggle } from '../../../actions/drawer'

const SideBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const mobileOpen = useSelector(state => state.drawerToggler);

  const handleDrawerToggle = () => {
    dispatch(toggle(false));
  }

  const drawer = (
    <div>
      <div className={classes.brandContainer} >
        <img src={logo} alt="logo" height="30" />
        <Typography className={classes.brandName}>INTESYS</Typography>
      </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem className={classes.sideBarItem} button key={text}>
            <ListItemIcon className='icon100'>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem className={classes.sideBarItem} button key={text}>
            <ListItemIcon className='icon100'>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = document.getElementsByTagName("BODY")[0];

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default SideBar
