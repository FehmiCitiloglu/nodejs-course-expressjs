const fs = require("fs");

const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url === "/" && method === "GET" && !fs.existsSync("./username.txt")) {
    res.write(`
            <html>
            <head>
                <title>My First Node.js App</title>
            </head>
            <body> 
            <form action="/create-user" method="POST">
                <label for="username">
                    <input type="text" id="username" placeholder="Enter your name">
                </label>
                <button type="submit">Submit</button>
            </form>
                <ul>
                    <li>
                        User 1
                    </li>
                </ul>
                </body>  
            </html>
            `);

    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("end");
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const user = parsedBody.split("=")[1];
      console.log(user);
    });
    // fs.writeFile("username.txt", user, (err) => {
    // });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
};

module.exports = routeHandler;
