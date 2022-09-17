const thoughtsReducer = (state = null, action) => {
  switch (action.type) {
    case "setThoughts":
      return [...action.payload];
    case "addThought":
      return [...state, action.payload];
    case "removeThought":
      return [...state.filter((thought) => thought._id !== action.id)];
    case "updateThought":
      return [...state.map((thought) => thought._id === action.id ? thought = action.payload : thought)];
    default:
      return state;
  }
};

export default thoughtsReducer;
