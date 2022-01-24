import React from "react";
import { StatusBar } from "react";

import "./config/ReactotronConfig";

import Routes from "./routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159C1" />
      <Routes />
    </>
  );
}
