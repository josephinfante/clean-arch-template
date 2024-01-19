import express, { Application } from "express";
import cors from "cors";
import appRouter from "./app.routes";
import { ACCEPTED_ORIGINS } from "../../globals";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
app.disable('x-powered-by');

app.use("/", appRouter);

export default app;