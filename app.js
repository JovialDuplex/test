const express = require("express");

const app = express();

app.get("/", (req, res)=> {
    res.send("okay");
});

app.listen(3000, (error)=>{
    if (error){
        console.log("erreur");
    }
    console.log("connexion reussit");
})