import pool from "../database/config.js";
import { insertEntryTime, insertExitTime, consultShifts } from "../database/queries.js";

// Registrar hora de entrada
export const viewSchedule = async (req, res) => {
  const { username, userId } = req.user;

  const ahora = new Date();

  const ahoraEntrada = ahora.toLocaleTimeString("es-CO", {
    timeZone: "America/Bogota",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const fecha = ahora.toLocaleDateString("es-CO", {
    timeZone: "America/Bogota",
  }).split("/").reverse().join("-"); // Convierte de DD/MM/AAAA a YYYY-MM-DD

  await pool.query(insertEntryTime, [ahoraEntrada, fecha, userId]);

  return res.status(200).json({
    message: "Hora de entrada registrada correctamente",
    horaEntrada: ahoraEntrada,
    fecha,
  });
};

// Registrar hora de salida
export const registerCheckOutTime = async (req, res) => {
  const { username, userId } = req.user;

  const ahora = new Date();

  const ahoraSalida = ahora.toLocaleTimeString("es-CO", {
    timeZone: "America/Bogota",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  await pool.query(insertExitTime, [ahoraSalida, userId]);

  return res.status(200).json({
    message: "Hora de salida registrada correctamente",
    horaSalida: ahoraSalida,
  });
};

// Consultar horarios
export const ViewShifts = async (req, res) => {
  const { username, userId } = req.user;

  const [horarios] = await pool.query("SELECT * FROM horarios WHERE empleado_id = ?", [userId]);
  console.log(horarios);

  return res.status(200).json(horarios);
};
