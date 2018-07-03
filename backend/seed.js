var db = require('./models/index.js');

var citiesList = [{
    city_name: "San Francisco",
    country: "USA", 
    photo: "../frontend/public/images/sanFran.jpg",
    posts: null
},
{
    city_name: "London",
    country: "United Kingdom",
    photo: "../frontend/public/images/london.jpg",
    posts: null
},
{
    city_name: "Seattle",
    country: "USA",
    photo: "../frontend/public/images/seattle.jpg",
    posts: null
},
{
    city_name: "Sydney",
    country: "Australia",
    photo: "../frontend/public/images/Sydney.jpg",
    posts: null
}
];

var postsList = [{
    title: 'Sad Sad Seattle',
    review: 'All the rain in Seattle makes it a depressing gray place. But there are lots of good restaurants and cool things to see.',
    post_photo: "../frontend/public/images/seattle.jpg",
    user_id: null,
    city_id: null,
},
{
    title: 'Hi San Francisco!',
    review: 'Great food and nice people, but a bit colder than expected.',
    post_photo: "../frontend/public/images/ferryBuilding.jpg",
    user_id: null,
    city_id: null,
}];

var users=[{name: "Riki", email:"Riki@ga.co", password: "1234", current_city: "El Cerrito, CA"}];

db.City.remove({}, function(err, removedCities){
    db.City.create(citiesList, function (err, createdCities){
        postsList.forEach(post=>{
            post.city_id = createdCities._id;
        });
        console.log('created new cities ', createdCities);
    });
});

db.User.remove({}, function(err, removedUsers){
    db.User.create(users, function(err, createdUsers){
        postsList.forEach(post => {
            post.user_id = createdUsers._id;
        });
        db.Post.remove({}, function(err, removedPosts) {
            db.Post.create(postsList, function (err, createdPosts) {
            console.log('You created posts!', createdPosts);
            process.exit();
            });
        });
    });
}); 
// db.City.remove({}, function(err, removedCities) {
//     db.City.create(citiesList, function (err, createdCities) {
//         console.log('You created cities!', createdCities);
//         process.exit();
//     });
// });



// db.Post.remove({}, function(err, posts) {
//   if (err) {
//     console.log("Error occured in remove", err);
//   } else {
//     console.log("removed all posts");


//     db.Post.create(postsList, function(err, posts){
//       if (err) {
//         return console.log("error!", err);
//       }
//       console.log('created', posts.length, 'posts');
//       process.exit(); 
//     });
//   }
// });
