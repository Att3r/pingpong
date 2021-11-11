const express = require('express');
const app = express();
const path = require('path'); // Kaustade "liitmiseks"

//Seaded serveri jaoks
app.use(express.urlencoded({extended: true})); //POST method
app.use(express.json()); //GET jaoks

app.use(express.static(__dirname + '/public'));




app.set('views', path.join(__dirname, 'views')); //kaust views täispikk kaustatee
app.set('view engine', 'ejs'); // Template https://ejs.co/

let title = 'Not defined';



//ROUTES
// Avaleht
app.get('/', (req, res) => {
    title = 'Avaleht';
    res.render('index', {title});
});

// Aaadressile kirjutatakse suvaliselt localhost::3000/...
app.get('*', (req, res) => {
    title = 'Avaleht';
    res.render('index', {title});
});


// Serveri käivitamine pordil 3000
app.listen(3000, () => {
    console.log('Kuulan porti 3000');
})