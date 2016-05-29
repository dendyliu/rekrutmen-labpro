angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Friends', function(){
   var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    stats: 'Engineer',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    stats: 'Goodbye',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    stats: 'Sleep',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    stats: 'Developer',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    stats: 'Hope',
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'LINE Webtoon ID',
    stats: 'Engineer',
    face: 'img/linewebtoon.png'
  }, {
    id: 6,
    name: 'Elevenia',
    stats: 'Goodbye',
    face: 'img/elevina.jpg'
  }, {
    id: 7,
    name: 'Stephen Curry',
    stats: 'Sleep',
    face: 'img/curry.jpg'
  }, {
    id: 8,
    name: 'Lionel Messi',
    stats: 'Developer',
    face: 'img/messi.png'
  }, {
    id: 9,
    name: 'Lebron James',
    stats: 'Hope',
    face: 'img/lebron.jpg'
  }];
  
   return {
    all: function() {
      return friends;
    },
    remove: function(friend) {
      friends.splice(friends.indexOf(friend), 1);
    },
    get: function(friendId) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(friendId)) {
          return friends[i];
        }
      }
      return null;
    }
  };
})

.factory('Timelines', function(){
   var timelines = [{
    id: 0,
    name: 'Ben Sparrow',
    date: 'May 5 11:39 AM',
    post: 'What a beautiful mountain , best holiday in this year, hope that next year i climb this mountain again',
    postimg: 'img/mountain.jpg',
    face: 'img/ben.png',
    like: 2,
    comment: 7
  }, {
    id: 1,
    name: 'Max Lynx',
    date: 'May 5 9:05 AM',
    post: 'My sweet little heart when he wake up',
    postimg: 'img/baby.jpg',
    face: 'img/max.png',
    like: 1,
    comment: 5
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    post: 'My new handphone , Samsung galaxy s7 edge!',
    date: 'May 4 2:13 PM',
    postimg: 'img/samsung.jpg',
    face: 'img/adam.jpg',
    like: 3 , 
    comment : 4
  }, { 
    id: 3,
    name: 'Perry Governor',
    date: 'May 4 1:10 PM',
    post: 'Finally my new car arrive! , FERRARI! love that ',
    postimg: 'img/car.jpg',
    face: 'img/perry.png',
    like: 2,
    comment : 7
  }, {
    id: 4,
    name: 'Mike Harrington',
    date: 'May 3 5:03 PM',
    post: 'Playing with my dog in my garden, little MacGee!',
    postimg: 'img/dog.jpg',
    face: 'img/mike.png',
    like: 4,
    comment : 8
  }];
    
   return {
    all: function() {
      return timelines;
    },
    remove: function(timeline) {
      friends.splice(timelines.indexOf(timeline), 1);
    },
    get: function(timelineId) {
      for (var i = 0; i < timelines.length; i++) {
        if (timelines[i].id === parseInt(timelineId)) {
          return timelines[i];
        }
      }
      return null;
    }
  };
});
