const initialState ={
  isAdmin: false,
  userInfo:{},
};
const userReducer = (state=initialState, action) => {
    switch (action.type) {
      case "LOGIN__USER":
        return state;
      case "LOGOUT_USER":
        return state;
      default:
        return state;
    }
  };
  export default userReducer;