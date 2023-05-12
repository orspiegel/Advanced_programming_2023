import { createContext } from "react";

export const UserContext = createContext();

export const userReducer = (state, action) => {
  console.log("e")
    switch (action.type) {
      case "SIGN_UP":
        const newUser = {
          id: new Date().getTime(),
          userName: action.payload.userName,
          userPassword: action.payload.userPassword,
          displayName: action.payload.displayName,
          profilePic: action.payload.profilePic,
        };
        
        // Add the new user to the list of users
        const updatedUsers = [...state.users, newUser];
        console.log(updatedUsers);
        return { ...state, users: updatedUsers };
  
      case "LOGIN":
        const user = state.users.find(
          (user) =>
            user.userName === action.payload.userName &&
            user.userPassword === action.payload.userPassword
        );
  
        if (user) {
          return { ...state, currentUser: user, isAuthenticated: true }
        } else {
          alert("Invalid username or password.");
          return state;
        }
  
      default:
        return state;
    }
  };