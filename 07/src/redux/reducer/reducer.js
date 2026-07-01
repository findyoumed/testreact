let initialState = {
  count: 0,
  login: "you have to login",
  id: "you have to login",
  pw: "you have to login",
};

function reducer(state = initialState, action) {
  console.log("action is", action);

  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  // } else if (action.type === "DECREMENT") {
  //   return { ...state, count: state.count - 1 };
  // }
  // return { ...state };

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "login":
      return { ...state, login: "login done", id: action.payload.id, pw: action.payload.pw };

    default:
      return { ...state };
  }
}

export default reducer;
