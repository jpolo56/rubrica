import React, { useEffect, useState } from 'react'
import { firebase } from "../../firebase";

const ListSolicitudes = () => {
 const [solicitudes, setSolicitudes] = useState([])
 const eliminar = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection("solicitud").doc(id).delete();
      const aux = solicitudes.filter((item) => item.id !== id);
      setSolicitudes(aux);
    } catch (error) {
      console.log(error);
    }
  };
    const obtenerDatos = async () => {
        try {
          const db = firebase.firestore();
          const data = await db.collection("solicitud").get();
          
          const arrayData = data.docs.map((item) => ({
            id: item.id,
            ...item.data(),
          }));
          //console.log(arrayData)
    
          setSolicitudes(arrayData);
          
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        obtenerDatos()
      
        
      },[])
      
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Categoria Principal</th>
            <th scope="col">Tipo de servicio</th>
            <th scope="col">Ubicacion</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => {
            return (
              <tr key={solicitud.id}>         
                <td>{solicitud.mainCategory}</td>
                <td>{solicitud.typeService}</td>
                <td>{solicitud.ubication}</td>
                <td>{solicitud.description}</td>
                <td>{solicitud.date}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminar(solicitud.id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default ListSolicitudes