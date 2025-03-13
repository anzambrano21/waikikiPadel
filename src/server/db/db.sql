-- Crear la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS waikiki;
USE waikiki;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,       -- Identificador único del usuario
    nombre VARCHAR(255) NOT NULL,           -- Nombre del usuario
    email VARCHAR(255) NOT NULL UNIQUE,     -- Correo electrónico (único)
    telefono VARCHAR(15),                   -- Número de teléfono
    contraseña VARCHAR(255) NOT NULL,       -- Contraseña hasheada
    codigoPais VARCHAR(10),                 -- Código del país
    role ENUM('usuario', 'admin')            
    isBlocked BOOLEAN DEFAULT FALSE        -- Estado de bloqueo
);

-- Tabla de Canchas
CREATE TABLE IF NOT EXISTS canchas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL, -- Campo para la imagen de la cancha
    price_per_hour DECIMAL(10, 2) NOT NULL
);

-- Tabla de Horarios
CREATE TABLE IF NOT EXISTS horarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cancha_id INT NOT NULL,
    date DATE NOT NULL, -- Fecha completa (YYYY-MM-DD)
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    estado ENUM('disponible', 'ocupado') DEFAULT 'disponible',
    FOREIGN KEY (cancha_id) REFERENCES canchas(id)
);

-- Tabla de Reservaciones
CREATE TABLE IF NOT EXISTS reservaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    horario_id INT NOT NULL, -- Reserva basada en el horario, no en la cancha directamente
    status ENUM('pendiente', 'confirmada', 'cancelada') DEFAULT 'pendiente',
    FOREIGN KEY (user_id) REFERENCES usuarios(id),
    FOREIGN KEY (horario_id) REFERENCES horarios(id)
);

-- Tabla de Pagos
CREATE TABLE IF NOT EXISTS pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    reserva_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method ENUM('efectivo', 'tarjeta', 'transferencia') NOT NULL,
    payment_proof VARCHAR(255),
    payment_status ENUM('pendiente', 'completado', 'rechazado') DEFAULT 'pendiente',
    FOREIGN KEY (user_id) REFERENCES usuarios(id),
    FOREIGN KEY (reserva_id) REFERENCES reservaciones(id)
);

ALTER TABLE usuarios
ADD COLUMN role ENUM('usuario', 'admin') DEFAULT 'usuario';