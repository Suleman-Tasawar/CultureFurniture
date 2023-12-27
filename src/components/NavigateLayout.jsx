import React from "react";
import Navigate from "./Navigate";
import Assurance from "./Assurance";
import { Outlet } from "react-router-dom";

export default function NavigateLayout() {
  return (
    <>
      <Navigate />
      <Outlet />
      <Assurance />
    </>
  );
}
