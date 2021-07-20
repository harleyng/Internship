import React from 'react'
import { Card, CardContent, Typography, Grid, CardActions, Button, Box } from "@material-ui/core"; 
import TopicStatus from './TopicStatus';
import { updateProfile } from '../../api/student';

const InternshipInformation = ({title, text}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}><Typography variant="body1" component="p" align='right'><b>{title}</b></Typography></Grid>
      <Grid item xs={9}><Typography variant="body1" component="p" style={{whiteSpace: 'pre-line'}}>{text}</Typography></Grid>
    </Grid>
  )
}

const InternshipCard = ({ student, getStudents }) => {
	const handleApproveTopic = () => {
		updateProfile({
			studentID: student.studentID,
			internship: {...student.internship, topicStatus: "Approved"}
		}).then(() => getStudents())
	}

	const handleRefuseTopic = () => {
		updateProfile({
			studentID: student.studentID,
			internship: {...student.internship, topicStatus: "Refused"}
		}).then(() => getStudents())
	}

	return (
		<>
			<Card style={{padding: '10px'}}>
				<CardContent style={{textAlign: 'left'}}>
					<Typography align="center" style={{marginBottom: '30px', fontSize: '28px'}}>{student.fullName}</Typography>
					<Box display="flex" alignItems="center" mb={2}>
						<InternshipInformation title="Topic" text={student.internship.topic} />
						<TopicStatus status={student.internship.topicStatus.toLowerCase()} value={student.internship.topicStatus} />
					</Box>
					<InternshipInformation title="Objective" text={student.internship.objective} />
					<InternshipInformation title="Outcome" text={student.internship.outcome} />
					<InternshipInformation title="Host" text={student.internship.host} />
					<InternshipInformation title="Location" text={student.internship.location} /> 
				</CardContent>
				<CardActions style={{justifyContent: 'flex-end'}}>
					<Button size="medium" onClick={handleApproveTopic}>Approve</Button>
					<Button size="medium" onClick={handleRefuseTopic}>Refuse</Button>
				</CardActions>
			</Card>
		</>
	)
}

export default InternshipCard
