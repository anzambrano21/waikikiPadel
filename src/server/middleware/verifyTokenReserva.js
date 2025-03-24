import jwt from 'jsonwebtoken';

const verifyTokenReserva = (req, res, next) => {
    const token = req.cookies.token;  // El token se guarda en la cookie "token"

    if (!token) {
        // Si no hay token, devolvemos un array vacío
        return res.status(200).json([]);  // Cambié el 401 por 200 y retorno un array vacío
    }

    jwt.verify(token, 'secreto', (err, decoded) => {
        if (err) {
            // Si el token es inválido, devolvemos un array vacío
            return res.status(200).json([]);  // Cambié el 401 por 200 y retorno un array vacío
        }

        // Si el token es válido, lo decodificamos y lo añadimos al request
        req.user = decoded;  // 'userId' estará en req.user.userId

        next();  // Continuar con la siguiente función
    });
};

export default verifyTokenReserva;