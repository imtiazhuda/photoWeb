app.controller('mainCtrl',function($rootScope,$scope,$location,loginFctry,cstModalService,$window){
	$scope.loggedIn = loginFctry.getStatus(); //get current status of user
	$scope.closeSidebar = false;
	$scope.closeRightInfo = false;
	
	if($scope.loggedIn){
		loginWork();	
	}
	
	
	$scope.logout=function(){
		loginFctry.logout(); //call logout function in loginFctry factory 
		$scope.closeSidebar = false;
	}
	
	$scope.$on('loggedIN',function(event,args){
		//get the latest updated status and details..
		$scope.loggedIn = args.status;
		loginWork();
	});

	function loginWork(){
		$scope.userDetails = loginFctry.getUserDetails();
		if(parseInt($window.innerWidth)<1400){
			$scope.closeSidebar = false;
			$scope.closeRightInfo = false;
		}else
		{
			$scope.closeSidebar = true;
			$scope.closeRightInfo=true;
		}
	}


	var $ctrl = this;
	$scope.openLoginModal = function(){
		//cstModalService.modal('myModalContent.html','ModalInstanceCtrl', size, parentSelector);
		cstModalService.modal('loginModal.html','LoginModalInstanceCtrl',$ctrl);
	};


	$scope.menuList = ["Newest","What's Hot","Undiscovered"];
	$scope.activeSb = 0;
	$scope.changeSBActive=function(data){
			$scope.activeSb = data;
	}
	$scope.toggelSideMenu = function(){
		$scope.closeSidebar = !$scope.closeSidebar;
	}

	$scope.toggelRightInfo = function(){
		$scope.closeRightInfo = !$scope.closeRightInfo;
		console.log($scope.closeRightInfo);
	}
	
	//required for top menu opening starts.......................
	var originatorEv;
	$scope.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };
	//required for top menu opening close.......................
	$scope.followList = [
		{name:'first',imgUrl:'images/60.jpeg'},
		{name:'second',imgUrl:'images/60.jpeg'},
		{name:'third',imgUrl:'images/60.jpeg'},
		{name:'fourth',imgUrl:'images/60.jpeg'},
	]


});