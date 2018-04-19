
app.controller('frontPageCtrl',function($scope,$location,loginFctry){
	$scope.user = {};
	$scope.loggedIn = loginFctry.getStatus();
	if($scope.loggedIn){
		$location.path('home');
	}
    $scope.styl = 'z-index:1';
    $scope.sty2 = 'z-index:-1';
    $scope.changeOpacity = function(){
       // $scope.styl = "opacity:0;transform:translateY(-400px)";
       $scope.styl = "opacity:1;transform:scale(2,2);z-index:1";
       //$scope.sty2 = 'z-index:1';
    }
});