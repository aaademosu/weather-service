cControllers.controller('DashboardController', ['$scope','$http','$location','$cookies', '$q', 'Flash', 'NgMap', function($scope,$http,$location,$cookies,$q,Flash,NgMap) {
  var deferred;
  $scope.geolocation = {};
  $scope.afterInitialRun = false;
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

  function currentPosition(position) {
    Flash.create('warning', '<strong> Please wait!</strong>  Retrieving the weather information.');
    deferred.resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
  }
  function handleError(error) {
    deferred.reject({msg: error.message});
  }
  $scope.getCurrentPositionFromBrowser = function() {
    deferred = $q.defer();
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(currentPosition, handleError);
    } else {
      deferred.reject({msg: "Browser does not supports HTML5 geolocation"});
    }
    return deferred.promise;
  };

  $scope.getCurrentPositionFromBrowser().then(function(data) {
    if (!$cookies.getObject('lastWeather')) {
      console.log(data.latitude, data.longitude);
      $scope.geolocation.latitude = data.latitude;
      $scope.geolocation.longitude = data.longitude;
      $scope.locator(true);
    };
  });

  $scope.showForm = function() {
    $scope.afterInitialRun = true;
  };

  $scope.falsy = function(v) {
    return !(v == 'lat' || v == 'lng');
  }

  $scope.reset = function() {
    $scope.getCurrentPositionFromBrowser().then(function(data) {
      console.log(data.latitude, data.longitude);
      $scope.geolocation.latitude = data.latitude;
      $scope.geolocation.longitude = data.longitude;
      $scope.locator(true);
    });
  }

}]);

