const express = require('express')
const server = express();
var cors = require('cors');

server.use(express.json());
server.use(cors())

PORT = process.env.PORT || 7000;



server.listen(PORT, () => console.log(`running on port ${PORT}`));
