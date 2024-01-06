import express,{Request,Response} from 'express'
import './config/enviroment.ts'

const app = express()

app.use((req:Request,res:Response)=>{
    res.status(404).end('Error 404')
})

app.listen(process.env.PORT,()=>console.log(`Turning on server on http://localhost:${process.env.PORT}`))