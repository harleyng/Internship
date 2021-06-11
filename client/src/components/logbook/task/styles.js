import { makeStyles } from '@material-ui/core/styles';
import { lightGray } from '../../../setting/constants/colors';
import { drawerWidth } from '../../../setting/constants/dimensions'
export default makeStyles((theme) => ({
  kanbanContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll'
  },
  listContainer: {
    height: '100%',
    backgroundColor: lightGray,
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
  },
  cardContainer: {
    marginBottom: 8,
  },
  openFormButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  newCardContainer: {
    minHeight: 80,
    minWidth: 272,
    padding: '6px 8px 2px'
  },
  newCardTextArea: {
    overflow: 'hidden',
    resize: 'none',
    width: '100%',
    outline: 'none',
    border: 'none'
  },
  newCardButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center'
  },
  newCardSubmitButton: {
    color: 'white', 
  },
  newCardCloseButton: {
    marginLeft: 8,
    cursor: 'pointer'
  },
  modalContainer: {
    width: '60vw',
    maxWidth: '980px',
    position: 'absolute',
    left: '50%',
    top: '50vh',
    transform: 'translate(calc(-50% + 120px), -50%)'
  },
  modalContent: {
    padding: theme.spacing(5)
  }, 
  modalMainContent: {
    marginTop: 40
  },
  modalSectionIcon: {
    verticalAlign: 'middle', 
    marginRight: 10
  }
}));