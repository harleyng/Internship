import { makeStyles } from '@material-ui/core/styles';
import { lowSatYellow } from '../../../constants/colors'
export default makeStyles((theme) => ({
  bold: {
    fontWeight: 700
  },
  italic: {
    fontStyle: 'italic'
  },
  overallInformation: {
    width: '100%',
    '& td': {
      padding: '6px 0 7px'
    }
  },
  textField: {
    width: '70%',
    '& input': {
      padding: 0,
    }
  },
  heading: {
    fontWeight: 700,
    borderBottom: '1px solid black',
    textTransform: 'uppercase',
  },
  radioGroup: {
    flexDirection:'row', 
    // whiteSpace: 'pre',
    justifyContent: 'space-between'
  },
  rowColorTable: {
    borderCollapse: 'collapse',
    '& tr:nth-child(2n+1)': {
      backgroundColor: lowSatYellow
    },
  },
  signature: {
    paddingBottom: 100,
    marginRight: 40,
    borderBottom: '1px solid black'
  },
  commentArea: {
    overFlow: 'hidden',
    resize: 'none',
    width: '100%',
    outline: 'none',
    marginTop: 10
  },
  formContainer: {
    padding: '80px 120px',
    margin: '0 10px'
  },
  listDash: {
    marginLeft: 30,
    display: 'block'
  }
}));