import express from 'express'
const app = express()
import cors from 'cors'

app.use(express)
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.listen(3000, () => {
console.log("Server Running...");

})