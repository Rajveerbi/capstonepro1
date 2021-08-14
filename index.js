import express from "express"
import bodyParser from "body-parser"
import mongoose  from 'mongoose'

import groceryrouter from './Routes/grocroutes.js'

const DBURL='mongodb+srv://rajveer:rajveer123@cluster0.uro6j.mongodb.net/grocery?retryWrites=true&w=majority'

mongoose.connect(DBURL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(
        (result) => {
                     console.log("Connected to DB");
                     console.log (process.env.PORT);
                     server.listen(PORT)
                    }
    )     
    .catch(
        (err) =>{
                    console.log(err)
                }
    ) 
    
    const server = express()
   
    const PORT= 5000
    server.use(bodyParser.json());
    server.use("/grocery",groceryrouter)

