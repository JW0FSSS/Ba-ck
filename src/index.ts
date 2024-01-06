import express,{Request,Response} from 'express'
import './config/enviroment.ts'
import { main, prisma } from './config/prisma.js'

const app = express()

app.use((req:Request,res:Response)=>{
    res.status(404).end('Error 404')
})

main()
  .then(async (data) => {
    console.log(data);
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

app.listen(process.env.PORT,()=>console.log(`Turning on server on http://localhost:${process.env.PORT}`))