import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));