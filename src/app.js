import React from "react";
import ReactDOM from "react-dom";


import Main from "Main";
import Nav from "Nav";
import HomePage from "HomePage";
import Service from "Service";
import Account from "Account";

ReactDOM.render(
  <div>
  <Main/>
  <Nav/>
  <HomePage/>
  <Service/>
  <Account/>
  </div>,
  document.getElementById("root")
);
