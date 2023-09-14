const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const mainRouter = require("./backend/routes/index")

app.use(express.static(path.join(__dirname, "frontend", "public")))
app.use("/", mainRouter)

app.listen(port, () => {
    console.log(`Servidor rodando porta: ${port}`)
})
