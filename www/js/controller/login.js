
angular.module('starter')
.controller('LoginCtrl', function($scope,$state,localStorageService,$auth) {

    $scope.login = function() {
      $auth.authenticate('vkontakte').then(function () {
        $state.go('app.playlist');
      })
    };

})
