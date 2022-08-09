const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');

// Set up our express web application
var port = process.env.PORT || 3000;
const app = express();
app.use(urlencoded({ extended: false }));

// This is the URL that will be requested when your number receives a call
// It will be requested without a "Digits" parameter intitially, but subsequent
// requests will contain "Digits"
app.post('/voice', (request, response) => {
  let twiml = `
                <Response>
                  <Dial>+12025550136</Dial>
                </Response>
                `;
  
  // Insert magic here

  response.type('text/xml');
  response.send(twiml);
});

// Use a tunneling tool like ngrok to expose this server to the public Internet!
// Create and run an HTTP server which can handle incoming requests
const server = http.createServer(app);
server.listen(port, () =>
  console.log(`Express server listening on localhost:${port}`)
);
