import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  documentContainer: {
    marginBottom: '60px',
    width: '793.92px',
    maxWidth: '100%',
  },
  document: {
    fontSize: '12px',
    width: '793.92px',
    // height: '1122.24px',
    padding: '5% 10%',
  },
  documentNavbar: {
    marginBottom: '20px'
  },
  documentTitle: {
    textTransform: 'uppercase',
    margin: '60px 0 40px',
    '& > *': {
      fontWeight: '700'
    }
  },
  studentSignature: {
    marginBottom: '80px'
  }, 
  documentWrapper: {
    overflowY: 'auto'
  },
  table: {
    width: '100%',
    border: '0.1px solid black',
    borderCollapse: 'collapse',
    '& tr, td, th': {
      border: '0.1px solid black',
      borderCollapse: 'collapse',
    }
  },
  annex3Header: {
    textAlign: 'center',
    '& tr, td': {
      padding: '3px 10px'
    }
  }, 
  uppercase: {
    textTransform: 'uppercase',
  },
  attendantTable: {
    tableLayout: 'auto',
    marginBottom: '20px',
    '& tr, td': {
      verticalAlign: 'top',
      padding: '0 5px',
    } 
  }, 
  signatureTable: {
    tableLayout: 'auto',
    height: '200px',
    textAlign: 'center',
    '& td': {
      fontWeight: 700,
      verticalAlign: 'top',
      padding: '20px',
    },
    '& tr': {
      border: 'none'
    }  
  },
  contractTable: {
    marginBottom: '20px',
    '& th': {
      textAlign: 'center'
    },
    '& td, th': {
      padding: '10px'
    }
  },
  annex4Header: {
    textAlign: 'center',
    // lineHeight: '.5em',
    '& i': {
      fontSize: '14px'
    },
    '& b': {
      fontSize: '16px'
    }
  },
  annex4AttendantTable: {
    width: '100%',
    marginBottom: '16px',
    '& td': {
      padding: '2px 0'
    },
    '& tr, td': {
      verticalAlign: 'top'
    }
  },
  annex4signatureTable: {
    tableLayout: 'auto',
    marginBottom: '100px',
    textAlign: 'center',
    '& td': {
      fontWeight: 700,
      verticalAlign: 'top',
      padding: '5px',
    },
    '& tr': {
      border: 'none'
    }  
  },
  annex5signatureTable: {
    width: '100%',
    height: '150px',
    '& td': {
      fontWeight: 700,
      verticalAlign: 'top',
      fontSize: '14px',
    }, 
  }
}));