const auth = (req, res, next) => {
    const administrador = true;
    if(administrador) return next();
    const errorObj = {
        error: -1,
        descripcion: `ruta ${req.originalUrl} método ${req.method} no autorizada`
    }
    return res.status(401).json(errorObj);
}

module.exports = auth;