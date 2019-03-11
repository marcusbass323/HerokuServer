const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);
const server = express();
var cors = require('cors');

const bodyParser = require('body-parser');


var cors = require('cors');

server.use(cors());
server.use(express.json());
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 7000

//GET / ENDPOINT
server.get('/', (req, res) => {
    console.log('Rendering Welcome Message')
    res.send('Welcome to the API')
});

server.get('/users', (req, res) => {
    console.log('Retrieving acustomer data')
    db('customers').then(rows => {
        res.json(rows);
    }).catch(err => {
        res.status(500).json({err: "Can't retrieve data"})
    })
});

//POST CUSTOMERS ENDPOINT
server.post('/login', (req, res) => {
    console.log('Posting new customer data')
    const customer = req.body; 
    console.log(req.body)
    db('customers').insert(customer)
    .then(ids => {
        res.status(201).json(ids);
    }).catch(err => {
        res.status(500).json({err: 'Failed to register'})
    })
})

//POST REGISTER ENDPOINT
server.post('/register', (req, res) => {
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
