const thoughtsReducer = (state = null, action) => {
  switch (action.type) {
    case "setThoughts":
      return [...action.payload];
    case "addThought":
      return [...state, action.payload];
    case "removeThought":
      return [...state.filter((thought) => thought._id !== action.id)];
    default:
      return state;
  }
};

export default thoughtsReducer;
