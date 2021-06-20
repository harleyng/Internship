import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Paper, Grid, TextField, Button, Box, Typography, Snackbar, IconButton } from "@material-ui/core";
import { Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import FileBase from "react-file-base64";

import { OPPORTUNITIES_PAGE } from "../../setting/constants/pages"
import { createOpportunity, getOpportunity, updateOpportunity } from '../../api/opportunity';

const useStyles = makeStyles((theme) => ({
	formContainer: {
		textAlign: 'left',
		padding: '40px 80px'
	},
	submitButton: {
		padding: '5px 30px'
	}
}))

const UpdateOpportunity = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const [opportunityData, setOpportunityData] = useState({attachment: []})
  const [snackPack, setSnackPack] = useState([]);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState(undefined)
	
	const opportunityID = props.match.params.opportunityID;

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

  useLayoutEffect(() => {
    getOpportunityDetail(opportunityID);
  }, []);

  const getOpportunityDetail = (opportunityID) => {
    getOpportunity(opportunityID)
      .then((resp) => {
        // console.log(resp.data.opportunity);
        setOpportunityData(resp.data.opportunity);
      })
      .catch((err) => {
        console.log(err);
      });
  };

	const handleChange = (e) => {
		if (e.target?.name) {
			setOpportunityData({ ...opportunityData, [e.target.name]: e.target.value })
		} else {
			let attachmentList = [];
			e.map((attach) => {
				attachmentList.push(attach.base64)
			})
			setOpportunityData({ ...opportunityData, 'attachment': attachmentList })
		}
	}

	const handleSubmit = (e) => {
		setSnackPack(((prev) => [...prev, { message: 'Updating internship opportunity...', key: new Date().getTime() }]));
		e.preventDefault();
		console.log(opportunityData)
		updateOpportunity(opportunityID, opportunityData)
			.then((resp) => {
				setSnackPack(((prev) => [...prev, { message: 'Updated internship opportunity successfully', key: new Date().getTime() }]));
				history.push(`/${OPPORTUNITIES_PAGE}/${opportunityID}`)
			})
			.catch(err => console.log(err))
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
			<form onSubmit={handleSubmit}>
				<Paper className={classes.formContainer}>
					<Box textAlign="center" mb={5}>
						<Typography variant="h6" component="h1">Create Opportunity</Typography>
					</Box>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								name="organizationName"
								InputLabelProps={{ shrink: true }}
								label="Name"
								value={opportunityData.organizationName}
								onChange={handleChange}
								variant="outlined"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Description"
								name="description"
								value={opportunityData.description}
								multiline
								rows={20}
								InputLabelProps={{ shrink: true }}
								onChange={handleChange}
								fullWidth
								variant="outlined"
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography>Attachment</Typography>
							<FileBase 
								type="file"
								multiple={true}
								value={opportunityData.attachment}
								onDone={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button type="submit" className={classes.submitButton}>Submit</Button>
						</Grid>
					</Grid>
				</Paper>
			</form>
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

export default UpdateOpportunity
