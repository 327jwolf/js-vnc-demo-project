/* global Screen, Client */
(function () {
  'use strict';

  var client;
  document.getElementById('disconnect-btn').addEventListener('click', function () {
    client.disconnect();
    document.getElementById('screen-wrapper').style.display = 'none';
    document.getElementById('form-wrapper').style.display = 'block';
  });

  document.getElementById('login-btn').addEventListener('click', function () {
    var canvas = document.getElementById('screen');
    var screen = new Screen(canvas);
    client = new Client(screen);
    client.connect({
      host: document.getElementById('host').value || "192.168.1.122", // 24.119.145.154
      port: parseInt(document.getElementById('port').value, 10) || 5900, // 8307 
      password: document.getElementById('password').value || "h@rl3y01" // "oasis12"
    })
    .then(function () {
      document.getElementById('form-wrapper').style.display = 'none';
      document.getElementById('screen-wrapper').style.display = 'block';
    }).catch(e => console.log("app.js: 24",e));
  }, false);

}());
