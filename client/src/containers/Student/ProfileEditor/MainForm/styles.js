import { makeStyles } from '@material-ui/core/styles';

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
  }
}));