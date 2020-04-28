const express = require('express');

const app = express();

// register the static "middleware"
const staticMiddleware = express.static('public')
app.use(staticMiddleware);

// i changed my route because i want my `index.html` to be server from the root
app.get('/api/json', (req, res) => {
  const json = {};
  json.message = 'Hello World';
  json.otherMessage = 'Foo Bar Baz';

  res.json(json);
});

app.listen(3000, () => console.log(`Now listening on localhost:3000`));
