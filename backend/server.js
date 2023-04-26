const express = require("express");
const { connect } = require("mongoose");
const dotenv = require("dotenv").config();
const port = 5000;

//Connexion a la DB

connectDB();

const app = express();

//Middleware qui permet de traiter les donnees de la requete
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a demarre au port " + port));
