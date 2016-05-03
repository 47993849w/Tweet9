app.factory("Tweets", ["$firebaseArray",
    function($firebaseArray) {
        // create a reference to the database location where we will store our data
        var ref = new Firebase("https://ecaibtweet.firebaseio.com/tweets");

        // this uses AngularFire to create the synchronized array
        return $firebaseArray(ref);
    }
]);

app.factory("Users", ["$firebaseArray",
    function($firebaseArray) {
        // create a reference to the database location where we will store our data
        var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");

        // this uses AngularFire to create the synchronized array
        return $firebaseArray(ref);
    }
]);

app.factory("AddUser",["$firebaseObject",
    function($firebaseObject){
        return function (username){
            // create a reference to the database location where we will store our data
            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
            var usuari = ref.child(username);
            // this uses AngularFire to create the synchronized array
            return $firebaseObject(usuari);
        }
    }
]);

app.factory("TweetsPersonales", ["$firebaseArray",
    function($firebaseArray) {
        return function (username){
            // create a reference to the database location where we will store our data
            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
            var usuari = ref.child(username).child('tweets');
            // this uses AngularFire to create the synchronized array
            return $firebaseArray(usuari);
        }
    }
]);

app.factory("Followers",[ "$firebaseArray",
    function($firebaseArray){
        return function (username){
            // create a reference to the database location where we will store our data
            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
            var usuari = ref.child(username).child("following");
            // this uses AngularFire to create the synchronized array
            return $firebaseArray(usuari);
        }
    }

]);