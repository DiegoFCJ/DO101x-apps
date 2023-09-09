const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 3 of the app.' + '\n';
    mostraPopup();
    //send the response to the client
    res.send(response);
    function mostraPopup() {
      // Crea un elemento div per il popup
      const popup = document.createElement("div");
      popup.classList.add("popup");
    
      // Aggiungi il contenuto al popup
      popup.innerHTML = `
        <p>Vuoi andare avanti?</p>
        <button id="si">Si</button>
        <button id="no">No</button>
        <button id="chiudi">X</button>
      `;
    
      // Aggiungi il popup al documento
      document.body.appendChild(popup);
    
      // Imposta un gestore di eventi per il pulsante "Si"
      document.getElementById("si").addEventListener("click", () => {
        // Cambia il testo e disabilita i pulsanti
        popup.innerHTML = `
          <p>Si, ok, sei andato avanti. E ora?</p>
          <button id="chiudi">X</button>
        `;
      });
    
      // Imposta un gestore di eventi per il pulsante "No"
      document.getElementById("no").addEventListener("click", () => {
        // Chiudi il popup
        document.body.removeChild(popup);
      });
    
      // Imposta un gestore di eventi per il pulsante "X"
      document.getElementById("chiudi").addEventListener("click", () => {
        // Chiudi il popup
        document.body.removeChild(popup);
      });
    }
});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});




