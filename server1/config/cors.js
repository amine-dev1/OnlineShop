import ratelimit from "express-rate-limit";
const CorsOptions = {
    origin: 'http://localhost:5173', // Frontend URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

const limiter = ratelimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // ✅ limite à 100 requêtes par IP pendant la fenêtre
  message: "Trop de requêtes depuis cette IP, réessayez plus tard.",
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {CorsOptions,limiter};