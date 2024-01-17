const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

// Serving the static files from my CRA
app.use(express.static(path.join(__dirname, 'client', 'build')));
// Home Static files


// route to create new users - this is an API endpoint.
// Meant for data not for presentation to the user. 
app.get('/account/create/:userName/:password', function (req, res) {
  // create user - should i use the User model here? 
  dal.create(req.params.userName, req.params.password)
  .then((user) => {
      console.log(user);
      res.send(user);
  });
});

// Login route - API endpoint
app.get('/account/login/:email/:password', (req, res) => {
  dal.login(req.params.email, req.params.password)
  .then((user) => {
    if (!user) {
      // Send user the error status
      return res.sendStatus(400);
    }  
    console.log(user);
    res.send(user);
  })
});


// Post to mongo    
app.post('')

// catch all-handle all requests if no one else handled it.
// NOT YET, but you'll use below 3 lines -1/17/24
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });


app.get('/', (req, res) => {
    res.send('Hello, Expresssssss!');
  });

  app.listen(port, () => console.log('Helloloojvckn'));