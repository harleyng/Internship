import React from 'react'
import { useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import useStyles from './styles'

import { toggle } from '../../../../actions/drawer'

const DrawerToggler = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggle(true));
  }

  return (
    <IconButton
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      className={`${classes.menuButton} icon200`}
    >
      <Menu />
    </IconButton>
  )
}

export default DrawerToggler
