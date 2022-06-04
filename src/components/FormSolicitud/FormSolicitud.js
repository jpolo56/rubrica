import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {firebase} from '../../firebase'



const FormSolicitud = () => {
  const servicesType = [
    ["Baños", "Cielo Raso", "Electrico", "Pared", "Puerta"],
    ["Aire acondicionado", "Archivador", "Puesto de trabajo", "Silla"],
    ["Aseo", "Transporte", "Vigilancia"],
  ];
  const [servicesTypeSelected, setServicesTypeSelected] = useState([]);
  const [solicitud, setSolicitud] = useState({
    mainCategory: "MANTENIMIENTO INMUEBLES",
    serviceType: "",
    description: "",
    ubication: "",
    date: "",
  });
  const mainCategories = [
    "MANTENIMIENTO INMUEBLES",
    "MANTENIMIENTO MUEBLES",
    "SERVICIOS",
  ];
  useEffect(() => {
    switch (solicitud.mainCategory) {
      case "MANTENIMIENTO INMUEBLES":
        setServicesTypeSelected(servicesType[0]);
        break;
      case "MANTENIMIENTO MUEBLES":
        setServicesTypeSelected(servicesType[1]);
        break;
      case "SERVICIOS":
        setServicesTypeSelected(servicesType[2]);
        break;

      default:
        break;
    }
  }, [solicitud.mainCategory]);


  const guardarSolicitud = async () => {
    
    try{
     
      const db = firebase.firestore()
     
      
      const data = await db.collection('solicitud').add(solicitud)
      console.log(solicitud);
      Swal.fire(
        'HECHO!',
        'Su solicitud ha sido enviada',
        'success'
      )

      


  }catch(error){
      console.log(error)
  }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        top: "10px",
      }}
    >
      <form style={{ width: "600px" }}>
        <h3 style={{ fontWeight: "bold" }}> Hacer Solicitud</h3>
        <div className="mb3">
          <label for="exampleInputEmail1" className="form-label">
            Categoria Principal
          </label>
          <select id="exampleInputEmail1" class="form-select" value={solicitud.mainCategory} onChange={(e)=>setSolicitud({... solicitud, ['mainCategory']:e.target.value})}>
            {mainCategories.map((categoria)=><option>{categoria}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail2" className="form-label">
            Tipo de Servicio
          </label>
          <select id="exampleInputEmail2" class="form-select" value={solicitud.serviceType} onChange={(e)=>setSolicitud({... solicitud, ['serviceType']:e.target.value})}>
            {servicesTypeSelected.map((servicio)=><option>{servicio}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label for="area" className="form-label">
            Descripcion
          </label>
          <textarea className="form-control" id="area" onChange={(e)=>setSolicitud({... solicitud, ['description']:e.target.value})}></textarea>
        </div>
        <div className="mb-3">
          <label for="ubi" className="form-label">
            Ubicacion
          </label>
          <input type="text" className="form-control" id="ubi" onChange={(e)=>setSolicitud({... solicitud, ['ubication']:e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label for="date" className="form-label">
            Fecha de solicitud
          </label>
          <input type="date" className="form-control" id="date" onChange={(e)=>setSolicitud({... solicitud, ['date']:e.target.value})}></input>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: "100%", margin: "5px" }}
          onClick={guardarSolicitud}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormSolicitud;
