import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let path = __dirname + "/templates/";

  switch (req.url) {
    case "/":
      path += "home.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      res.statusCode = 404;
      path += "error.html";
  }

  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.write(data.toString());
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000! Check out this url: http://localhost:3000/");
});
