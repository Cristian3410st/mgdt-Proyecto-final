


export const horaDeEntradaFechaPost = async () => {

 const response = await fetch("http://localhost:4000/api/task/registroEntrada", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include", 
});

const data = await response.json();

return{ status:response.status,data}

};





export const horaDeSalidaPost = async () => {
  const response = await fetch("http://localhost:4000/api/task/registroSalida",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    credentials:"include",
   }) 

   const data = await response.json();

    return{ status:response.status,data}
};




export const validarHorariosPost = async () => {
  const response = await fetch("http://localhost:4000/api/task/ConsultarHorarios", {
    method: "POST", // <- Corregido aquí
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();
  return { status: response.status, data };
};

export const cerrarSesion = async () => {
  const response = await fetch("http://localhost:4000/api/logout", {
    method: "DELETE",
    credentials: "include", // importante para eliminar cookie
  });

  const data = await response.json();
  return { status: response.status, data };
};
