import React from 'react';

import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";

interface Props {}

const App: React.FunctionComponent<Props> = ()  => {
  return (
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
  );
};

export default App;
