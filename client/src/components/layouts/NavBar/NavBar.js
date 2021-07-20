import React from 'react'
import { AppBar, Toolbar, Typography, List } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'

import User from './User/User'
import logo from '../../../assets/img/logo-blue.png';
import { DOCUMENTS_PAGE, OPPORTUNITIES_PAGE, STUDENTS_PAGE } from '../../../setting/constants/pages'
import { NavbarItem } from './NavbarItem'

const NavBar = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))
  const studentID = localStorage.getItem('student')

  console.log(studentID)

  const accessProfile = () => {
    if (studentID) {
      return (`/${STUDENTS_PAGE}/${studentID}`)
    }
  }
  const accessLogbook = () => {
    if (studentID) {
      return (`/${STUDENTS_PAGE}/${studentID}/logbook`)
    }
  }

  const renderNavbarItem = () => {
    switch (user?.result.role) {
      case 'student':
        return (
          <List className={classes.navBarList}>
            <NavbarItem title='Internship Opportunities' path={`/${OPPORTUNITIES_PAGE}`} />
            <NavbarItem title='Your Profile' path={accessProfile()} />
            <NavbarItem title='Logbook' path={accessLogbook()} />
          </List>
        )
      case 'staff':
        return (
          <List className={classes.navBarList}>
            <NavbarItem title='Internship Opportunities' path={`/${OPPORTUNITIES_PAGE}`} />
            <NavbarItem title='Student' path={`/${STUDENTS_PAGE}`} />
            <NavbarItem title='Document' path={`/${DOCUMENTS_PAGE}`} />
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
