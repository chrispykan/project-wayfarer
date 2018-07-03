const Authentication = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});
const postsController = require('./controllers/posts');
const citiesController = require('./controllers/cities');
const usersController = require('./controllers/users');

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({message: 'S3CR3T M3SS4G3'});
  });
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignIn, Authentication.signin);

  //create all cities
  app.post('/cities', citiesController.create);
  //list or show all cities
  app.get('/cities', citiesController.index);
//show one city
  app.get('/cities/:id', citiesController.show);
     
  app.get('/posts', postsController.index);
  //create a new post
  app.get('/cities/:id/posts', postsController.postsForCity);
  app.post('/cities/:id/posts', postsController.create);
  //show one specific post
  app.get('/cities/:id/posts/:post_id', postsController.show);
  //edit one specific post
  app.put('/cities/:id/posts/:post_id', postsController.update);
  //show one specific post
  app.delete('/cities/:id/posts/:post_id', postsController.destroy);

  //show all users
  app.get('/users', usersController.index);
  //show one user
  app.get('/users/:user_id', usersController.show);
  //update a user
  app.put('/users/:user_id', usersController.update);
  //delete a user
  app.delete('/users/:user_id', usersController.destroy);
  //see all users posts
  app.get('users/:user_id/posts', postsController.postsForUser);

}

