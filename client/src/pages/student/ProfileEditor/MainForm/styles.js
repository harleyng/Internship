import { makeStyles } from '@material-ui/core/styles';
import { yellow, red, green } from '../../../../setting/constants/colors'

export default makeStyles((theme) => ({
  ProfileSectionContainer: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(5),
  },
  ProfileSectionTitle: {
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase'
  },
  formControl: {
    width: '100%',
    margin: '0'
  },
  CheckBoxLabel: {
    marginLeft: '0'
  },
  ProfileSectionSubtitle: {
    paddingBottom: '0'
  },
  textArea: {
    width: '100%',
  },
  status: {
    padding: '5px 15px',
    border: '2px solid',
    borderRadius: '20px',
    textAlign: 'center',
  },
  pendingStatus: {
    color: yellow,
    borderColor: yellow,
  },
  approvedStatus: {
    color: green,
    borderColor: green,
  }, 
  refusedStatus: {
    color: red,
    borderColor: red,
  },
}));