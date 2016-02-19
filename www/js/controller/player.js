
angular.module('starter')
.controller('PlayerCtrl', function($scope,$http,localStorageService,$ionicModal) {
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

  // .fromTemplateUrl() method
  $ionicModal.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


  $scope.openModal = function($event) {
    $scope.modal.show($event);
  };
})
