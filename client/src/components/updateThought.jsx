import * as React from "react";

import { useDispatch } from "react-redux";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { updateThought } from "../store/actions";

import axios from "axios";

const UpdateThought = (props) => {
    
  const dispatch = useDispatch();
  const { onClose, open, data } = props;
  const handleClose = () => {
    onClose();
  };

  const [thought, setThought] = React.useState(props.data.thought);
  const [details, setDetails] = React.useState(props.data.details);
  const [id, setIds] = React.useState(data._id);

  const edit = () => {
    axios
      .post("/api/thoughts", {
        id, 
        thought,
        details,
      })
      .then((res) => {
        dispatch(updateThought(res.data));
      });
    onClose();
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle sx={{ pb: 1 }}>What are you thinking ?</DialogTitle>
      <DialogContent sx={{ pb: 1 }}>
        <TextField
          autoFocus
          fullWidth
          size="small"
          id="outlined-basic"
          label="Thought"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          variant="outlined"
          sx={{ my: 1 }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Details"
          multiline
          fullWidth
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          sx={{ my: 1 }}
          minRows={5}
          maxRows={6}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? document.getElementById("edit").click()
              : () => {}
          }
        />
        <Button
          id="edit"
          onClick={() => {
            edit();
          }}
          className="float-right"
          color="success"
        >
          Update
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateThought;
