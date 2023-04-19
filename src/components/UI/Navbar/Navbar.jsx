import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "./../button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="navbar">
      {isAuth && <MyButton onClick={logout}>Выйти</MyButton>}
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Список постов</Link>
      </div>
    </div>
  );
};

export default Navbar;
