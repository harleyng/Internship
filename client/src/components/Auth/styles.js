import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  AuthContainer: {
    position: 'relative',
   },
  AuthContentContainer: {
    minWidth: '320px',
    width: '40%',
    margin: 'auto',
    transform: 'translate(0, 50%)',
    padding: '5%',
  },
  AuthTitle: {
    fontSize: '2em',
    textAlign: 'center',
    marginBottom: theme.spacing(4)
  },
  AuthSubmitButton: {
    marginTop: theme.spacing(3),
  },
  RoleRadioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  RoleContainer: {
    width: '100%'
  }
}));