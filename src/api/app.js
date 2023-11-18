const express = require("express")
const app = express()
const path = require("node:path")




//crinado a primeira rota

app.get("/", (req, res) => { 
res.send("Welcome to home")
})

app.get("/user", (req, res) => { 
    const users = {
        data: [{
            name: "abie",
            age: 20
        },
        {
            name: "test",
            age: 10
        }]

    }

    res.json(users.data)
})

//abrindo o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})