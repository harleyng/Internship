import { makeStyles } from '@material-ui/core/styles';
import { primary, primaryDark, primaryDarker, white } from '../../../setting/constants/colors'

export default makeStyles((theme) => ({
  navBarContainer: {
    backgroundColor: primaryDarker,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  brandContainer: {
    margin: '16px 0',
    marginRight: '100px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none !important'
  },
  brandName: {
    color: white,
    marginLeft: '20px',
    letterSpacing: '0.25em',
    fontSize: '1.5em'
  },
  navBarList: {
    display: 'flex',
    padding: 0,
    alignItems: 'center'
  },
  NormalNavText: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    color: white,
    textDecoration: 'none',
    position: 'relative',
    '& a': {
      textDecoration: 'none !important',
    },
    '&::after': {
      content: '""',
      display: 'none',
      width: '100%',
      height: '5px',
    },
    '&:hover': {
      backgroundColor: primaryDark,
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: '999',
        backgroundColor: primary,
      }
    }
  },
}));