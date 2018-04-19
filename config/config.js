var app = angular.module('myApp',['ngRoute','ngAnimate','ngSanitize','ui.bootstrap','ngMaterial','ngMessages']);
/* test comment  fgdfg and from local */

window.routes =
{
    "/": {
        templateUrl: 'views/front.html', 
        controller: 'frontPageCtrl', 
        requireLogin: false
		},
    "/home": {
        templateUrl: 'views/home.html', 
        controller: 'home', 
        requireLogin: true
    	},
	"/login": {
        templateUrl: 'views/login.html', 
        controller: 'login', 
        requireLogin: false
    	}
};

app.config(function($locationProvider,$routeProvider){
	$locationProvider.hashPrefix('');
	for(var path in window.routes) {
	        $routeProvider.when(path, window.routes[path]);
	    }
	    $routeProvider.otherwise({redirectTo: '/'});
});

app.run(function($rootScope,loginFctry,$location){
	$rootScope.$on("$locationChangeStart", function(event, next, current) {
		 for(var i in window.routes) {
	            if(next.indexOf(i) != -1) { 
	                if(window.routes[i].requireLogin && !loginFctry.getStatus()) { 
	                    event.preventDefault();
	                    $location.path('/');
	                }
	            }
	        }
	});
});
