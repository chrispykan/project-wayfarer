console.log ('seeds work!') 

var db = require('./models/index.js');

var citiesList = [{
    city_name: "San Francisco",
    country: "USA",
    photo: "../../public/images/sanFran.jpg",
    posts: []
},
{
    city_name: "London",
    country: "United Kingdom",
    photo: "../../public/images/london.jpg",
    posts: []
},
{
    city_name: "Seattle",
    country: "USA",
    photo: "../../public/images/seattle.jpg",
    posts: []
},
{
    city_name: "Sydney",
    country: "Australia",
    photo: "../../public/images/Sydney.jpg",
    posts: []
}
];

var postsList = [{
    title: 'Sad Sad Seattle',
    review: 'All the rain in Seattle makes it a depressing gray place. But there are lots of good restaurants and cool things to see.',
    post_photo: "../images/seattle.jpg",
    user_id: null,
    city_id: null,
},
{
    title: 'Hi San Francisco!',
    review: 'Great food and nice people, but a bit colder than expected.',
    post_photo: "../images/ferryBuilding.jpg",
    user_id: null,
    city_id: null,
}];

// var users=[{name: "Riki", email:"Riki@ga.co", password: "1234", current_city: "El Cerrito, CA"}];

// User.remove({}, function(err, removedUsers){
//     User.create(users, function(err, createdUsers){
//         posts.forEach(post => {
//             post.user_id = createdUsers._id;
//         })

//         Post.remove({}, function(err, removedPosts) {
//             Post.create(posts, function (err, createdPosts) {
//                 console.log('You created posts!', createdPosts);
//             });
//         });

//     });
// }); 

db.Post.remove({}, function(err, posts) {
  if (err) {
    console.log("Error occured in remove", err);
  } else {
    console.log("removed all posts");


    db.Post.create(postsList, function(err, posts){
      if (err) {
        return console.log("error!", err);
      }
      console.log('created', posts.length, 'posts');
      process.exit(); 
    });
  }
});

// db.City.remove({}, function(err, cities){
//     if (err) {
//       console.log('Error removing cities', err);
//     } else {
//       console.log("removed all cities");
//      process.exit();       
  
// });