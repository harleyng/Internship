import React from 'react'
import { ButtonBase, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { primaryDark, white } from "../../setting/constants/colors"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '20px 40px',
    backgroundColor: primaryDark,
    color: white,
  },
  icon: {
    '& svg': {
      fontSize: '128px !important',
    }
  }
}))

const HomeButton = ({ icon, title, path }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <ButtonBase
        focusRipple
        onClick={() => history.push(path)}
      >
        <div className={classes.container}>
          <span className={classes.icon}>{icon}</span>
          <Typography variant='h6' display='block'>{title}</Typography>
        </div>
      </ButtonBase>
    </>
      
  )
}

export default HomeButton
