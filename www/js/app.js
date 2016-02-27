angular.module('starter', ['ionic', 'LocalStorageModule', 'ngResource', 'satellizer'])

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

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $authProvider) {
    $ionicConfigProvider.navBar.alignTitle('left')

    $authProvider.baseUrl = 'http://localhost:3000/'
    $authProvider.tokenName = 'token'
    $authProvider.tokenPrefix = 'recom'
    $authProvider.authHeader = 'Authorization'
    $authProvider.authToken = 'Bearer'
    $authProvider.storageType = 'localStorage'
    $authProvider.cordova = true;
    $authProvider.oauth2({
      name: 'vkontakte',
      url: '/session',
      clientId: '5303112',
      redirectUri: 'http://localhost/',
      authorizationEndpoint: 'https://oauth.vk.com/authorize',
      requiredUrlParams: ['display', 'scope'],
      scope: ['audio', 'friends', 'offline'],
      scopeDelimiter: ',',
      display: 'popup',
      type: '2.0',
      popupOptions: {
        width: 580,
        height: 400
      }
    });

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
