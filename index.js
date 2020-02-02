
var express = require('express');
var app = express();

var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('form');
  // res.render('form',{nom:"Ferran"});
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(req, res){
  console.log(req.body.username);
  console.log(req.body.tratamiento);
  res.render('form1', {
    data: req.body,
    errors: {
      username: {
        msg: 'A username is required'
      },
      tratamiento: {
        msg: 'That sex doesn‘t look right'
      }
    }
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
