//Modo de instanciar / importar o express (Precisa configurar o package com "type":"module")
import  express  from "express"; 

//Modo de instanciar o express com require
//const express = require('express'); 

const server = express();
server.use(express.json());

server.listen(5000, () => {
    console.log('Servidor on na porta 5000');
})