import './styles/main.scss';
import MyRouter from "./js/components/MyRouter.js";
import React from "react";
import ReactDOM from "react-dom";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<MyRouter />, wrapper) : false;