import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemIcon, ListItemText, Divider, Hidden, Drawer, Typography } from '@material-ui/core'
import { Person, RateReview, Group, Description } from '@material-ui/icons'
import useStyles from './styles'
import { useTheme } from '@material-ui/core/styles';
import { useHistory, useLocation, Link } from 'react-router-dom'

import logo from '../../../img/logo-blue.png';
import { toggle } from '../../../actions/drawer'

const SideBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const mobileOpen = useSelector(state => state.drawerToggler);
  const profile = useSelector(state => state.studentProfile);
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    
  }, [location, profile])

  const handleDrawerToggle = () => {
    dispatch(toggle(false));
  }

  const accessProfile = () => {
    if (profile) {
      return (`/student/${profile?.studentID}`)
    }
  }

  const SideBarItemList = [
    {
      text: 'Your Profile',
      icon: <Person />,
      path: (() => accessProfile()),
      permisson: user?.result?.role === 'student'
    },
    {
      text: 'Review topic',
      icon: <RateReview />,
      path: '/students/topic',
      permisson: user?.result?.role === 'lecturer'
    },
    {
      text: 'Student',
      icon: <Group />,
      path: '/students',
      permisson: user?.result?.role === 'staff'
    },
    {
      text: 'Document',
      icon: <Description />,
      path: '/documents',
      permisson: user?.result?.role === 'staff'
    },
  ]
  // console.log(user)
  const drawer = (
    <div>
      <Link to={'/'} className={`${classes.brandContainer} ${classes.NormalNavText}`} >
        <img src={logo} alt="logo" height="30" />
        <Typography className={classes.brandName}>INTESYS</Typography>
      </Link>
      <Divider />
      <List>
        {SideBarItemList.map((item, index) => {
          const { text, icon, permisson, path } = item
          return (
            <>
            { permisson && (
              <Link to={path} className={`${classes.ListItemContainer} ${classes.NormalNavText}`}>
                <ListItem className={classes.sideBarItem} button key={text}>
                    {icon && <ListItemIcon className='icon100'>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                </ListItem>
              </Link>
            )}
            </>
          )
        })}
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
