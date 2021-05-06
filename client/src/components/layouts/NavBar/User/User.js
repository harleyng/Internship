import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode';

import { IconButton, Menu, MenuItem, Typography, Button, Divider } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import useStyles from './styles'
import { getProfile } from '../../../../actions/student'


const User = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    
    setUser(JSON.parse(localStorage.getItem('profile')))
    handleClose();
  }, [location, dispatch])

  useEffect(() => {
    dispatch(getProfile({userID: user?.result._id}));
  }, [user])

  const logout = () => {
    dispatch({ type: 'LOGOUT' })

    history.push('/');

    setUser(null)
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {user ? (
        <div>
          <IconButton 
          className='icon200'
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="User "
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={anchorEl}
            onClose={handleClose}
          >
            <Typography className={classes.userName}>Signed in as {user.result.email}</Typography>
            <Divider />
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
      )}
    </>
  )
}

export default User
