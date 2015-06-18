(function() {

    angular
        .module('player', ['ngMaterial', 'youtube'])
        .controller('playerCtrl', [
            '$scope', 'youtubeService', 'apiConfig', '$mdSidenav', '$q', '$timeout',
            playerCtrl
        ]);


    function playerCtrl($scope, youtubeService, apiConfig, $mdSidenav, $q, $timeout) {
        var self = this;

        $scope.model = {
            isAuthenticated: youtubeService.isAuthenticated,
            searchTerm: ''
        }

        $scope.signIn = function() {
            youtubeService.authenticate(apiConfig, false).then(function() {
                $scope.model.isAuthenticated = youtubeService.isAuthenticated;
            })
        };

        $scope.toggleList = function() {
            console.log('togglelist');
            $mdSidenav('left').toggle();
        }

        $scope.search = function() {
            youtubeService.search($scope.model.searchTerm).then(function(data) {
                $scope.model.videos = data.items;
            });
        }

        $scope.setSelected = function(vid) {
            $scope.selected = vid;
            $mdSidenav('left').close();
            youtubeService.playVideo('player', vid.id.videoId);
        }

        // attempt to immediately authenticate
        $timeout(function() {
            youtubeService.authenticate(apiConfig, true).then(function() {
                $scope.model.isAuthenticated = youtubeService.isAuthenticated;
            })
        }, 500);

    } 

})();
