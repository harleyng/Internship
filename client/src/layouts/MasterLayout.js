import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import NavBar from '../components/layouts/NavBar/NavBar';

const useStyles = makeStyles((theme) => ({
  MainContent: {
    width: '100vw',
    maxWidth: '100vw',
    minWidth: `320px`,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10),
  }
}))
const MasterLayout = (props) => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <main className={classes.MainContent}>
        {props.children}
      </main>
    </div>
  )
}

export default MasterLayout
