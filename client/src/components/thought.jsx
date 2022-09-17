import * as React from "react";

import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { removeThought } from "../store/actions";
import UpdateThought from "../components/updateThought";


import axios from "axios";



const Thought = (props) => {

  const [updateThought, setUpdateThought] = useState(false);

  const { _id, thought, details } = props.data;
  const dispatch = useDispatch();
  const trimId = (id) => id.toString().slice(-4);

  const deleteThought = (id) => {
    axios.delete(`/api/thoughts/${id}`).then((res) => {
      dispatch(removeThought(id));
    });
  };


  return (
    <Card className="mx-2" sx={{ width: 250, height: 220 }}>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-xs">Thought {trimId(_id)}</span>
          <div className="flex items-center justify-end">
          <IconButton onClick={() => deleteThought(_id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => setUpdateThought(true) }>
            <EditIcon />
          </IconButton>
          </div>
          <UpdateThought
           key={thought._id} data={props.data}
           onClose={() => {
            setUpdateThought(false);
            }}
            open={updateThought}
          />
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
