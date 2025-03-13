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

-- Eliminar la restricción de clave externa en horarios
ALTER TABLE horarios DROP FOREIGN KEY horarios_ibfk_1;

-- Truncar la tabla canchas
TRUNCATE TABLE canchas;

-- Volver a agregar la restricción de clave externa
ALTER TABLE horarios ADD CONSTRAINT horarios_ibfk_1 FOREIGN KEY (cancha_id) REFERENCES canchas(id);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Cancha 1', '../public/cancha1.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Cancha 2', '../public/cancha2.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Cancha 3', '../public/cancha3.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Cancha 4', '../public/cancha4.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Cancha 5', '../public/cancha5.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Cancha 6', '../public/cancha6.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Cancha 7', '../public/cancha7.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Cancha Central', '../public/ccentral.webp', 12.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Estadio 1', '../public/estadio1.webp', 20.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Estadio 2', '../public/estadio2.webp', 20.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Individual', '../public/individual1.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Pickeball 1', '../public/pickeball1.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Pickeball 2', '../public/pickeball2.webp', 10.00);

-- Insertar un solo registro
INSERT INTO canchas (name, image, price_per_hour)
VALUES ('Pickeball 3', '../public/pickeball3.webp', 10.00);