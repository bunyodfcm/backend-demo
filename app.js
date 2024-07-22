const express = require("express")

const app = express()

console.log("hello world!");

const PORT = 8080

app.listen(PORT, ()=>console.log(`Listening on - https://localhost${PORT}`))