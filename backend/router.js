const Authentication = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});
const postsController = require('./controllers/posts');
const citiesController = require('./controllers/cities');

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({message: 'S3CR3T M3SS4G3'});
  });
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignIn, Authentication.signin);

  //list or show all posts
  app.get('/cities', postsController.index);

  //list or show all cities
  app.get('/cities', citiesController.index);
  //show all posts for one city
  app.get('/cities/:id/posts', citiesController.show);
   //create a new post
  app.post('/cities/:id/posts', postsController.create);
  //show one specific post
  app.get('/cities/:id/posts/:post_id', postsController.show);
  //edit one specific post
  app.put('/cities/:id/posts/:post_id', postsController.update);
  //show one specific post
  app.delete('/cities/:id/posts/:post_id', postsController.destroy);

  app.get('/users', )


}

