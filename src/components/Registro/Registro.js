import React from 'react'

const Registro = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        top: "30px",
      }}
    >
      <form>
        <h1 style={{ fontWeight: "bold" }}> Registro</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Correo electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail3" className="form-label">
            Nombre completo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", margin: "5px" }}
        >
         Registrar
        </button>
        <button
          type="submit"
          className="btn btn-info"
          style={{ width: "100%", margin: "5px" }}
        >
         ¿Ya tienes una cuenta? haz Click aqui!
        </button>
      </form>
    </div>
  )
}

export default Registro