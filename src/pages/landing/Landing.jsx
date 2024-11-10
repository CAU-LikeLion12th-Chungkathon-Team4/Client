// Landing.jsx
import React from "react";
import { loginHandler } from "../../api/api_login";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  //임시 코드
  const goHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <div>Landing</div>
      <button onClick={loginHandler}>login</button>
      <button onClick={goHome}>goHome</button>
    </div>
  );
};

export default Landing;