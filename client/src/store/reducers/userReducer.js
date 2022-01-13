const userReducer = (
  state = JSON.parse(localStorage.getItem("user")),
  action
) => {
  switch (action.type) {
    case "setUser":
      return { ...action.user };
    case "resetUser":
      return null;
    default:
      return state;
  }
};

export default userReducer;
