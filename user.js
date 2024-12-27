import { Router } from "express";
import { createUser } from "../models/user.js";
const user_route = Router()

user_route.post('/addnewuser', async (req, res) => {
    try {
        const result = await createUser(req.body)
        if (result === -1) {
            return res.status(409).json({ message: "User already registered" })
        }
        return res.status(200).json({ message: result })

    }
    catch (e) {
        return res.status(500).json(e)

    }
})

export {user_route}