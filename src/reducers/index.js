
const initialState = {
  text: "placeholder from state in reducer",
}

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return {
      
      };
    default:
      return state;
  }
}