"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";

const Providers = ({ Childeren }) => {
  return <Provider store={store}>{Childeren}</Provider>;
};

export default Providers;
