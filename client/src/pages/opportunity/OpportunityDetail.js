import React, { useState, useLayoutEffect } from "react";
import { Paper, Typography, Box, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab" 
import { getOpportunity } from "../../api/opportunity";
import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import { OPPORTUNITIES_PAGE } from "../../setting/constants/pages";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    padding: '40px',
		textAlign: 'left'
  },
  title: {
    marginRight: 20,
		marginBottom: 30,
    maxWidth: 750
  },
	description: {
		marginBottom: 30,
    whiteSpace: 'pre-line'
	},
	attachment: {
		width: '100%',
		maxWidth: '860px'
	}
}));

const OpportunityDetail = (props) => {
  const classes = useStyles();
  const [opportunity, setOpportunity] = useState({});
	const user = JSON.parse(localStorage.getItem('profile'));

  useLayoutEffect(() => {
    getOpportunityDetail(props.match.params.opportunityID);
  }, []);

  const getOpportunityDetail = (opportunityID) => {
    getOpportunity(opportunityID)
      .then((resp) => {
        // console.log(resp.data.opportunity);
        setOpportunity(resp.data.opportunity);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper className={classes.container}>
      {opportunity.organizationName ? (
        <>
          <Box display="flex" justifyContent="space-between" >
            <Box display="flex" alignItems="baseline">
              <Typography className={classes.title} variant="h4" component="h1">
                {opportunity.organizationName}
              </Typography>
              <Typography>{moment(opportunity.updatedAt).fromNow()}</Typography>
            </Box>
            <div>
              {	user.result.role === 'staff' && (
                <Link to={`${props.match.params.opportunityID}/update`} style={{textDecoration: 'none'}}>
                  <Button>Update Opportunity</Button>
                </Link>
              )}
            </div>
          </Box>
          <Typography className={classes.description} component="p">
            {opportunity.description}
          </Typography>
          <Box textAlign='center'>
            {opportunity.attachment?.map(attach => <iframe src={attach} width='100%' height='1200px' style={{display: 'block'}}/>)}
          </Box>
        </>
      ) : (
        <>
          <Box mb={2}>
            <Skeleton variant="rect" width='100%' height={50} animation="wave"/>
          </Box>
          <Skeleton variant="rect" width='100%' height={200} animation="wave"/>
        </>
      )}
    </Paper>
  );
};

export default OpportunityDetail;
