(function() {
        angular
            .module('youtube', [])
            .factory('youtubeService', ['$q', function($q) {
                    var lib = {
                        isAuthenticated: false
                    };

                    lib.test = function(apiConfig) {
                        alert('hi');
                        console.log(apiConfig);
                    }

                    lib.authenticate = function(apiConfig) {
                        var deferred = $q.defer();
                        gapi.auth.authorize({
                            client_id: apiConfig.clientId,
                            scope: apiConfig.scopes,
                            immediate: false
                        }, function(authResult) {
                            deferred.notify('done');
                            if (authResult && !authResult.error) {
                                console.log(authResult);
                                lib.isAuthenticated = true;
                                deferred.resolve();
                            } else {
                                lib.isAuthenticated = false;
                                deferred.reject();
                            }
                        });
                    return deferred.promise;
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
