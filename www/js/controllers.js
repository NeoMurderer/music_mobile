angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,localStorageService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
    var loginData = localStorageService.get("loginData")
    if(loginData)
      $scope.loginData = loginData
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    localStorageService.set("loginData",$scope.loginData)
    console.log(localStorageService.get("loginData"));
    console.log($scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlayerCtrl', function($scope,$http,localStorageService) {
  $scope.send = function (event) {
    var user_session = localStorageService.get("loginData")
    $http.post('http://'+user_session.ip+'/fire',
    {
      user_session:user_session,
      user_action:event
    })
  }
  $scope.getState = function () {
    var user_session = localStorageService.get("loginData")
    console.log(user_session);
    $http({
      url:'http://'+user_session.ip+'/get_state',
      method: "POST",
      data: {  user_session:user_session}
   });
  }
  $scope.getState();
  $scope.changeVolume = function () {
    var volume = this.volume
    var user_session = localStorageService.get("loginData")
    $http.post('http://'+user_session.ip+'/fire',
    {
      user_session:{
        email:"test@local.host",
        password:"test"
      },
      user_action:'adjustVolumeSlider',
      user_data:volume
    })
  }
})
