import  express  from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import cors from "cors"


import authRoutes from "./routes/auth.routes.js"
import taskRoutes from "./routes/task.routes.js"



const app = express();

const corsOptions ={
    origin:["http://localhost:5173"],
    credentials: true,
}

app.use(cors(corsOptions))

process.env.TZ = 'America/Bogota';

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())

app.use('/api',authRoutes)
app.use('/api/task',taskRoutes)

export default app;