(function() {

    angular
        .module('player', ['ngMaterial', 'youtube'])
        .controller('playerCtrl', [
            '$scope', 'youtubeService', 'apiConfig', '$mdSidenav', '$q',
            playerCtrl
        ]);


    function playerCtrl($scope, youtubeService, apiConfig, $mdSidenav, $q) {
        var self = this;

        $scope.model = {
          isAuthenticated: youtubeService.isAuthenticated
        }

        $scope.test = 'hello world';

        $scope.signIn = function() {
            youtubeService.authenticate(apiConfig).then(function() {
              $scope.model.isAuthenticated = youtubeService.isAuthenticated;  
            })
        };

        $scope.toggleList = function() {
            console.log('togglelist');
            $mdSidenav('left').toggle();
        }


    }

})();

