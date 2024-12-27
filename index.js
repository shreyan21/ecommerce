import express from 'express'
import dotenv from 'dotenv'
import { user_route } from './routes/user.js'
dotenv.config()
const app = express()

app.use(express.json())

app.use('/home', async (req, res) => {
    try {
        return res.status(200).json({message:"Welcome"})
    }
    catch (e) {
        return res.status(500).json({ e })

    }
})

app.use('/home/user',user_route)
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})