import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connect from './database/connect.js'
import Rout from './routes/RegisterRouts.js'
import Route from './routes/BatchRoutes.js'
import Routes from './routes/EnrollRoute.js'
import route from './routes/EnquiryRoute.js'


const app = express()
app.use(express.json());
dotenv.config();
app.use(cors());
app.use('/user', Rout)
app.use('/batches', Route)
app.use('/', Routes)
app.use('/', route)

const port = process.env.PORT || 8004
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`listening to  ${port}`)
        })
    } catch (err) {
        console.log('cannot connect with the server')
    }
}).catch((err) => {
    console.log('failed to connect with the database', err)
})