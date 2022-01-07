import React, { useEffect, useState } from "react";

import Thought from "../components/thought";
import AddThought from "../components/addThought";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setThoughts } from "../store/actions";

import Button from "@mui/material/Button";

import axios from "axios";
import { baseUrl } from "../globals";

const ThoughtsPage = () => {
  const dispatch = useDispatch();
  const thoughts = useSelector((state) => state.thoughtsReducer);
  const [writingThought, setWritingThought] = useState(false);

  useEffect(() => {
    if (!thoughts) {
      axios.get(`${baseUrl}/thoughts`).then((res) => {
        dispatch(setThoughts(res.data));
      });
    }
  });

  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <span className="text-xl my-2 font-bold">Thoughts</span>
        <Button onClick={() => setWritingThought(true)} color="inherit">
          + Add thought
        </Button>
      </div>
      <div className="text-xs font-light">
        Add any thought that crosses your mind. Thoughts are powerful when
        written down. Wishing your thoughts to be peacefull.
      </div>

      <AddThought
        onClose={() => setWritingThought(false)}
        open={writingThought}
      />

      <div className="flex p-3 items-center">
        {thoughts &&
          thoughts.map((thought) => (
            <Thought key={thought._id} data={thought} />
          ))}
      </div>
    </div>
  );
};

export default ThoughtsPage;
