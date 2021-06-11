import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from 'react-redux';
import StudentCard from "./StudentCard";

const StudentList = () => {
  const students = useSelector((state) => state.students);
  return (
    <Grid container>
      {students.map(student => (
        <Grid item xs={12} md={6} lg={4}>
          <StudentCard student={student} />
        </Grid>
      ))}
    </Grid>
  )
};

export default StudentList;
