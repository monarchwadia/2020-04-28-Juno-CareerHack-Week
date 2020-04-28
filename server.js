// this is similar to doing:
// import express from 'express';
const express = require('express');

// i'm creating a new server instance
// node lets you create as many servers as you want
// this is extremely powerful!
// ..
// ..
// but here i am only creating a single instance.
const app = express();

// I am now creating a GET endpoint 
// GET / will return "Hello World" in my browser
// I can visit it by going to localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World');
});

// start the server and take port 3000
app.listen(
  // I am now actually running the server on port 3000
  3000, 
  // callback that runs when the server successfully starts
  () => console.log(`Now listening on localhost:3000`)
);
