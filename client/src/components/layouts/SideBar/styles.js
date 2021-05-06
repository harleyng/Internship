import { makeStyles } from '@material-ui/core/styles';
import { primaryDark, primaryDarker, white } from '../../../constants/colors'
import { drawerWidth } from '../../../constants/dimensions'

export default makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: primaryDark,
    color: white,
  },
  brandContainer: {
    margin: '16px 0',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  brandName: {
    marginLeft: '20px',
    letterSpacing: '0.25em',
    fontSize: '1.5em'
  },
  sideBarItem: {
    '&:hover': {
      backgroundColor: primaryDarker
    }
  },
  NormalNavText: {
    color: white,
    textDecoration: 'none',
  },
  ListItemContainer: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  }
}));