const { v4: uuidv4 } = require('uuid');
export const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      const newUser = {
        id:  uuidv4(),
        userName: action.payload.userName,
        userPassword: action.payload.userPassword,
        displayName: action.payload.displayName,
        profilePic: action.payload.profilePic,
        contactList: [],
      };
      
      const updatedUsers = [...state.users, newUser];
      console.log(updatedUsers);
      
      return { ...state, users: updatedUsers, isAuthenticated: false }; 
  
    case "LOGIN":
      const user = state.users.find(
        (user) =>
          user.userName === action.payload.userName &&
          user.userPassword === action.payload.userPassword
      );

      if (user) {
        return { ...state, currentUser: user, isAuthenticated: true }; 
      } else {
        alert("Invalid username or password.");
        return { ...state, isAuthenticated: false }; 
      }
      case "LOG_OUT":
        return { ...state, currentUser: null, isAuthenticated: false }; 
  
      case "UPDATE_CONTACTS":
        state.currentUser.contactList = action.payload.contactsList;
        return {...state};

    default:
      return state;
  }
};