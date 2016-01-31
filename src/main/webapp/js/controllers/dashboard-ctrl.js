cControllers.controller('DashboardController', ['$scope','$http','$location','$cookies', 'Flash', function($scope,$http,$location,$cookies, Flash) {
  $scope.geolocation = {};
  $scope.submitButton = 'Get Weather Condition';

  if ($cookies.getObject('lastWeather')) {
    $scope.weather = $cookies.getObject('lastWeather');
  };

  function variablesReset() {
    $scope.submitButton = 'Get Weather Condition';
    $scope.geolocation = {};
  }


  $scope.locator = function(valid) {
    if (valid) {
      // var path = 'http://api.geonames.org/findNearByWeatherJSON?lat=9&lng=7&username=prognotest'

      var user = 'prognotest';
      var path = 'http://api.geonames.org/findNearByWeatherJSON?lat='+$scope.geolocation.latitude+'&lng='+$scope.geolocation.longitude+'&username='+user;
      var geo = $http.get( path );
      geo.success(function(data) {
        $cookies.putObject('lastWeather', data);
        $scope.weather = data;
        variablesReset();
      });
      geo.error(function(err) {
        Flash.create('danger', '<strong> Ooops!</strong>  The latitude and longitude are not valid. Please use <a target="_blank" href="http://www.latlong.net/">this link</a> to confirm your co-ordinates.');
        variablesReset();
      });
    } else {
      variablesReset();
      console.log($scope.geolocation);
    }
  }


}]);



