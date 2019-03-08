const express = require('express')
const server = express();
var cors = require('cors');

server.use(express.json());
server.use(cors())

const PORT = process.env.PORT

//GET / ENDPOINT
server.get('/', (req, res) => {
    console.log('Rendering Welcome Message')
    res.send('Welcome to API')
});

server.listen(PORT, () => console.log(`running on port ${PORT}`));
