const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')
const { application } = require('express')

const app = express()

// Conexão com o banco de dados
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    
]

// habilita cors
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        // mobile app
        if (!origin) allowed = true

        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

// Habilita server para receber dados json
app.use(express.json())

// Definindo as rotas
app.use('/api', routes)

// Executando o servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))