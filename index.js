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

//USERS ENDPOINT
server.get('/users', (req, res) => {
    console.log('Retrieving acustomer data')
    db('customers').then(rows => {
        res.json(rows);
    }).catch(err => {
        res.status(500).json({err: "Can't retrieve data"})
    })
});

//CUSTOMERS ENDPOINT
server.get('/customers', (req, res) => {
    console.log('Retrieving customer list')
    db('people10').then(rows => {
        res.json(rows);
    }).catch(err => {
        res.status(500).json({err: "Can't retrieve data"})
    })
});

//GET BY ID ENDPOINTS
server.get('/customers/:id', (req, res) => {
    console.log('Retrieving customer by ID')

    const { id } = req.params;
    db('people10').where('id', id)
        .then(rows => {
            res.json(rows);
        }).catch(err => {
        res.status(500).json({err: 'Failed to find customer'})
    })
})


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

//POST PEOPLE10 ENDPOINT
server.post('/customers', (req, res) => {
    console.log('Posting new customer data')
    const customer = req.body; 
    console.log(req.body)
    db('people10').insert(customer)
    .then(ids => {
        res.status(201).json(ids);
    }).catch(err => {
        res.status(500).json({err: 'Failed to insert customer'})
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

//PUT ENDPOINT
server.put('/customers/:id', (req, res) => {
    console.log('Updating customer info')
    const { id } = req.params;
    const customer = req.body;
    console.log(req.body)
    db('people10').where('id', id).update(customer)
        .then(rowCount => {
        res.json(rowCount)
        }).catch(err => {
        res.status(500).json({err: 'Failed to update customer record'})
    })
})


// DELETE ENDPOINT
server.delete('/customers/:id', (req, res) => {
    console.log('Deleting customer by id')
    const { id } = req.params;
    const customer = req.body;
    db('people10').where('id', id).delete(customer)
        .then(rowCount => {
            res.json(customers);
        }).catch(err => {
        res.status(201).json({err: 'Failed to delete customer record'})
    })
})


server.listen(PORT, () => console.log(`running on port ${PORT}`));
