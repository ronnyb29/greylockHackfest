Parse.initialize("rqx952GFL9NF8RlTqPzCazKANGmvnNEPcskzJpPM", "y0lri40GdFPFYugI0EoQByLDrXLhLrkIJA5Zgwun");

Parse.Cloud.define("createGameScores", function(request, response) {
    var GameScore = Parse.Object.extend("GameScore");
    var gameScore = new GameScore();

    gameScore.set("score", 1337);
    gameScore.set("playerName", "Sean Plott");
    gameScore.set("cheatMode", false);

    gameScore.save(null, {
        success: function(gameScore) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + gameScore.id);
        },
        error: function(gameScore, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
        }
    });
});


Parse.Cloud.define('httpRequest', function(request, response) {
    Parse.Cloud.httpRequest({
        url: 'http://www.parse.com/',
        success: function(httpResponse) {
            console.log(httpResponse.text);
        },
        error: function(httpResponse) {
            console.error('Request failed with response code ' + httpResponse.status);
        }
    });
});
//require("cloud/linkedin_api.js")
//require("cloud/facebook_api.js")


Parse.Cloud.define("tourCreated", function(request, response) {

    var Tour = Parse.Object.extend("Tour");
    var tour = new Tour();
    tour.save(null, {
        success: function(listing) {
            response.success();
            console.log("Save ok");
        },
        error: function(error) {
            response.error(error);
            console.log("Save ko");
        }
    });
});

Parse.Cloud.define("testProfileCreated", function(request, response) {

    var TestProfile = Parse.Object.extend("TestProfile");
    var testProfile = new TestProfile();

    testProfile.set("name", "Bryan Keller");
    testProfile.set("profilePictureFile", "https://media.licdn.com/media/p/1/005/04d/21b/2dc5482.jpg");
    testProfile.set("headline", "ay lmaoing since 1995");
    testProfile.save(null, {
        success: function(testProfile) {
            response.success();
            console.log("Save ok");
        },
        error: function(error) {
            response.error(error);
            console.log("bryan can't save properly :(");
        }
    });
});


Parse.Cloud.define("postProfile", function(request, response) {
    var Profile = Parse.Object.extend("Profile");
    var profile = new Profile();

    profile.set("name", "Bryan Keller");
    // profile.set("profilePictureFile", );
    profile.set("headline", "ay lmaoing since 1995");


    profile.save(null, {
        success: function(profile) {

            response.success();
            console.log("dis can save");
        }
    })
});

var names = ['Phil Fung', 'Charles Jolley', 'Kenny To', 'Sarah Guo',
    'Dylan Field', 'Andrew Lee', 'Erin Yang', 'Victoria Dudin', 'Richard  Tom',
    'Alex Davis', 'Kevin Liu', 'Joshua   Dorsey'
];

var headlines = [
    'Operator,  CTO',
    'Jack Search, CEO',
    'Rubrik, Founding Engineer',
    'Greylock, Associate',
    'Figma, CEO',
    'Firebase, CTO',
    'Workday, Sr. Director Product Management',
    'Facebook, Engineering Manager',
    'Vessel, CTO',
    'Airbnb, Engineering Manager',
    'Nextdoor, Director of Engineering',
    'SVB, VP'
];


Parse.Cloud.define("addFakeData", function(request, response) {
    for (var i = names.length - 1; i >= 0; i--) {
        var Profile = Parse.Object.extend("Profile");
        var profile = new Profile();

        profile.set("name", names[i]);
        // profile.set("profilePictureFile", );
        profile.set("headline", headlines[i]);

        profile.save(null, {
            success: function(profile) {
                response.success();
                console.log("dis can save");
            }
        });
    };
})
