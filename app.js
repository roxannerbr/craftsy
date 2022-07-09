const express= require('express');
const path = require ('path');
const app= express();
const port= 3015;

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req,res)=>res.sendFile(path.resolve(__dirname, 'views', 'index.html')));
app.get('/', (req,res)=>res.sendFile(path.resolve(__dirname, 'views', 'login.html')));
app.get('/', (req,res)=>res.sendFile(path.resolve(__dirname, 'views', 'register.html')));

app.listen(port, ()=>console.log(`Servidor levantado con exito en http://localhost: ${port}`));