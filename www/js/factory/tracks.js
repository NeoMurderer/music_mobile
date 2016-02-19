
angular.module('starter')
  .factory('Tracks',function($resource,setting){
    return $resource(setting.apiLink + "tracks");
  })
