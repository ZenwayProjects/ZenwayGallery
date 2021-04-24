const express = require('express');
const application = express();
const path = require("path");

const router = express.Router();


application.use(express.static('public'));




router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/public/home.html'))
    
})

application.listen(3400);