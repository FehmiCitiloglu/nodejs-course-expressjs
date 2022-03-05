const http = require("http");

const port = process.env.PORT || 3000;
const requestHandler = require("./routes");

const server = http.createServer(requestHandler);

server.listen(port);
