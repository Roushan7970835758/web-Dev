// console.log("Hello Roushan ");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World This is Roushan ');
res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS tutorial</title>
    <!-- external css  -->
    <link rel="stylesheet" href="tut13.css">


    <!-- internal css  -->
    <style>
        p {
            color: purple;
            background-color: black !important;
            /* no one can overwrite after addng important */
        }
    </style>
</head>

<body>
    <h3>This is CSS tutorial</h3>
    <!-- inline css -->
    <p style="color: red;background-color: rgb(255, 145, 0);">This tutorial will teach you everything you need to know
        about HTML/CSS</p>
</body>

</html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
