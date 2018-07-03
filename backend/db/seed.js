var City = require('../models/City');
var User = require('../models/User');
var Post = require('../models/Post');

var citiesList=[{
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
]

var posts=[{
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
}]

var users=[{name: "Riki", email:"Riki@ga.co", password: "1234", current_city: "El Cerrito, CA"}];

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

City.remove({}, function(err, res){
    if (err) {
      console.log('Error removing cities', err)
      return;
    }
    console.log('Removed all cities');

       
  
});