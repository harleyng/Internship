import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { white } from '../../../setting/constants/colors'
import useStyles from './styles'

export const NavbarItem = ({title, path}) => {
  const classes = useStyles();
  return (
    <Link to={path} currentPath="/" className={classes.NormalNavText}>
      <ListItem>
        <ListItemText>{title}</ListItemText>
      </ListItem>
    </Link>
  )
}
