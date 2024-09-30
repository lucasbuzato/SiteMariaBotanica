const mongoose = require('mongoose')

const CadastroSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const CadastroModel = mongoose.model("cadastro", CadastroSchema)
module.exports = CadastroModel