/* ROUTES */

console.log("\n\nAssignment 1 - The Basics");
console.log("-------------------------");

const routes = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log("Incoming request from --> URL: " + url, "and METHOD: " + method);

  // Route 1 - /
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(`
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Index - Assignment 1</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            </head>

            <body>
                <div class="container">
                <div class="row">
                    <div class="col mt-3">
                        <h1>Index - Assignment 1</h1>
                
                <p>Here is the form:</p>
                
                <form action="/create-user" method="POST">
                    
                    <div class="form-group w-50">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" name="username" id="username" aria-describedby="username" placeholder="Your awesome new username!">
                    <small id="emailHelp" class="form-text text-muted">We're going to create all kind of social networks with the username you enter.</small>
                </div>
                    <button type="submit" class="btn btn-dark">Create user</button>
                </form>
                
                    </div>
                </div>
                </div>
            </body>

            </html>        
        `);

    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users - Assignment 1</title></head>");
    res.write("<body><h1>Users - Assignment 1</h1>");
    res.write("<p>Here is the list of users you want:</p>");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("<li>User 4</li>");
    res.write("<li>User n...</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", chunk => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const username = parsedBody.split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("location", "/users");
      return res.end();
    });
  }

  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Any other route - Assignment 1</title></head>");
  res.write("<body><h1>Any other route - Assignment 1</h1></body>");
  res.write("</html>");
  res.end();
};
exports.routesInfo = routes;
