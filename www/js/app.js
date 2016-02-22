
angular.module('starter', ['ionic', 'LocalStorageModule','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle('left')

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'HomeCtrl'
  })

  .state('app.playlist', {
    url: '/playlist',
    views: {
      'menuContent': {
        controller: 'PlaylistCtrl',
        templateUrl: 'templates/playlist.html'
      }
    }
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        controller: 'LoginCtrl',
        templateUrl: 'templates/login.html'
      }
    }
  })

  .state('app.player', {
      url: '/player',
      views: {
        'menuContent': {
          controller: 'PlayerCtrl',
          templateUrl: 'templates/player.html'
        }
      }
    })
  $urlRouterProvider.otherwise('/app/playlist');
})
.constant('$ionicLoadingConfig', {
  template: '<ion-spinner icon="android"></ion-spinner>'
});
