import "dotenv/config";

// Server variables
export const PORT = process.env.PORT ?? 3000;
export const ACCEPTED_ORIGINS = process.env.ACCEPTED_ORIGINS?.split(",") ?? ["http://localhost:3000"];