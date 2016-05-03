/**
 * Created by tomeCabello .
 */

app.controller("controlador",["$scope","Tweets", "AddUser", "Users", "TweetsPersonales", "Followers",

    function ($scope, Tweets, AddUser, Users, TweetsPersonales, Followers) {
        $scope.disabled= true;
        $scope.nologeado = "";
        $scope.logeado = "hidden";
        $scope.tweets11 = "hidden";

        $scope.userConnect = "";
        $scope.follow = "";



        $scope.tweets1 = Tweets;
        $scope.TweetsPersonales1 = TweetsPersonales('adria');

       // $scope.tweetsPersonales = TweetsPersonales('');

        $scope.users = Users;
        $scope.followers = Followers('adria');

        $scope.login = function(username){
            for(var i = 0; i < $scope.users.length; i++) {

                var aux = $scope.users[i];

                if (aux.$id == username) {
                    $scope.logeado = "";
                    $scope.nologeado = "hidden";
                    $scope.tweets11 = "hidden";

                    $scope.userConnect = username;
                    $scope.usernameID(username);
                    $scope.tweetsFollowers(aux);
                    $scope.userConnectTotal = aux;
                    $scope.tweetsAlg(aux);

                    break;

                    break;
                }
            }
        };
        $scope.tweetsFollowers = function(aux){
            $scope.messagesFollowers = [];
            
            for (var usuariSeguido in aux.following) {
                var userNameSeguido = aux.following[usuariSeguido].idUser;
                for(var j = 0; j < $scope.users.length; j++) {
                    var aux2 = $scope.users[j];
                    if( aux2.$id == userNameSeguido ) {
                        for(var tweetsSeguido in aux2.tweets){
                            if(tweetsSeguido != null) {
                                $scope.messagesFollowers.push({
                                    "user": aux2.name,
                                    "text": aux2.tweets[tweetsSeguido].text,
                                    "tw": aux2.$id
                                });
                            }
                        }
                    }
                }
            }
        };


        $scope.tweetsAlg = function(aux, user2) {
            $scope.messagesAlgu= [];

            if (aux.following == null){
                console.log("HOLA")
                for (var j = 0; j < $scope.users.length; j++) {

                    var aux2 = $scope.users[j];

                    //if (aux2)
                    if (aux2.$id == user2) {
                        for (var tweetsSeguido in aux2.tweets) {
                            if (tweetsSeguido != null) {
                                $scope.messagesAlgu.push({
                                    "user": aux2.name,
                                    "tw": aux2.$id,
                                    "text": aux2.tweets[tweetsSeguido].text
                                });
                            }
                        }
                        break;
                    }

                }
            }

            else {
                for (var usuariSeguido in aux.following) {
                    var userNameSeguido = aux.following[usuariSeguido].idUser;
                    for (var j = 0; j < $scope.users.length; j++) {

                        var aux2 = $scope.users[j];

                        //if (aux2)
                        if (aux2.$id == user2) {
                            for (var tweetsSeguido in aux2.tweets) {
                                if (tweetsSeguido != null) {
                                    $scope.messagesAlgu.push({
                                        "user": aux2.name,
                                        "tw": aux2.$id,
                                        "text": aux2.tweets[tweetsSeguido].text
                                    });
                                }
                            }
                            break;
                        }

                    }
                    break;
                }
            }
        };
        
        

        $scope.addMessage = function() {
            for(var i = 0; i < $scope.users.length; i++){
                var aux = $scope.users[i];
                if( aux.$id == $scope.userConnect){
                    $scope.tweets1.$add({
                        user: aux.name,
                        text: $scope.message
                    });
                    $scope.TweetsPersonales1.$add({
                        text: $scope.message
                    });
                    $scope.tweetsFollowers($scope.userConnectTotal);
                    $scope.message = "";
                    $scope.disabled = true;
                }
            }
        };

        // if the messages are empty, add something for fun!
        $scope.tweets1.$loaded(function() {
            if ($scope.tweets1.length === 0) {
                $scope.tweets1.$add({
                    user: "Adr",
                    text: "Hola mundo!"
                });
            }
        });

        $scope.addUser = function() {
            $scope.users.$save();
        };

        $scope.addFollow = function(){
            $scope.followers.$add({
                idUser: $scope.follow
            });
            $scope.tweetsFollowers($scope.userConnectTotal);
        };

        $scope.userid = function(username){
            $scope.users = AddUser(username);
        };

        $scope.usernameID = function(username){
            $scope.TweetsPersonales1 = TweetsPersonales(username);
            $scope.followers = Followers(username);
        };

        $scope.disableButton = function () {
            if($scope.message == ''){
                $scope.disabled = true;
            } else {
                $scope.disabled = false;
            }
        };

        $scope.tweets0 = function () {
            $scope.logeado = "hidden";
            $scope.nologeado = "hidden";
            $scope.tweets11 = "";for(var i = 0; i < $scope.users.length; i++) {

                var aux = $scope.users[i];


                if( aux.$id == $scope.userConnect) {

                    $scope.tweetsAlg(aux, $scope.userConnect);

                }
            }

        };
        $scope.tweets01 = function (user1) {
            $scope.logeado = "hidden";
            $scope.nologeado = "hidden";
            $scope.follow = user1;
            
            

            $scope.tweets11 = "";for(var i = 0; i < $scope.users.length; i++) {

                var aux = $scope.users[i];


                if( aux.$id == $scope.userConnect) {

                    $scope.tweetsAlg(aux, user1);

                }
            }

        };

        $scope.tweets00 = function () {
            $scope.logeado = "";
            $scope.nologeado = "hidden";
            $scope.tweets11 = "hidden";

        };

        // index function
        



    }
]);
