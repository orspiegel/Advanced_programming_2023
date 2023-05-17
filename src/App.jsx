import React, { useReducer } from "react";
import { UserContext } from "./UserContext";
import { userReducer } from './userReducer'
import AppRouter from "./components/AppRouter";
import initialUsers from "./db";

const App = () => {
  const initialState = {
    users: initialUsers,
    currentUser: null,
    isAuthenticated: false, // Add this line
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default App;