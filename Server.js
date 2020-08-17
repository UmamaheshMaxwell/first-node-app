const express = require("express")

const app = express();

app.get("/welcome", (req, res) => {

    res.send("Welcome to Naresh IT Technologies !!!")
})

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server listening at port ${PORT}`)
})


