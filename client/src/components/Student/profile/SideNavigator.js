import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import useStyles from './styles.js'
import { first, second, third, fourth } from '../../../constants/profileSection'

const SideNavigator = ({ HandlingSection }) => {
  const classes = useStyles();
  const SectionList = [first, second, third, fourth];

  return (
    <>
      <Timeline align="right" className={classes.SideSticky}>
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

    </>
  )
}

export default SideNavigator
