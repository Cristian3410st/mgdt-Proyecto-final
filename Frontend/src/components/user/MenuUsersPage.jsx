import styles from "../user/User.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  horaDeEntradaFechaPost,
  horaDeSalidaPost,
  validarHorariosPost,
  cerrarSesion,
} from "../../api/task.js";


function MenuUsersPage() {
  const [mensaje, setMensaje] = useState("");
  const [salida, setSalida] = useState("");
  const [horarios, setHorarios] = useState([]);
  const navigate = useNavigate(); // ← para redirigir

  const handleSubmit = async () => {
    const res = await horaDeEntradaFechaPost();
    console.log(res.data);
    setMensaje(res.data);
     setSalida("");      
     setHorarios([]);
  };

  const handleSubmitExit = async () => {

     const confirmar = window.confirm(
    "¿Está seguro de que desea marcar su hora de salida?"
  );

  if(!confirmar){
  
    return

  }
    const res = await horaDeSalidaPost();
    console.log(res.data);
    setSalida(res.data);
    setMensaje("");    
  setHorarios([]); 
  };

  const handleHorarios = async () => {
    const res = await validarHorariosPost();
    setHorarios(res.data);
  setMensaje("");      
  setSalida(""); 
  };




  const handleLogout = async () => {
    const res = await cerrarSesion();
    if (res.status === 200) {
      navigate("/"); 
    }
  };

  return (
    <div className={styles.userContariner}>
      <div>
        <button onClick={handleSubmit}>Registrar hora de entrada</button>
        {mensaje && (
          <p className={styles.mensajeP}>
            {mensaje.message} - {mensaje.horaEntrada}
          </p>
        )}
      </div>

      <button onClick={handleSubmitExit}>Registrar hora de salida</button>
      {salida && (
        <p className={styles.mensajeP2}>
          {salida.message} - {salida.horaSalida}
        </p>
      )}

      <button onClick={handleHorarios}>Consultar horarios</button>

{Array.isArray(horarios) && horarios.length > 0 && (
  <div className={styles.mensaje4}>
    <h3>Horarios asignados</h3>
    <ul>
     {horarios.map((horario, index) => {
  if (!horario.dia_semana || !horario.hora_inicio || !horario.hora_fin) return null;
  return (
    <li key={horario.id || index} className={styles.mensaje5}>
      {horario.dia_semana}: {horario.hora_inicio} - {horario.hora_fin}
    </li>
  );
})}
    </ul>
  </div>
)}

      {/* ✅ Botón de cerrar sesión */}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default MenuUsersPage;
