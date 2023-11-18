const app = require("express")()


//crinado a primeira rota
app.get("/", (req, res) => {
    res.send("Hello from backend")
})



//abrindo o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})