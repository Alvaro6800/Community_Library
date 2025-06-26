import express from 'express'
const app = express()

// Permite que o app consiga transitar JSON.
app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
    const body = req.body;
    users.push(body)
    res.status(201).send("Usuario criado com sucesso")
})

app.get("/users", (req, res) => {
    res.send({users})
})

app.listen(3000)