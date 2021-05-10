import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab'
import { useSelector } from 'react-redux'

import useStyles from './styles.js'
import { first, second, third, fourth } from '../../../constants/profileSection'

const SideNavigator = ({ HandlingSection }) => {
  const classes = useStyles();
  const profile = useSelector(state => state.studentProfile)
  const SectionList = [first, second, third, fourth];
  console.log(profile.comment)
  return (
    <div className={classes.SideSticky}>
      <Timeline align="right">
        {SectionList.map((content, index) => (
            <TimelineItem className={classes.SideNavigatorItem}>
            <TimelineSeparator>
              {index + 1 === HandlingSection ? <TimelineDot className={classes.SelectDot}/> : <TimelineDot />}
              {SectionList.length !== index + 1 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            {index + 1 === HandlingSection ? 
              <TimelineContent className={`${classes.TimelineContent} ${classes.SelectContent}`}>{content}</TimelineContent> : 
              <TimelineContent className={classes.TimelineContent}>{content}</TimelineContent>}
          </TimelineItem>
          ))}
      </Timeline>
      <Paper style={{width: '80%', padding: '20px 10px'}}>
        <Typography variant='h6' align='center'>Information Review</Typography>
        <ul align='left'>
          {profile?.comment?.map(cmt => (
            <li>{cmt}</li>
          ))}
        </ul>
      </Paper>
    </div>
  )
}

export default SideNavigator
