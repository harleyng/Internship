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
  planOverview: {
    whiteSpace: 'pre',
    margin: '20px 0',
    padding: '20px',
  },
}));