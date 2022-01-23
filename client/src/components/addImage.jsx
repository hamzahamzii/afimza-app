import * as React from "react";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const AddImage = (props) => {
  const Input = styled("input")({
    display: "none",
  });
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle sx={{ pb: 0 }}>Add an image to gallery</DialogTitle>
      <DialogContent sx={{ pb: 1 }}>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" type="file" />
          <div className="my-2 cursor-pointer h-72 border-dashed flex items-center justify-center uppercase text-gray-400 border-2 rounded-lg border-gray-400">
            Click to upload
            <span className="lowercase italic px-2">
              {" "}
              (nothing will happen)
            </span>
          </div>
        </label>
        <Button id="submit" className="float-right" color="success">
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddImage;
