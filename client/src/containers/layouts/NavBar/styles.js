import { makeStyles, fade } from '@material-ui/core/styles';
import { drawerWidth } from '../../../constants/dimensions'

export default makeStyles((theme) => ({
  navBarContainer: {
    backgroundColor: '#fff',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));