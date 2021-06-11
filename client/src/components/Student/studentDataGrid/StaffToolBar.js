import React from "react";
import { Button, Divider } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { STUDENTS_PAGE } from "../../../setting/constants/pages";

const StaffToolBar = ({ selectedCellParams, handleOpenModal }) => {
  const history = useHistory();
  const studentID = selectedCellParams?.id;

  // Staff View Student Profile
  const handleOpenProfile = () => {
    window.open(`/${STUDENTS_PAGE}/${studentID}`);
  };

  // Export documents
  const exportDocuments = () => {
    history.push(`/${STUDENTS_PAGE}/${studentID}/export`);
  };

  return (
    <>
      <Divider orientation="vertical" flexItem style={{ margin: "0 30px" }} />
      <Button onMouseDown={handleOpenModal} disabled={!selectedCellParams}>
        Comment
      </Button>
      <Button
        style={{ margin: "0 10px" }}
        onMouseDown={handleOpenProfile}
        disabled={!selectedCellParams}
      >
        Open Profile
      </Button>
      <Button onMouseDown={exportDocuments} disabled={!selectedCellParams}>
        Export
      </Button>
    </>
  );
};

export default StaffToolBar;
