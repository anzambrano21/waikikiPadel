import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';

import usuarioRoutes from "./routes/usuarioRoutes.js";
import canchaRoutes from "./routes/canchaRoutes.js";
import horarioRoutes from "./routes/horarioRoutes.js";
import reservaRoutes from "./routes/reservaRoutes.js";
import pagoRoutes from "./routes/pagoRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

// Rutas
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/canchas", canchaRoutes);
app.use("/api/horarios", horarioRoutes);
app.use("/api/reservas", reservaRoutes);
app.use("/api/pagos", pagoRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*
SELECT r.id, h.date, h.start_time, h.end_time, c.name AS cancha_name, r.status
         FROM reservaciones r
         JOIN horarios h ON r.horario_id = h.id
         JOIN canchas c ON h.cancha_id = c.id
         WHERE r.user_id = 1

*/