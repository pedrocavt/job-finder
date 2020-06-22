const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function() {
    console.log(`O express esta rodando na porta ${PORT}`)
})

// body parser
app.use(bodyParser.urlencoded({ extended: false }))

//db connection
db
    .authenticate()
    .then(() => {
        console.log("conectou ao banco de dados")
    })
    .catch(err => {
        console.log("Ocorre um erro ao conectar", err)
    })

//routes
app.get('/', (req, res) => {
    res.send("Esta funcionando 3")
})

//jobs routes
app.use('/jobs', require('./routes/jobs'))