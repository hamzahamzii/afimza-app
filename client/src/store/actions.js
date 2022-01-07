export const setThoughts = (payload) => {
  return {
    type: "setThoughts",
    payload,
  };
};

export const addThought = (payload) => {
  return {
    type: "addThought",
    payload,
  };
};

export const removeThought = (id) => {
  return {
    type: "removeThought",
    id,
  };
};
