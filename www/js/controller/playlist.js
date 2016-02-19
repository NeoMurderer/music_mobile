angular.module('starter')
  .controller('PlaylistCtrl', function($scope, $ionicModal,$ionicSideMenuDelegate,Tracks) {
    $ionicModal.fromTemplateUrl('templates/player.html', function($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });
    $scope.showSearch = false;
    $scope.toggleSearch = function () {
      $scope.showSearch = !$scope.showSearch;
    }
    $scope.toggleMenu = function () {
      $ionicSideMenuDelegate.toggleLeft();
    }
    $scope.loadTracks = function () {
      Tracks.query({'title':$scope.trackTitle}).$promise.then(function (tracks) {
        $scope.tracks = tracks
      })
    }()

  })
