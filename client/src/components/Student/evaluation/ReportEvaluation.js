import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ReportForm from '../../../containers/student/evaluation/ReportForm'
import { updateEvaluation, updateScore } from '../../../actions/score'

const ReportEvaluation = ({ studentID, evaluationData, setEvaluationData, total, setTotal }) => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.studentProfile);
  const evaluation = useSelector(state => state.councilEvaluation);

  useEffect(() => {
    setEvaluationData(evaluation)
    setTotal(prevData => {return {...prevData, report: evaluation.report?.totalScore}})
  }, [profile, evaluation])


  const handleEvaluation = async (e) => {
    const numberValue = Number(e.target.value)
    if (e.target.name.includes('review')) {
      const key = e.target.name.split('_')[1];
      setEvaluationData({...evaluationData, report: {...evaluationData.report, review: {...evaluationData.report?.review, [key]: numberValue}}})
      if (e.target.value) {
        console.log(total)
        console.log(e.target.value)
        setTotal((preData) => { console.log(preData); return {...preData, report: preData.report + numberValue }})
      } else {
        console.log(e.target.value)
        const name = evaluationData.report.review[key];
        setTotal((preData) => { return {...preData, report: preData.report - name}})
      }
    } else if (e.target.name === 'ratings') {
      setEvaluationData({...evaluationData, report: {...evaluationData.report, [e.target.name]: numberValue}})
    } else if (e.target.name) {
      setEvaluationData({...evaluationData, report: {...evaluationData.report, [e.target.name]: e.target.value}})
    }
    console.log(evaluationData)
    console.log(total)
  }

  const sendEvaluationForm = () => {
    console.log(total)
    // dispatch(updateEvaluation(studentID, evaluationData));
    // dispatch(updateScore(studentID, total))
  }

  return (
    <>
      <ReportForm  profile={profile} handleEvaluation={handleEvaluation} sendEvaluationForm={sendEvaluationForm} reportData={evaluationData.report} total={total} />
    </>
  )
}

export default ReportEvaluation
