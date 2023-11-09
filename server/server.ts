import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConvertToArabic from "./utils/ConvertToArabic";
import ConvertToRoman from "~~/utils/ConvertToRoman";

const server = express()
server.use(cors());

dotenv.config()

server.get('/convert-to-arabic/:number', (req, res) => {
    const conversion = ConvertToArabic(req.params.number)
    return res.json(conversion)
})

server.get('/convert-to-roman/:number', (req, res) => {
    const conversion = ConvertToRoman(parseInt(req.params.number))
    return res.json(conversion)
})

server.listen(process.env.API_PORT || 5001, () => {
    console.log('Listening on ' + process.env.API_PORT || 5001)
})