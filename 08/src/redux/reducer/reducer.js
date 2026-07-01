let initialState = {
  contactList: [],
};

// function reducer(state = initialState, action) {
//   switch ((action.type)) {
//     case "ADD_CONTACT":
//       return {
//         ...state,
//         contactList: [
//           ...state.contactList,
//           {
//             name: action.payload.name,
//             phoneNumber: action.payload.phoneNumber,
//           },
//         ],
//       };
//     default:
//       return { ...state };
//   }
// }

function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    default:
      return { ...state };
  }
}

export default reducer;
