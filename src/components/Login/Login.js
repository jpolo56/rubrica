import React, { useState } from "react";

const Login = () => {

    const [credenciales, setCredenciales] = useState({
        mail:'',
        password:''
    })
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        top: "50px",
      }}
    >
      <form>
        <h1 style={{ fontWeight: "bold" }}> INICIAR SESION</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Correo electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setCredenciales({... credenciales, ['mail']:e.target.value})}
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setCredenciales({... credenciales, ['password']:e.target.value})}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", margin: "5px" }}
        >
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-info"
          style={{ width: "100%", margin: "5px" }}
        >
          ¿No tiene cuenta? haga click aqui
        </button>
      </form>
    </div>
  );
};

export default Login;
