angular.module('starter.controllers', [])




.controller('ContactCtrl', function($scope,Friends ,$ionicHistory) {
  var f=Friends.all();
   $scope.groups = [];
   $scope.groups[0] = {
      name: 'Profile',
      items: [],
      show: false
    };
     $scope.groups[1] = {
      name: 'Friends',
      items: [],
      show: false
    };
    var myaccount= {
      name : 'Dendy',
      stats: 'Labpro!',
      face : 'img/pom.jpg'
    };
    $scope.groups[0].items.push(myaccount);
      for (var j=0; j<f.length; j++) {
        $scope.groups[1].items.push(f[j]);
      }
  
  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };
  
  $scope.$on('$ionicView.afterLeave', function(){
    $ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.beforeEnter', function(){
    //$ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.beforeLeave', function(){
    $ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.afterEnter', function(){
    $ionicHistory.clearCache();
  });
  
  $scope.friends= Friends.all();
  $scope.remove = function(friend) {
    Friends.remove(friend);
  };
})

.controller('ChatsCtrl', function($scope, Chats,  $ionicHistory) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
   
  $scope.$on('$ionicView.afterLeave', function(){
    $ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.beforeEnter', function(){
    //$ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.beforeLeave', function(){
    $ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.afterEnter', function(){
    $ionicHistory.clearCache();
  });
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope,Chats,$stateParams, $timeout, $ionicScrollDelegate) {
   $scope.chat = Chats.get($stateParams.chatId);
   $scope.hideTime = true;

  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.sendMessage = function() {
    alternate = !alternate;
 

    var d = new Date();
  d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: alternate ? '12345' : '54321',
      text: $scope.data.message,
      time: d
    });

    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];

})

.controller('AddFriendCtrl', function($scope,Friends) {
  var f=Friends.all();
   $scope.groups = [];
   $scope.groups[0] = {
      name: 'Official Account Reccomendations',
      items: [],
      show: false
    };
     $scope.groups[1] = {
      name: 'Friend Reccomendations',
      items: [],
      show: false
    };
     for (var i=5; i<7; i++) {
        $scope.groups[0].items.push(f[i]);
      }
      for (var j=7; j<10; j++) {
        $scope.groups[1].items.push(f[j]);
      }
    
  
  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };
})

.controller('TimelineCtrl', function($scope,Timelines) {
  $scope.timelines = Timelines.all();
  $scope.remove = function(timeline) {
    Timelines.remove(timeline);
  };
  
});

