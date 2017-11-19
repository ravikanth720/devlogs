// at promt: npm install express

// in app.js
var app = require('express')();
var middlewareFunction = function(req, res, next) {
  console.log('middleware invoked');
  next();    
}
app.use(middlewareFunction);
app.get('/', function(req, res){
  res.send('Hello World');
});
app.use('/users', function(req, res, next){
  console.log("I'm here");
  next();
});
app.get('/users', function(req, res){
  console.log('get');
  //console.log(req, res);
  res.send('whats up!');

});
app.post('/users', function(req, res){
  console.log('post');
});
app.get('/users/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.send('regular');
});

// handler for the /user/:id path, which renders a special page
app.get('/users/:id', function (req, res, next) {
  res.send('special');
});

app.listen(3000);
console.log('running...');

// at prompt: node app.js