var express = require('express');
app = express();
port = 8082

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

