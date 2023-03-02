import React from "react";
import AddTask from "./Pages/AddTask";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/routes";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer autoClose={3000} />
    <BrowserRouter>
    
    <Routes/>
    <ToastContainer autoClose={3000} />
    </BrowserRouter></>
  );
}

export default App;
