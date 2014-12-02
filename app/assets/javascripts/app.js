'use strict';

angular.module('app', [])
.factory('FeedService',['$http',function($http){
	return {
		getFeeds : function(url){
			return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
		}
	}
}]).controller('FeedController', ['$scope','FeedService', function($scope, FeedService) {



	console.log("entrou feedctrl")
	$scope.uri = function(uri){
		FeedService.getFeeds(uri).then(function(res){
			$scope.feeds= res.data.responseData.feed.entries;
		});
	};

	$scope.formataData = function (dataRecebida) {

		var data = new Date(dataRecebida);
		var ano = data.getFullYear();
		var mes = data.getMonth();
		var dia = data.getDate();
		return dia + "/" + (mes + 1) + "/" + ano;
	};



}]);;



