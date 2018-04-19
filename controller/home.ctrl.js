app.controller('home',function($scope,loginFctry){
	$scope.userDetails = loginFctry.getUserDetails();
	$scope.menuList = ["Newest","What's Hot","Undiscovered"];
	$scope.imageList =["1.jpg","2.jpg","3.jpg","4.jpg"];
	



});

