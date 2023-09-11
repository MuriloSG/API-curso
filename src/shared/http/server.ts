import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import 'dotenv/config'
const app = express()

app.use(express.json())
app.use(cors())
app.get('/', (request, response) => {
  response.json({ messge: 'Olá dev' })
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta:${process.env.PORT}`)
})
