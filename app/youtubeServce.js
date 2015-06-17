angular
	.module('youtube', [])
	.factory('youtubeService', function() {
		var lib = {}

		lib.test = function() {
			alert('hi');
		}

		return lib;
	})