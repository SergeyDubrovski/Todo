const corsMiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*" );
    res.header("Access-Control-Allow-Methods", "GET, PUT, PUTCH, POST, DELETE" );
    res.header("Access-Control-Allow-Heders", "Content-type" );
    next();
}

export default corsMiddleware;