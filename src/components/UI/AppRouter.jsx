import React from "react";
import { useContext } from "react";

import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context";
import { publicRoutes } from "../../router";
import { privateRoutes } from "./../../router/index";
import Loader from "./Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
