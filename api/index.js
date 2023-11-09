import express from "express";

import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

app.use(cors());
app.use(cookieParser());
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/users", usersRoute)

app.listen(8800, () => {
    console.log("Connected to backend!")
})