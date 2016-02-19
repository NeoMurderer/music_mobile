angular.module('starter')
  .factory('setting', function() {
    var setting = {
      apiLink: "http://localhost:3000/",
      statuses: {
        unauthorized: 401,
        forbidden: 403
      }
    }
    return setting
  })
