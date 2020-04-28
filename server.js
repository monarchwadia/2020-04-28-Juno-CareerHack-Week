const express = require('express');

const app = express();

const folderInWhichToLook = 'public';
const staticMiddleware = express.static(folderInWhichToLook)

// GET everything other than /api/json
app.use(staticMiddleware);

let numberOfClicks = 0;

// GET /api/json
app.get('/api/json', (request, response) => {
  const json = {};
  json.message = 'Hello!! World!!!!!';
  json.otherMessage = 'Foo Bar Baz';
  json.numberOfClicks = numberOfClicks;

  response.json(json);
});

// POST /api/json
app.post('/api/json', (request, response) => {
  numberOfClicks++;
  response.redirect('/');
})

app.listen(3000, () => console.log(`Now listening on localhost:3000`));
