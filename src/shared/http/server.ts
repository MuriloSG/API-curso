import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { dataSource } from '@shared/typeorm'

dataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta:${process.env.PORT}`)
  })
})
