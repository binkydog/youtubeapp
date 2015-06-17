(function() {
    angular
        .module('youtube', [])
        .factory('youtubeService', ['$q', function($q) {
            var lib = {
                isAuthenticated: false,
                player: null
            };

            lib.test = function(apiConfig) {
                alert('hi');
                console.log(apiConfig);
            }

            lib.authenticate = function(apiConfig, immediate) {
                var deferred = $q.defer();
                gapi.auth.authorize({
                    client_id: apiConfig.clientId,
                    scope: apiConfig.scopes,
                    immediate: immediate
                }, function(authResult) {
                    deferred.notify('done');
                    if (authResult && !authResult.error) {
                        //console.log(authResult);
                        lib.isAuthenticated = true;
                        deferred.resolve();
                    } else {
                        lib.isAuthenticated = false;
                        deferred.reject();
                    }
                });
                return deferred.promise;
            }

            lib.search = function(searchTerm) {
                var deferred = $q.defer();
                gapi.client.load('youtube', 'v3', function() {
                    var request = gapi.client.youtube.search.list({
                        'part': 'id,snippet',
                        'q': searchTerm,
                        'maxResults': 25
                    });
                    request.execute(function(resp) {
                        console.log(resp);
                        deferred.resolve(resp);
                    });
                });

                return deferred.promise;
            }

            lib.playVideo = function(elemName, videoId) {
                
                if (!lib.player) {
                	lib.player = new YT.Player('player', {
	                    height: '100%',
	                    width: '100%',
	                    videoId: videoId,
	                    events: {
	                        'onReady': onPlayerReady
	                    }
	                });
                } else {
                	lib.player.loadVideoById(videoId);
                }

                

                function onPlayerReady(event) {
                    event.target.playVideo();
                }
            }

            function handleAuthResult(authResult) {

                if (authResult && !authResult.error) {
                    console.log(authResult);
                    lib.isAuthenticated = true;
                } else {
                    lib.isAuthenticated = false;
                }
            }


            return lib;
        }]);
})();
