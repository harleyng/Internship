import { makeStyles } from '@material-ui/core/styles';
import { primary } from '../../../setting/constants/colors'
export default makeStyles((theme) => ({
  TimelineContent: {
    textTransform: 'capitalize',
    fontSize: '1.25em'
  },
  SideSticky: {
    position: 'sticky',
    top: '5vh'
  },
  SelectDot: {
    backgroundColor: primary
  },
  SelectContent: {
    color: primary
  },
  SideNavigatorItem: {
    '&::before': {
      flex: '0',
      marginRight: '1vw'
    }
  },
  studentProfileSubmitButton: {
    textAlign: 'right',
    marginTop: '20px'
  },
  ProfileHandlerButton: {
    width: '75%',
    marginBottom: theme.spacing(3)
  },
  avoidClick: {
    pointerEvents: 'none'
  }
}));