require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;

const hbs = require('hbs');
// const options = {
//     dotfiles: 'ignore',
//     extensions: ['html', 'htm']
// }
app.use( express.static('public') );

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'RMRR',
        titulo: 'Control Inmobiliario '
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'RMRR',
        titulo: 'Control Inmobiliario '
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: ' RMRR ',
        titulo: ' Control Inmobiliario '
    });
})

// app.get('/generic', (req, res) => {
//     res.sendFile( __dirname + '/public/generic')
// });


// app.get('/elements', (req, res) => {
//     res.sendFile( __dirname + '/public/elements')
// });
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html');
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})