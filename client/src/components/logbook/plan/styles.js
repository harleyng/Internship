import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  timeLinePagination: {
    '& ul': {
      justifyContent: 'space-between'
    }
  },
  timeLinePaginationItem: {
    whiteSpace: 'pre',
    padding: 20
  },
  planButton: {
    padding: '6px 20px',
    '&:not(:last-child)': {
      marginRight: 20
    }
  },
  modalContainer: {
    width: '30vw',
    position: 'absolute',
    left: '50%',
    top: '50vh',
    transform: 'translate(calc(-50% + 120px), -50%)'
  },
  modalContent: {
    padding: theme.spacing(5)
  }, 
  modalTitle: {
    marginBottom: theme.spacing(3)
  },
  DatePicker: {
    width: '100%',
    margin: '0'
  },
  textArea: {
    overFlow: 'hidden',
    resize: 'none',
    width: '100%',
    outline: 'none',
  }
}));