import express from 'express'
import userRouters from './src/routes/user.routes.js'
const app = express()

// Permite que o app consiga transitar JSON.
app.use(express.json());
app.use(userRouters)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});