angular.module('testApp', [])
.controller('palindrome', ['$scope','$http', function($scope, $http) {
    $scope.checkWord = function() {

        // Forming the complete the url for the GET request
        // Ex: http://127.0.0.1:8081/palindrome/anna
        var basicUrl = 'http://127.0.0.1:8081/palindrome/';
        var completeUrl = basicUrl.concat($scope.word);

        // Executing the GET request
        // success() is the ASYNC method in case the returned status code is 200
        // error() is the ASYNC method in case the returned status code is 400
        $http.get(completeUrl).
        success(function(response) {
        	$scope.result = 'The word is a palindrome';
        	
        }).error(function(response){
        	$scope.result = 'The word is NOT a palindrome';
        });


    };


}]);