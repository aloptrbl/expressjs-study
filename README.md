# Express JS Study
##### What is Express JS?
>Express is a fast, unopinionated and minimalist web framework for Node.js
>Express is a “server-side”or “back-end”framework. It is not comparable to client-side frameworks like React, Angular & Vue. It can be used in combination with those frameworks to build full stack applications.

##### Why use Express JS?
>1.	Makes building web applications with Node.js MUCH easier
>2.	Used for both server rendered apps as well as API/Microservices
>3.	Extremely light, fast and free
>4.	Full Control of request and response
>5.	By far the most popular Node framework
>6.	Great to use with client side frameworks as it’s all JS

##### What to know first?
>JS Fundamental (Objects, Array, Conditionals, etc)
Basic Node.js & NPM,
>HTTP Status Codes,
JSON and
High Order Array Methods – forEach, map, filter
Arrow Functions

##### Basic server syntax?
```javascript
const express = require(‘express’);
// Init express
const app = express();
// Create your endpoints/route handlers
app.get(‘/’, function(req. res) {
res.send(‘Hello World’);
});
// Listen on a port
app.listen(5000);

##### Basic route handling?
```javascript
App.get(), app.post(), app.put(), app.delete(). Etc
Access to params, query strings, url parts, etc
Express has a router so we can store routes in separate files and export
We can parse incoming data with Body Parser

App.get(‘/’, function(req, res) {
// Fetch from database
// Load Pages
// Return JSON
// Full access to request & response
});

## Express Middleware?
> Middleware functions are functions that have access to the request and response object. Express has built in middleware but middleware also comes from 3rd party packages as well as custom middleware.
•	Execute ant codes
•	Make changes to the request/response objects
•	End response cycle
•	Call next middleware in the stack 

