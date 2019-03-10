const express = require('express')
const server = express();
var cors = require('cors');

server.use(express.json());
server.use(cors())

const PORT = process.env.PORT

//GET / ENDPOINT
server.get('/', (req, res) => {
    console.log('Rendering Welcome Message')
    res.send('Welcome to the API')
});

server.get('/api/users', (req, res) => {
    console.log('Rendering Welcome Message')
    res.send('Users')
});

//POST CUSTOMERS ENDPOINT
server.post('/api/users', (req, res) => {
    console.log('Posting new customer data')
    const customer = req.body; 
    console.log(req.body)
    db('customers').insert(customer)
    .then(ids => {
        res.status(201).json(ids);
    }).catch(err => {
        res.status(500).json({err: 'Failed to insert customer'})
    })
})

server.listen(PORT, () => console.log(`running on port ${PORT}`));
