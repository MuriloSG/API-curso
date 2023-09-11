import express from 'express'
import 'express-async-errors'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.get('/', (request, response) => {
  response.json({ messge: 'Olá dev' })
})

const PORT: number = 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta:${PORT}`)
})
