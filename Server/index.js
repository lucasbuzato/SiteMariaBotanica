const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const CadastroModel = require('./models/cadastro')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/")

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    Cadastro.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password){
                res.json("Sucess")
            } else {
                res.json("Password Incorrect")
            }
        } else {
            res.json("User dont exist")
        }
    })
})

app.post('/cadastro', (req, res) => {
    CadastroModel.create(req.body)
    .then(cadastroo => res.json(cadastroo))
    .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("server is running")
})