import React from 'react'
import { AppBar, Toolbar, Typography, List, ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'

import User from './User/User'
import logo from '../../../assets/img/logo-blue.png';
import { DOCUMENTS_PAGE, STUDENTS_PAGE } from '../../../setting/constants/pages'
import { NavbarItem } from './NavbarItem'

const NavBar = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))
  const profile = useSelector(state => state.studentProfile);

  const accessProfile = () => {
    if (profile) {
      return (`/${STUDENTS_PAGE}/${profile?.studentID}`)
    }
  }
  const accessLogbook = () => {
    if (profile) {
      return (`/${STUDENTS_PAGE}/${profile?.studentID}/logbook`)
    }
  }

  const renderNavbarItem = () => {
    switch (user?.result.role) {
      case 'student':
        return (
          <List className={classes.navBarList}>
            <NavbarItem title='Your Profile' path={accessProfile()} />
            <NavbarItem title='Logbook' path={accessLogbook()} />
          </List>
        )
      case 'lecturer':
        return (
          <List className={classes.navBarList}>
            <NavbarItem title='Review Topic' path={`/${STUDENTS_PAGE}/topic`} />
          </List>
        )
      case 'staff':
        return (
          <List className={classes.navBarList}>
            <NavbarItem title='Student' path={`/${STUDENTS_PAGE}`} />
            <NavbarItem title='Document' path={`/${DOCUMENTS_PAGE}`} />
          </List>
        )
      case 'council':
        return (
          <List className={classes.navBarList}>
            <NavbarItem title='Student' path={`/${STUDENTS_PAGE}/internship`} />
            <NavbarItem title='Evaluation' path={`/${STUDENTS_PAGE}/score`} />
          </List>
        )
      default:
        return null;
    }
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.navBarContainer}>
        <div style={{display: 'flex'}}>
          <Link to={'/'} className={classes.brandContainer} >
            <img src={logo} alt="logo" height="30" />
            <Typography className={classes.brandName}>INTESYS</Typography>
          </Link>
          {renderNavbarItem()}
        </div>
        <User />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
