const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'lo so che e\' sabato, \neppure eccoci qui alla sera \nio che faccio il mio primo deploy \ne tu che gay chi legge leggi questo testo, \na ma ancora stai leggendo? \n brv cs s f! sn flc pr t!' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
