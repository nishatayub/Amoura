const initialState = {
    email: "",  // Initial state for email
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_EMAIL":
        return { ...state, email: action.payload };  // Update email in state
      default:
        return state;
    }
  };
  
  export default userReducer;
  