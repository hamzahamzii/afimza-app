import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const ImagePreview = (props) => {
  const { onClose, open, image } = props;
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="flex justify-center">
      <Dialog onClose={handleClose} open={open}>
        <DialogContent sx={{ p: 1 }}>
          <Card>
            <CardMedia component="img" image={image} />
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImagePreview;
