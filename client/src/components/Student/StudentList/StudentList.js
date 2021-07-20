import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';

import StudentCard from "./StudentCard";

const StudentList = () => {
  const students = useSelector((state) => state.students);

  return (
    <Grid container spacing={3}>
      {students.map(student => (
        <Grid item xs={12} md={6} lg={4}>
          <StudentCard student={student} />
        </Grid>
      ))}
    </Grid>
  )
};

export default StudentList;
