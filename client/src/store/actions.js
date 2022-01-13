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

export const setUser = (user) => {
  return {
    type: "setUser",
    user,
  };
};

export const resetUser = () => {
  return {
    type: "resetUser",
  };
};
