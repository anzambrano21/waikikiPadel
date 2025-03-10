-- Crear la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS waikiki;
USE waikiki;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,          -- Identificador único del usuario
  name VARCHAR(255) NOT NULL,                -- Nombre del usuario
  email VARCHAR(255) NOT NULL UNIQUE,        -- Correo electrónico (único)
  phone VARCHAR(15) NOT NULL,                -- Número de teléfono
  password VARCHAR(255) NOT NULL,            -- Contraseña cifrada
  profileImage VARCHAR(255),                 -- Ruta de la imagen de perfil (opcional)
  role ENUM('admin', 'usuario') NOT NULL DEFAULT 'usuario',  -- Rol del usuario
  isBlocked BOOLEAN NOT NULL DEFAULT FALSE,  -- Estado de bloqueo del usuario
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Fecha de creación del usuario
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


INSERT INTO canchas (name, image, price_per_hour)
VALUES 
('Cancha 1', 'public/canchaPadel.jpg', 20.00),
('Cancha 5', 'https://padelmaster.com.ve/wp-content/uploads/2023/09/elite-usa.jpg', 15.00);