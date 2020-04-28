const express = require('express');

const app = express();

// register the static "middleware"
const folderInWhichToLook = 'public';
const staticMiddleware = express.static(folderInWhichToLook)
app.use(staticMiddleware);

let numberOfClicks = 0;

// i changed my route because i want my `index.html` to be server from the root
app.get('/api/json', (req, res) => {
  const json = {};
  json.message = 'Hello!! World!!!!!';
  json.otherMessage = 'Foo Bar Baz';
  json.numberOfClicks = numberOfClicks;

  res.json(json);
});

app.post('/api/json', (req, res) => {
  numberOfClicks++;
  res.redirect('/');
})

app.listen(3000, () => console.log(`Now listening on localhost:3000`));
