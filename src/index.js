const express = require('express')
require('dotenv').config() // pegar variáveis de ambiente

const services = require('./services')
const routes = require('./routes')

const PORT = process.env.PORT || process.env.LOCAL_PORT

services.connectToDatabae(process.env.MONGO_URL)

const app = express()

app.use(routes)

app.listen(PORT, console.log(`Server running on port ${PORT}`))

