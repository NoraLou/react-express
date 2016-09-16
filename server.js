const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const NAV_DATA_FILE = path.join(__dirname, 'navigation.json')

app.set('port', (process.env.API_PORT || 3001));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//custom 404 page
app.use(function (req, res){
  res.type('text/plain');
  res.status(404)
  res.send('404 - Not found')
});

//custom 500 page
app.use(function (req, res){
  res.type('text/plain');
  res.status(500)
  res.send('500 - Server Error')
});

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/navbar', function(req, res) {
  fs.readFile(NAV_DATA_FILE, function(err, data) {
    res.type('text/plain');
    res.send(data)
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});





app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
