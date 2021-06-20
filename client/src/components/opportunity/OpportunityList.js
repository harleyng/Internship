import React, { useState, useEffect } from 'react'
import { GridList, GridListTile, CircularProgress, Box, Snackbar, Button } from "@material-ui/core";
import { Pagination } from '@material-ui/lab'
import { opportunityNumber } from '../../setting/constants/config';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import OpportunityCard from './OpportunityCard';
import { OPPORTUNITIES_PAGE } from '../../setting/constants/pages';

const useStyles = makeStyles(() => ({
	masonary: {
		display: 'grid',
		gridGap: '2em',
		gridTemplateColumns: 'repeat( auto-fill, minmax( 20%, 30% ))', 
		gridAutoRows: 0, 
	},
	tile: {

	}
}))

const OpportunityList = ({ totalPages, totalItems, opportunityList, pageNumber, loadingMore, onLoadMore, loading, getOpportunityList }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const user = JSON.parse(localStorage.getItem('profile'));

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

	return (
		!opportunityList?.length ? <CircularProgress /> : (
			<>
				<Box mb={3} display='flex' justifyContent='space-between'>
					<div>
						{	user.result.role === 'staff' && (
							<Link to={`${OPPORTUNITIES_PAGE}/create`} style={{textDecoration: 'none'}}>
								<Button>Create Opportunity</Button>
							</Link>
						)}
					</div>
				</Box>
				<Box className={`${classes.masonary} masonry`}>
					{opportunityList.map(opportunity => (
						<Box mb={3} className={`${classes.tile} masonry-brick`}>
							<OpportunityCard opportunity={opportunity} setOpen={setOpen} getOpportunityList={getOpportunityList} />
						</Box>
					)) }
				</Box>
				{!loading && pageNumber !== totalPages && (
					<Box mt={3}>
						{loadingMore ? <CircularProgress /> : (
							<Button onClick={onLoadMore}>Load more</Button>
						)}
					</Box>
				)}
				<Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Deleted succesfully"
      />
			</>
		)
	)
}

export default OpportunityList
