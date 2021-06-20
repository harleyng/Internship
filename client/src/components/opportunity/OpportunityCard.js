import React from 'react'
import { Box, Card, CardActions, CardContent, IconButton, CardHeader, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import moment from 'moment'
import { makeStyles } from '@material-ui/styles';
import { primary } from '../../setting/constants/colors'
import { OPPORTUNITIES_PAGE } from '../../setting/constants/pages'
import { Link } from 'react-router-dom';
import { deleteOpportunity } from '../../actions/opportunity';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
	container: {
		padding: 10,
	},
	actionButtons: {
		justifyContent: 'flex-end',
		'& a': {
			textDecoration: 'none', 
			color: primary,
			'&:hover': {
				color: 'rgb(0, 0, 0, 0.87)'
			}
		}
	},
	cardHeader: {
		paddingBottom: 0,
		'& .MuiCardHeader-action': {
			marginTop: 0
		}
	}
}))

const OpportunityCard = ({ opportunity, setOpen, getOpportunityList }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));

	const trimmedLength = 200;

	const renderTrimmingParagraph = (paragraph = '', length = trimmedLength) => {
		if (paragraph === ' ') return null;
		const isEndOfWord = (paragraph, length) => {
			if (paragraph.substring(0, length).slice(-1) === ' ') return (paragraph.substring(0, length - 1) + '...')
			return renderTrimmingParagraph(paragraph, length - 1);
		}
		return isEndOfWord(paragraph, length)
	}

	const deleteOpportunityCard = (opportunityID) => {
		dispatch(deleteOpportunity(opportunityID))
			.then(() => {
				setOpen(true)
				getOpportunityList()
				console.log(opportunityID)
			})
	}

	return (
		<Card className={`${classes.container} masonry-content`}>
			<CardHeader 
				className={classes.cardHeader}
				action={
					user.result.role === 'staff' && (
						<IconButton onClick={() => deleteOpportunityCard(opportunity._id)}>
							<Delete />
						</IconButton>
					)
				}
				title={
					<Box textAlign="left">
						<Typography style={{fontSize: '20px', fontWeight: 700, marginRight: 20}}>{opportunity.organizationName}</Typography>
						<Typography>{moment(opportunity.updatedAt).fromNow()}</Typography>
					</Box>
				}
			/>
			<CardContent style={{textAlign: 'left', textOverflow: 'elipsis'}}>
				<Typography variant="body1" component="p" style={{whiteSpace: 'pre-line'}}>{renderTrimmingParagraph(opportunity.description)}</Typography>
			</CardContent>
			<CardActions className={classes.actionButtons}>
				<Link to={`${OPPORTUNITIES_PAGE}/${opportunity._id}`}><Typography >Read more ></Typography></Link>
			</CardActions>
		</Card>
	)
}

export default OpportunityCard
