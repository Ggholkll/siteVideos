require('dotenv').config() ; 
const express = require('express') ; 
const sequelize = require('./db.js') ; 
const models = require('./models/modelsRating.js') ; 
const router = require('./routers/router.js') ; 
const cors = require('cors') ; 

const PORT = process.env.PORT ?? 7000 ; 

const app = express() ; 
app.use(express.json()) ; 
app.use(cors()) ; 
app.use('/api' , router) ; 

const start = async () => {
    try {
        await sequelize.authenticate() ; 
        await sequelize.sync() ; 
        app.listen(PORT , () => console.log('SERVER start ' + PORT)) ; 
    } catch (e) {
        console.log(e) ; 
    }
}

start() ; 