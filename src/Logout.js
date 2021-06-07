import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./Reducer/userReducer";
import "./Logout.css";
// import {useSelector} from "react-redux;"
function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1 className="user__name"> welcome ! You are registered {user.name}</h1>
      <h3 className="user__name">your mail id is {user.email}</h3>
      <button className="logout__button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
