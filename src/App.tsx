import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter basename='/absen'>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
