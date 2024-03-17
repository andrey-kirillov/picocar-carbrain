const {WiFi} = require('wifi');
const http = require('http');

const wifi = new WiFi();
// wifi.scan((err, scanResults) => {
//     if (err) {
//         console.error('wifi scan error', err);
//     } else {
//         console.log('wifi scan results', scanResults);
//     }
// });

wifi.connect({ssid: '@ndrey', password: 'tp05091986'}, (err) => {
    if (err) {
        console.error('wifi connection error', err);
    } else {
        console.log('wifi is connected');
    }
});

const port = 80;
const server = http.createServer((req, res) => {
    const cmd = req.url.match(/cmd=(.*)/)[1];
    console.log('HTTP Car server received', { cmd });
    res.end();
});

server.on('error', function (e) {
    // Handle your error here
    console.log('Car server error', e);
})

server.listen(port, function () {
    console.log('HTTP Car server listening on port: ' + port);
});
