import React from 'react'
import { Routes, Route } from "react-router-dom";
import FormSolicitud from '../components/FormSolicitud/FormSolicitud';
import ListSolicitudes from '../components/ListSolicitudes/ListSolicitudes';
import Login from '../components/Login/Login';
import NavBar from '../components/NavBar/NavBar';
import Registro from '../components/Registro/Registro';


const AppRouter = () => {
  return (
    <div>
        <NavBar />
         <Routes>
         <Route path="/" element={<h1>SOLICITUDES</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/solicitudCrear" element={<FormSolicitud />} />
        <Route path="/registrar" element={<Registro />} />
        <Route path="/solicitudes" element={<ListSolicitudes/>} />
      </Routes>
    </div>
  )
}

export default AppRouter