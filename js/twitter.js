$(document).ready(function() {

    $("#retweet-button").click(function(){
        $.ajax({url: "https://api.twitter.com/1.1/statuses/user_timeline.json",
        data: {
            'screen_name': 'hapagirlstrwear',
            'count': '1'
        },
        success: function(response){
        }
    })});

});

