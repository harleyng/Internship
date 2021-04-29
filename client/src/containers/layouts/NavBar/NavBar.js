import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import useStyles from './styles'

import SearchBar from '../../../components/layouts/NavBar/SearchBar/SearchBar'
import User from '../../../components/layouts/NavBar/User/User'
import DrawerToggler from '../../../components/layouts/NavBar/DrawerToggler/DrawerToggler'

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.navBarContainer} position="static">
      <Toolbar>
        <DrawerToggler />
        <SearchBar />
        <User />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
