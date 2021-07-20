import React, { useEffect, useState } from 'react'
import { Grid, Box, FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@material-ui/core'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';

import InternshipCard from './InternshipCard'
import { getStudentList } from '../../api/student'

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));

const InternshipList = () => {
	const classes = useStyles();
	const [students, setStudents] = useState([])
	const [filter, setFilter] = useState("Pending");
	const [department, setDepartment] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getStudents()
	}, [department, filter])

		const getStudents = () => {
			setLoading(true);

			getStudentList(filter, department)
			.then((resp) => {
				setStudents(resp.data);
				setLoading(false);
			})
		}

  const handleFilter = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

	return (
		<>
			<Box display="flex" className={classes.toggleContainer} mb={2}>
				<ToggleButtonGroup
					value={filter}
					exclusive
					onChange={handleFilter}
					aria-label="text alignment"
				>
					<ToggleButton value="">
						All
					</ToggleButton>
					<ToggleButton value="Pending">
						Pending
					</ToggleButton>
					<ToggleButton value="Approved">
						Approved
					</ToggleButton>
					<ToggleButton value="Refused">
						Refused
					</ToggleButton>
				</ToggleButtonGroup>
				<Box ml={3}>
					<FormControl variant="outlined" className={classes.formControl} style={{textAlign: 'left',  width: 500}}>
						<InputLabel>Deparment</InputLabel>
						<Select
							name="department"
							value={department} 
							onChange={(e) => setDepartment(e.target.value)}
							label="Deparment"
							
						>
							<MenuItem value="Pharmacological, Medical and Agronomical Biotechnology">Pharmacological, Medical and Agronomical Biotechnology</MenuItem>
							<MenuItem value="Information Technology and Communication">Information Technology and Communication</MenuItem>
							<MenuItem value="Medical Science and Technology">Medical Science and Technology</MenuItem>
							<MenuItem value="Cyber security">Cyber security</MenuItem>
							<MenuItem value="Aeronautical Maintenance and Engineering Operations">Aeronautical Maintenance and Engineering Operations</MenuItem>
							<MenuItem value="Food Science and Technology">Food Science and Technology</MenuItem>
							<MenuItem value=""><em>None</em></MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>
			{loading ? <CircularProgress /> : (
				<Grid container spacing={3}>
					{students.map(student => (
						<Grid item xs={12} md={6} lg={4}>
							{student.internship?.topic && (
								<InternshipCard student={student} getStudents={getStudents} />
							)}
						</Grid>
					))}
				</Grid>
			)}
		</>
	)
}

export default InternshipList
