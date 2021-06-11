import React, { useState } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { updateProfile } from "../../../actions/student";

const RightMenu = ({
  selectedRow,
  rows,
  role,
  mousePosition,
  setMousePosition,
  mouseInitialState,
}) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setMousePosition(mouseInitialState);
  };

  // Lecturer Topic Review
  const handleApprove = () => {
    selectedRow.forEach((selectedEl) => {
      rows.forEach((rowEl) => {
        if (rowEl.id === selectedEl) {
          console.log(rowEl);
          dispatch(
            updateProfile({
              studentID: rowEl.studentID,
              internship: {
                topic: rowEl.internship_topic,
                topicStatus: "Approved",
                description: rowEl.internship_description,
                objective: rowEl.internship_objective,
                outcome: rowEl.internship_outcome,
                host: rowEl.internship_host,
                location: rowEl.internship_location,
                updatedAt: rowEl.internship_updatedAt,
              },
            })
          );
        }
      });
    });
    handleClose();
    // document.location.reload();
  };

  const handleRefuse = () => {
    selectedRow.forEach((selectedEl) => {
      rows.forEach((rowEl) => {
        if (rowEl.id === selectedEl) {
          dispatch(
            updateProfile({
              studentID: rowEl.studentID,
              internship: {
                topic: rowEl.internship_topic,
                topicStatus: "Refused",
                description: rowEl.internship_description,
                objective: rowEl.internship_objective,
                outcome: rowEl.internship_outcome,
                host: rowEl.internship_host,
                location: rowEl.internship_location,
                updatedAt: rowEl.internship_updatedAt,
              },
            })
          );
        }
      });
    });
    handleClose();
    // document.location.reload();
  };

  const renderRightMenu = () => {
    if (role === 'lecturer') {
      return (
        <>
          <MenuItem onClick={handleApprove}>Approve</MenuItem>
          <MenuItem onClick={handleRefuse}>Refuse</MenuItem>
        </>
      );
    }
  };

  return (
    <Menu
      keepMounted
      open={mousePosition.mouseY !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        mousePosition.mouseY !== null && mousePosition.mouseX !== null
          ? { top: mousePosition.mouseY, left: mousePosition.mouseX }
          : undefined
      }
    >
      {renderRightMenu()}
    </Menu>
  );
};

export default RightMenu;
