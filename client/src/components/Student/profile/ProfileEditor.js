import React, { useState, useEffect } from 'react'
import { Grid, Button, Icon, Snackbar, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import { useDispatch } from 'react-redux'

import MainForm from './MainForm'
import SideNavigator from './SideNavigator'
import useStyles from './styles'
import { getProfile, updateProfile } from '../../../actions/student'

const initialState = {
  studentID   : '',
  userID      : '',
  fullName    : '',
  DOB         : new Date(),
  academicYear: '',
  department  : '',
  phoneNo     : '',
  comment     : {},
  supervisor  : {
    internal  : true,
    email     : '',
    fullName  : '',
    address   : '',
    position  : '',
    department: '',
    phoneNo   : '',
    DOB       : new Date(),
    personalID: {
      No        : '',
      givenDate : '',
      givenPlace: '',
    },
    bankAccount: {
      No      : '',
      bankName: '',
      branch  : '',
    },
    PITCode: '',
  },
  internship: {
    topic      : '',
    topicStatus: '',
    location   : '',
    host       : '',
    startTime  : new Date(),
    endTime    : new Date(),
    description: '',
    objective  : '',
    outcome    : '',
  }
}

const ProfileEditor = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [HandlingSection, setHandlingSection] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [editable, setEditable] = useState(true)
  const [snackPack, setSnackPack] = useState([]);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState(undefined);
  const studentID = props.match.params.studentID;
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => { 
    dispatch(getProfile({studentID: studentID})); 
  }, [dispatch])

  useEffect(() => {
    if (snackPack.length && !snackBarMessage) {
      // Set a new snack when we don't have an active one
      setSnackBarMessage({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setSnackBarOpen(true);
    } else if (snackPack.length && snackBarMessage && snackBarOpen) {
      // Close an active snack when a new one is added
      setSnackBarOpen(false);
    }
  }, [snackPack, snackBarMessage])

  const handleChange = (e) => {
    if (e.target?.name.includes('supervisor')) {
      if (e.target?.name === 'supervisor_internal') {
        setFormData({ ...formData, 'supervisor': {...formData.supervisor, 'internal': !formData.supervisor.internal}})
      } else if (e.target.name.includes('personalID')) {
        const key = e.target.name.split('_')[2];
        setFormData({ ...formData, 'supervisor': {...formData.supervisor, 'personalID': {...formData.supervisor.personalID, [key]: e.target.value}}});
      } else if (e.target.name.includes('bankAccount')) {
        const key = e.target.name.split('_')[2];
        setFormData({ ...formData, 'supervisor': {...formData.supervisor, 'bankAccount': {...formData.supervisor.bankAccount, [key]: e.target.value}}});
      } else {
        const key = e.target.name.split('_')[1];
        setFormData({ ...formData, 'supervisor': {...formData.supervisor, [key]: e.target.value}});
      } 
    } else if (e.target?.name.includes('internship')) {
      const key = e.target.name.split('_')[1];  
      setFormData({ ...formData, 'internship': {...formData.internship, 'updatedAt': new Date().toISOString(), 'topicStatus': 'Pending',  [key]: e.target.value}});
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value }) // Department
    }
    // console.log(formData)
  }

  const handleDateChange = (date, name) => {
    if (name.includes('supervisor')) {
      setFormData({ ...formData, 'supervisor': {...formData.supervisor, 'DOB': date} })
    } else if (name.includes('internship')) {
      const key = name.split('_')[1];
      setFormData({ ...formData, 'internship': {...formData.internship, [key]: date} })
    } else {
      setFormData({ ...formData, [name]: date })
    }
    // console.log(formData)
  }

  const handleClick = (e, index) => {
    setHandlingSection(index);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData)
    dispatch(updateProfile({...formData, studentID: studentID}))
      .then((result) => {
        setSnackPack(((prev) => [...prev, { message: 'You have updated your profile successfully', key: new Date().getTime() }]));
      })
  }

  const handleEdit = () => {
    setEditable(!editable);

    if (editable) {
      setSnackPack(((prev) => [...prev, { message: 'You are able to edit now', key: new Date().getTime() }]));
    } else {
      setSnackPack(((prev) => [...prev, { message: 'You can not edit anything now', key: new Date().getTime() }]));
    }
  }

  const clear = () => {
    setFormData(initialState);
    // console.log(formData)
  }

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBarOpen(false);
  }

  const handleExitSnackBar = () => {
    setSnackBarMessage(undefined);
  };


  return (
    <> 
      <Grid container justify="center">
        <Grid item xs={12} sm={2}>
          <SideNavigator HandlingSection={HandlingSection} />
        </Grid>
        <Grid item xs={12} sm={9} md={8} lg={6} className={editable ? `${classes.avoidClick}` : '' }>
          <MainForm handleClick={handleClick} handleChange={handleChange} handleDateChange={handleDateChange} formData={formData} setFormData={setFormData}/>
        </Grid>
        {user?.result.role === 'student' ? (
          <>
            <Grid item xs={12} sm ={1} className={classes.studentProfileSubmitButton}>
              <div className={classes.SideSticky}>
                <Button variant="contained" className={classes.ProfileHandlerButton} endIcon={<Icon>edit</Icon>} onClick={handleEdit}>
                  {editable ? 'Edit' : 'Done'}
                </Button>
                <Button variant="contained" className={`${classes.ProfileHandlerButton} ${editable ? `${classes.avoidClick}` : '' }`} endIcon={<Icon>delete</Icon>} onClick={clear}>
                  Clear
                </Button>
                <Button variant="contained" className={`${classes.ProfileHandlerButton}`} endIcon={<Icon>send</Icon>} onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Grid>
          </>
        ) : null}
      </Grid>
      <Snackbar
        key={snackBarMessage ? snackBarMessage.key : undefined}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={snackBarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackBar}
        onExited={handleExitSnackBar}
        message={snackBarMessage ? snackBarMessage.message : undefined}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackBar}
            >
              <Close />
            </IconButton>
          </React.Fragment>
        }
        />
    </>
  )
}

export default ProfileEditor
