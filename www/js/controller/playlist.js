angular.module('starter')
  .controller('PlaylistCtrl', function($scope, $ionicModal,$ionicSideMenuDelegate,Tracks,$ionicLoading) {
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
    $scope.findTrack = function () {
      console.log("search");
    }
    $scope.loadTracks = function () {
      $ionicLoading.show();
      var tracks = new Tracks();
      tracks.$query($scope.search).then(function (tracks) {
        $scope.tracks = tracks
        $ionicLoading.hide();
      },function (error) {
        $ionicLoading.hide();
      })
    }()

  })
