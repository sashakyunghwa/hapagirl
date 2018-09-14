$(document).ready(function() {

var userFeed = new Instafeed({
    get: 'tagged',
    tagName: 'hapa',
    clientId: 'a46b96dfae1046238851c288cfab1af5',
    limit: 12,
    resolution: 'standard_resolution',
    accessToken: '6664301560.1677ed0.4c70c3a41690468487196e98585367c9',
    sortBy: 'most-recent',
    template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});
userFeed.run();

});

// $(document).ready(function() {

// var token = '6664301560.1677ed0.4c70c3a41690468487196e98585367c9',
// username = 'sashakyunghwa', // rudrastyh - my username :)
// num_photos = 4;

// $.ajax({ // the first ajax request returns the ID of user rudrastyh
//     url: 'https://api.instagram.com/v1/users/search',
//     dataType: 'jsonp',
//     type: 'GET',
//     data: {access_token: token, q: username}, // actually it is just the search by username
//     success: function(data){
//         console.log(data);
//         $.ajax({
//             url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
//             dataType: 'jsonp',
//             type: 'GET',
//             data: {access_token: token, count: num_photos},
//             success: function(data2){
//                 console.log(data2);
//                 for(x in data2.data){
//                     $('ul').append('<li><img src="'+data2.data[x].images.thumbnail.url+'"></li>');  
//                 }
//                 },
//             error: function(data2){
//                 console.log(data2);
//             }
//         });
//     },
//     error: function(data){
//         console.log(data);
//     }
// });


// });
