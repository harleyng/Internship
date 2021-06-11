import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from "@material-ui/core";
import { useDispatch } from 'react-redux'

import { getProfile } from '../../../actions/student';
import { getEvaluation } from '../../../actions/score'
import TabPanel from '../../../pages/student/evaluation/TabPanel';
import DefenseEvaluation from './DefenseEvaluation';
import ReportEvaluation from './ReportEvaluation';

const Council = (props) => {
  const dispatch = useDispatch();
  const studentID = props.match.params.studentID;
  const [evaluationData, setEvaluationData] = useState({defense: {overallDecision: 1}, report: {ratings: 1}})
  const [total, setTotal] = useState({presentation: 0, report: 0})
  const [formRenderer, setFormRenderer] = useState(0)

  useEffect(() => {
    dispatch(getProfile({studentID: studentID}));
    dispatch(getEvaluation(studentID));
  }, [dispatch])

  const handleFormRenderChange = (event, newValue) => {
    setFormRenderer(newValue)
  }

  return (
    <div>
      <Tabs
        value={formRenderer}
        onChange={handleFormRenderChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
        >
        <Tab label="Defense Form" aria-label="phone" />
        <Tab label="Report Form" aria-label="favorite" />
      </Tabs>
      <TabPanel value={formRenderer} index={0} >
        <DefenseEvaluation studentID={studentID} evaluationData={evaluationData} setEvaluationData={setEvaluationData} total={total.presentation} setTotal={setTotal}/>
      </TabPanel>
      <TabPanel value={formRenderer} index={1}>
        <ReportEvaluation studentID={studentID} evaluationData={evaluationData} setEvaluationData={setEvaluationData} setTotal={setTotal} total={total.report}  />
      </TabPanel>
    </div>
  )
}

export default Council
