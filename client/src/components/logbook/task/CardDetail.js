import React, { useEffect, useState } from "react";
import { Box, Modal, Typography, Paper, Grid, Button } from "@material-ui/core";
import { Close, Notes, AttachFile, Chat } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { updateTaskCard, deleteTaskCard } from "../../../actions/task";

import useStyles from "./styles";
import CardDetailInput from "../../../pages/logbook/task/CardDetailInput";
import CardDetailActionButtons from "../../../pages/logbook/task/CardDetailActionButtons";

const CardDetail = ({
    showTaskDetail,
    handleCloseTaskDetail,
    cardData,
    studentID,
    taskID,
    listID,
  }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [updatedCard, setUpdatedCard] = useState(cardData);
  const [action, setAction] = useState("");
  useEffect(() => {
    if (action.includes("Attach")) {
      handleSubmitCardChange();
    }
  }, [updatedCard, action]);

  const handleCardChange = (e) => {
    if (e.target?.name) {
      setUpdatedCard({ ...updatedCard, [e.target.name]: e.target.value });
    } else {
      setUpdatedCard({
        ...updatedCard,
        attachment: [
          ...updatedCard.attachment,
          { name: e.name, image: e.base64 },
        ],
      });
      setAction("Add Attach");
    }
  };

  const handleSubmitCardChange = (e) => {
    dispatch(updateTaskCard(studentID, taskID, listID, updatedCard));
  };

  const handleDeleteCard = () => {
    dispatch(deleteTaskCard(taskID, listID, updatedCard));
    handleCloseTaskDetail();
  };

  const handleDeleteAttachment = (id) => {
    const newAttachment = updatedCard.attachment.filter(
      (attach) => attach._id !== id
    );
    setUpdatedCard({ ...updatedCard, attachment: newAttachment });
    setAction("Delete Attach");
  };

  return (
    <Modal open={showTaskDetail} onClose={handleCloseTaskDetail}>
      <Box className={classes.modalContainer}>
        <Paper className={classes.modalContent}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">
              <b>{cardData.title}</b>
            </Typography>
            <Close cursor="pointer" onClick={handleCloseTaskDetail} />
          </Box>
          <Grid container className={classes.modalMainContent}>
            <Grid item xs={10}>
              <Box mb={3}>
                <Box mb={1}>
                  <Notes className={classes.modalSectionIcon} />
                  <Typography display="inline" variant="h6">
                    Description
                  </Typography>
                </Box>
                <CardDetailInput
                  name="description"
                  value={updatedCard?.description}
                  onChange={handleCardChange}
                  placeholder="Add detail description..."
                  disabled={user?.result?.role === "Supervisor"}
                />
              </Box>
              <Box mb={3}>
                {updatedCard?.attachment.length ? (
                  <>
                    <Box mb={1}>
                      <AttachFile className={classes.modalSectionIcon} />
                      <Typography display="inline" variant="h6">
                        Attachment
                      </Typography>
                    </Box>
                    {updatedCard.attachment.map((attach) => {
                      return (
                        <Grid container>
                          <Grid item xs={3}>
                            <img src={attach.image} />
                          </Grid>
                          <Grid item xs={8} style={{ margin: "auto 0" }}>
                            <Typography>{attach.name}</Typography>
                          </Grid>
                          <Grid item xs={1} style={{ margin: "auto 0" }}>
                            <Close
                              cursor="pointer"
                              onClick={() => handleDeleteAttachment(attach._id)}
                            />
                          </Grid>
                        </Grid>
                      );
                    })}
                  </>
                ) : null}
              </Box>
              <Box mb={3}>
                {user.result.role === "supervisor" ? (
                  <>
                    <Box mb={1}>
                      <Chat className={classes.modalSectionIcon} />
                      <Typography display="inline" variant="h6">
                        Comment
                      </Typography>
                    </Box>
                    <CardDetailInput
                      name="comment"
                      value={updatedCard?.comment}
                      onChange={handleCardChange}
                      placeholder="Comment about this task"
                    />
                  </>
                ) : (
                  updatedCard?.comment && (
                    <>
                      <Box mb={1}>
                        <Chat className={classes.modalSectionIcon} />
                        <Typography display="inline" variant="h6">
                          Comment
                        </Typography>
                      </Box>
                      <CardDetailInput
                        name="comment"
                        value={updatedCard?.comment}
                        disabled
                      />
                    </>
                  )
                )}
              </Box>
            </Grid>
            <Grid item xs={2}>
              <CardDetailActionButtons
                handleCardChange={handleCardChange}
                handleSubmitCardChange={handleSubmitCardChange}
                handleDeleteCard={handleDeleteCard}
                student={user.result?.role == "student"}
                both={
                  user.result?.role == "student" ||
                  user.result?.role == "supervisor"
                }
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Modal>
  );
};

export default CardDetail;
