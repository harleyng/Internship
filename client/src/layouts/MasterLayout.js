import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import NavBar from '../containers/layouts/NavBar/NavBar'
import SideBar from '../components/layouts/SideBar/SideBar'

const useStyles = makeStyles((theme) => ({
  MainContent: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: `calc(100vw - 240px)`,
    },
    maxWidth: '100vw',
    minWidth: `320px`,
    marginLeft: 'auto',
    padding: theme.spacing(4),
  }
}))
const MasterLayout = (props) => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <SideBar />
      <main className={classes.MainContent}>
        {props.children}
      </main>
    </div>
  )
}

export default MasterLayout
