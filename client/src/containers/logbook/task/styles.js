import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  actionButton: {
    minWidth: '70%',
  },
  textArea: {
    overFlow: 'hidden',
    resize: 'none',
    width: '100%',
    outline: 'none',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '4px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    padding: 10
  }, 
}));