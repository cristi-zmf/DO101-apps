var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello mars, ma man\n');
});
app.get('/mars2', function (req, res) {
  res.send('Hello mars2, ma man\n');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

