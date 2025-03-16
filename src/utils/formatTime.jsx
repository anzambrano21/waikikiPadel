// utils/formatTime.js
export const formatTime = (time) => {
    const [hour, minute] = time.split(":"); // Dividir la hora en partes
    const hourNumber = parseInt(hour, 10); // Convertir la hora a número
    const period = hourNumber >= 12 ? "PM" : "AM"; // Determinar si es AM o PM
    const formattedHour = hourNumber % 12 || 12; // Convertir a formato 12 horas
    return `${formattedHour}:${minute}${period}`; // Devolver el formato deseado
};