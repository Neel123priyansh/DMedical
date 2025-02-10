import express from 'express';
import bcrypt from 'bcryptjs'
import multer from 'multer'
import mongoose from 'mongoose';

const router = express.Router();

const register = async (req, res) => {
    try {
        const { email, phone, date, select, name } = req.body;
        console.log("Received data: ", { email, phone, date, select, name });
         
        const userCreated = await PendingModel.create({email, phone, date, select, name})
        console.log("User created: ", userCreated);

        res.status(200).json({ msg: "User registered successfullyy", userId: userCreated._id.toString(), }); 
    }   catch (error) {
        console.error("Error in register function:", error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }   
};

router.get("/", (req, res) => {
    res.status(200).send("Ho gya Kaamm");
});

export default router;