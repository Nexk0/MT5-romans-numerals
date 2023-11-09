import express from 'express'
import cors from 'cors'
import ConvertToArabic from "./utils/ConvertToArabic";
import ConvertToRoman from "~~/utils/ConvertToRoman";

const server = express()
server.use(cors());

server.get('/convert-to-arabic/:number', (req, res) => {
    const conversion = ConvertToArabic(req.params.number)
    return res.json(conversion)
})

server.get('/convert-to-roman/:number', (req, res) => {
    const conversion = ConvertToRoman(parseInt(req.params.number))
    return res.json(conversion)
})

server.listen(5000)