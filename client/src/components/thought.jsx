import * as React from "react";

import { useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeThought } from "../store/actions";

import { baseUrl } from "../globals";
import axios from "axios";

const Thought = (props) => {
  const { _id, thought, details } = props.data;
  const dispatch = useDispatch();
  const trimId = (id) => id.toString().slice(-4);

  const deleteThought = (id) => {
    axios.delete(`${baseUrl}/thoughts/${id}`).then((res) => {
      console.log(res);
      dispatch(removeThought(id));
    });
  };

  return (
    <Card className="mx-2" sx={{ maxWidth: 270, minWidth: 200 }}>
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
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Thought;
