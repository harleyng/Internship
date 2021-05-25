import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import DefenseForm from '../../../containers/student/evaluation/DefenseForm';
import { updateEvaluation, updateScore } from '../../../actions/score'

const DefenseEvaluation = ({ studentID, evaluationData, setEvaluationData, total, setTotal }) => {  
  const dispatch = useDispatch();
  const profile = useSelector(state => state.studentProfile);
  const evaluation = useSelector(state => state.councilEvaluation);

  useEffect(() => {
    setEvaluationData(evaluation)
    setTotal(prevData => {return {...prevData, presentation: evaluation.defense?.totalScore}})
  }, [profile, evaluation])


  const handleEvaluation = async (e) => {
    const numberValue = Number(e.target.value)
    if (e.target.name.includes('criteria')) {
      const key = e.target.name.split('_')[1];
      setEvaluationData({...evaluationData, defense: {...evaluationData.defense, criteria: {...evaluationData.defense?.criteria, [key]: numberValue}}})
      if (e.target.value) {
        setTotal((preData) => { return {...preData, presentation: preData.presentation + numberValue }})
      } else {
        const name = evaluationData.defense.criteria[key];
        setTotal((preData) => { return {...preData, presentation: preData.presentation - name}})
      }
    } else if (e.target.name === 'overallDecision') {
      setEvaluationData({...evaluationData, defense: {...evaluationData.defense, [e.target.name]: numberValue}})
    } else if (e.target.name) {
      setEvaluationData({...evaluationData, defense: {...evaluationData.defense, [e.target.name]: e.target.value}})
    }
  }

  const sendEvaluationForm = () => {
    console.log(total)
    dispatch(updateEvaluation(studentID, evaluationData));
    dispatch(updateScore(studentID, total))
  }

  return (
    <>
      <DefenseForm profile={profile} handleEvaluation={handleEvaluation} sendEvaluationForm={sendEvaluationForm} defenseData={evaluationData.defense} total={total}/>
    </>
  )
}

export default DefenseEvaluation
