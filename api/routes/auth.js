import express from "express"
import {myDB} from "../db/MyDB.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
    const newUser = req.body;
    try {
        await myDB.addUser(newUser);
        res.status(200).send("Use created successfully.")
    } catch (err){
        res.status(500).json(err)
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await myDB.getUser({"username": req.body.username});
        if(!user) return res.status(404).json("User not found!")
        if(user.password !== req.body.password){
            return res.status(400).json("Wrong password or username!")
        }
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT);

        const {password, isAdmin, ...otherDetails} = user;
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({...otherDetails});
    } catch (err){
        res.status(500).json(err)
    }
})

export default router