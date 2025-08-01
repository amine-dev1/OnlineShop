const CorsOptions = {
    origin: '*', // Frontend URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

module.exports = CorsOptions;