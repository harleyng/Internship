import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';

import { Redirect } from 'react-router-dom';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AuthLayout = ({ children }) => {
  const user = localStorage.getItem('profile')

  if (!user)
  {
    console.log("This is a warning message!")
    return (
      <>
        {/* <Alert severity="warning">This is a warning message!</Alert> */}
        <Redirect to="/auth" />;
      </>
    )
  } else {
      return (
        <div>{children}</div>
    );
  }
}

export default AuthLayout
