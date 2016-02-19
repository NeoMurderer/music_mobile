
angular.module('starter')
.controller('LoginCtrl', function($scope,$state,localStorageService) {

    $scope.login = function() {
      $scope.modal.show();
      var loginData = localStorageService.get("loginData")
      if(loginData)
        $scope.loginData = loginData
    };

    $scope.doLogin = function() {
      localStorageService.set("loginData",$scope.loginData)
      $state.go("app.playlist")
    };
})
