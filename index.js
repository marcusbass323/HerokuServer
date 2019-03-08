const express = require('express')
const server = express();
var cors = require('cors');

server.use(express.json());
server.use(cors())

PORT = process.env.PORT || 7000;

//GET / ENDPOINT
server.get('/home', (req, res) => {
    console.log('Rendering Welcome Message')
    res.send('Welcome to API')
});

server.listen(PORT, () => console.log(`running on port ${PORT}`));
