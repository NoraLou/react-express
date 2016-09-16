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

app.get('/api/navbar', function(req, res) {
  fs.readFile(NAV_DATA_FILE, function(err, data) {
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
