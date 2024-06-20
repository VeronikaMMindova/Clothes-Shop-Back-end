

import express from "express";
import {orderRouter} from './routers/OrderRouter';
import { userRouter } from "./routers/userRouter";
import {productRouter} from "./routers/ProductRouters";
import cors from 'cors';
const app = express();

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:8081',  // Allow requests from this origin
    methods: ['GET', 'POST', 'DELETE', 'UPDATE'],         // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow only headers with Content-Type
    optionsSuccessStatus: 200         // Return successful status for preflight requests
};
app.use(cors(corsOptions));
app.use(userRouter);
app.use(productRouter);
app.use( orderRouter);
// app.use((req, res, next) => { next(); }, cors({origin: 'http://localhost:8080', maxAge: 84600}));

app.listen(3000, () => {
    console.log("Server started on port 3000!");
});

