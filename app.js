const http = require("http");

//
// const app = express();
//
// app.use((req, res) => {
//   res.writeHead(200);
//   res.end("hello HTTP\n");
// });
//
// app.listen(8864);

let PORT = 8000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("hello NodeJs\n");
}).listen(PORT);

console.log("Node Server listen at " + PORT);
