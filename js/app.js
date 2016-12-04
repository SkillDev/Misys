var app = angular.module("misys", ["ngJsonEditor"]);
/*app.controller("InputController", function($scope, $http) {*/
/*	console.log(typeof("http://10.25.31.4:8080/training/mb_dev_best_practices-non_generic_components_in_teams.mp4"));
*/
/*$http.get("sample.json").then(function(data) {
	$scope.data = data.data;
	angular.forEach($scope.data, function(item) {
		var url = item.match("http://");
		var date = item.match(/(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/);
		var time = item.match(/([01]\d|2[0-3]):([0-5]\d)/);
		var file = item.match(/[^\\/]+\.[^\\/]+$/);

		if (url !== null) {
			$scope.url = item;
		}
		if (date !== null) {
			$scope.date = item;
		}
		if (time !== null) {
			$scope.time = item;
		}
		if (file !== null) {
			$scope.file = item;
		}
		console.log($scope.url);
	})
	$scope.updateJson = function () {*/
		/*console.log($scope.data);*/
/*		$scope.msg = 'Data sent: '+ JSON.stringify($scope.data);
	}
});*/
	/*ouvrir un json, rouver le type de chaque champs  (text, number, time,date etc)
	cree une directive qui selon chaque ligne injectera un input.*/
	/*});*/

	app.directive('myInput', function() {
		return {
			controller : function ($scope, $http) {
				$http.get("sample.json").then(function(data) {
					$scope.json = data.data;
				});

				$scope.jsoneditorOptions = {
					"name": 'Json'
				};
				$scope.updateJson = function () {
					$http.post('sample.json', $scope.data).then(function(data) {
						console.log("updated");
					});
					$scope.msg = JSON.stringify($scope.data);
				}
			},
			restrict: 'E',
			template: "	<jsoneditor options='jsoneditorOptions' json='json'></jsoneditor><form ng-submit='updateJson(content)'><div ng-repeat='(key, content) in data'><label>{{key}}</label><input type='text' ng-model='content'></div><button>Update Json</button><p>{{msg}}</p></form>"
		}
	});