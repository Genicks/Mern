const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("This is the home page");
  } else if (request.url === "/about") {
    response.end("This is the about page");
  } else {
    response.end(
      `<h1>This site can't be reached</h1>
    <a href='/'>Go to homepage</a>`
    );
  }
});

server.listen(5000);
