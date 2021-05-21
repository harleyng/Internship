import renderCellExpand from '../renderCellExpand'
import TopicStatus from '../../../../containers/student/studentDataGrid/TopicStatus'

export const defaultColumns = [
  { field: 'studentID', headerName: 'Student ID', width: 130, renderCell: renderCellExpand },
  { field: 'fullName', headerName: 'Full Name', width: 300, renderCell: renderCellExpand },
  { field: 'phoneNo', headerName: 'Phone Number', width: 150, renderCell: renderCellExpand },
  { field: 'DOB', headerName: 'DOB', width: 150, renderCell: renderCellExpand },
  { field: 'academicYear', headerName: 'Academic Year', width: 150, renderCell: renderCellExpand },
  { field: 'department', headerName: 'Department', width: 300, renderCell: renderCellExpand },
  { field: 'supervisor_internal', headerName: 'Internal Supervisor', type: 'boolean', width: 300 },
  { field: 'supervisor_fullName', headerName: 'Supervisor Name', width: 300, renderCell: renderCellExpand },
  { field: 'supervisor_email', headerName: 'Supervisor Email', width: 300, renderCell: renderCellExpand },
  { field: 'supervisor_position', headerName: 'Supervisor Position', width: 200, renderCell: renderCellExpand },
  { field: 'supervisor_department', headerName: 'Supervisor Department', width: 200, renderCell: renderCellExpand },
  { field: 'supervisor_phoneNo', headerName: 'Supervisor Phone', width: 180, renderCell: renderCellExpand },
  { field: 'supervisor_DOB', headerName: 'Supervisor DOB', width: 300, renderCell: renderCellExpand },
  { field: 'supervisor_address', headerName: 'Supervisor Address', width: 300, renderCell: renderCellExpand },
  { field: 'supervisor_PITCode', headerName: 'Supervisor PIT Code', width: 300, renderCell: renderCellExpand },
  { field: 'supervisor_personalID_No', headerName: 'Supervisor ID Number', width: 200, renderCell: renderCellExpand },
  { field: 'supervisor_personalID_givenDate', headerName: 'Supervisor ID Given Date', width: 220, renderCell: renderCellExpand },
  { field: 'supervisor_personalID_givenPlace', headerName: 'Supervisor ID Given Place', width: 220, renderCell: renderCellExpand },
  { field: 'supervisor_bankAccount_bankName', headerName: 'Supervisor Bank Name', width: 200, renderCell: renderCellExpand },
  { field: 'supervisor_bankAccount_No', headerName: 'Supervisor Bank Number', width: 220, renderCell: renderCellExpand },
  { field: 'supervisor_bankAccount_branch', headerName: 'Supervisor Bank Branch', width: 220, renderCell: renderCellExpand },
  { field: 'internship_topic', headerName: 'Topic', width: 300, renderCell: renderCellExpand },
  { field: 'internship_description', headerName: 'Description', width: 300, renderCell: renderCellExpand },
  { field: 'internship_objective', headerName: 'Objective', width: 300, renderCell: renderCellExpand },
  { field: 'internship_outcome', headerName: 'Outcome', width: 300, renderCell: renderCellExpand },
  { field: 'internship_location', headerName: 'Internship Location', width: 180, renderCell: renderCellExpand },
  { field: 'internship_host', headerName: 'Internship Host', width: 150, renderCell: renderCellExpand },
  { field: 'internship_topicStatus', headerName: 'Topic Status', width: 150, 
    renderCell: (params) => { 
      if (params.value === 'Pending') {
        return (
          <TopicStatus className={'${classes.pendingStatus}'} value={params.value} />
        )
      }
      if (params.value === 'Approved') {
        return (
          <TopicStatus className={'${classes.approvedStatus}'} value={params.value} />
        )
      }
      if (params.value === 'Refused') {
        return (
          <TopicStatus className={'${classes.refusedStatus}'} value={params.value} />
        )
      }
    },
  },
  { field: 'internship_updatedAt', headerName: 'Last Update', width: 200, renderCell: renderCellExpand },
  { field: 'comment', headerName: 'Note', width: 300, renderCell: renderCellExpand},
]
  
