import * as React from "react";

import { useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeThought } from "../store/actions";

import axios from "axios";

const Thought = (props) => {
  const { _id, thought, details } = props.data;
  const dispatch = useDispatch();
  const trimId = (id) => id.toString().slice(-4);

  const deleteThought = (id) => {
    axios.delete(`/thoughts/${id}`).then((res) => {
      dispatch(removeThought(id));
    });
  };

  return (
    <Card className="mx-2" sx={{ width: 250, height: 220 }}>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-xs">Thought {trimId(_id)}</span>
          <IconButton onClick={() => deleteThought(_id)}>
            <DeleteIcon />
          </IconButton>
        </div>

        <Typography variant="h4" component="div">
          {thought}
        </Typography>
        <Typography
          className="text-ellipsis overflow-hidden"
          color="text.secondary"
        >
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Thought;
