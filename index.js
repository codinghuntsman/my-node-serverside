const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;



//------------------Middleware------------------------------------------------------
// cors middleware shares data server side to client side.this is get middleware.
app.use(cors());
//This is post middleware. Post middleware is used for post data to server.if we do not use this middleware>
// it will be show this error > SyntaxError: Unexpected end of JSON input.
app.use(express.json());
//-----------------------------------------------------------------------------------



// This is called API or Route or EndPoint.
app.get('/', (req, res) => {
    res.send('I can code node now with Nodemon hurrah!!!');
});


const users = [
    { id: 1, name: 'Bapparaz', job: 'Actor', email: 'bappa@gmail.com' },
    { id: 2, name: 'Bappa', job: 'Singer', email: 'abc@gmail.com' },
    { id: 3, name: 'Sabana', job: 'Actress', email: 'abc@gmail.com' },
    { id: 4, name: 'Alomgir', job: 'Actor', email: 'abc@gmail.com' },
    { id: 5, name: 'Mannna', job: 'Actor', email: 'abc@gmail.com' },
    { id: 6, name: 'Omar sunny', job: 'Actor', email: 'abc@gmail.com' },
];

//-----Search by filter with query parameter------
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {

    }
    res.send(users);
});

//----------get user id with params api-----------
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    // const user = users[id];
    //------Nicer moto kore  lilkle valo hoy-----------
    const user = users.find(user => user.id === parseInt(id))
    res.send(user);
});

//-----------Post API---------------
app.post('/user', (req, res) => {

    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
});

app.listen(port, () => {
    console.log('Listening to port', port);
});