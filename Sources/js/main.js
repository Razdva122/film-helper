$(document).ready(function(){
	$(".header").css("border","3px solid red");
});
angular.module("myApp",[])
.controller("firstCtrl",function ($scope) {
	$scope.testing = "testing";
});