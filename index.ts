// import express from "express"
// import { userRouter } from "./routers/userRouter";
// import productRouter from "./routers/ProductRouters";


// const app = express()

// // app.use(json())
// app.use(userRouter)
// app.use(productRouter);


// // app.post("/", async(req: Request, res: Response)=>{
// //     const data = req.body;
// //     const size=data.size 
// //     const price=data.price
// //     const gender=data.gender
// //     // const username= data.username
// //     // const createdAt=data.createdAt
// //     // const password=data.password
// //     const [rows] = await conn.execute(
// //         `INSERT INTO jeans (size, price, gender) VALUES(?,?,?)`, [size,price,gender]
// //     )
    
// //     res.send({
// //         message: "Successfully created jeans"
// //     })
// // })

// app.listen( 3000, ()=>{
//     console.log(("started!"));
    
// })

import express from "express";

import { userRouter } from "./routers/userRouter";
import productRouter from "./routers/ProductRouters";
import cors from 'cors';
const app = express();

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:8080',  // Allow requests from this origin
    methods: ['GET', 'POST'],         // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow only headers with Content-Type
    optionsSuccessStatus: 200         // Return successful status for preflight requests
};
app.use(cors(corsOptions));
app.use(userRouter);
app.use(productRouter);
// app.use((req, res, next) => { next(); }, cors({origin: 'http://localhost:8080', maxAge: 84600}));

app.listen(3000, () => {
    console.log("Server started on port 3000!");
});
