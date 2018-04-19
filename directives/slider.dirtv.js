app.directive('cstSlider',function($interval){
	//note:- change the path in ng-src in template.....
	return{
		scope:{
			
		},
		template:`
			<style>
			 .showImg{
			 	z-index:1;
			 	opacity:1;
			 	//transition: all 1s linear;
			 }
			 .hideImg{
			 	z-index:-1;
			 	opacity:0;
			 	//transition: all 2s linear;
			 }
			 .animateOut{
			 	/*transform:translateX(800px);*/
			 	transform:scale(2,2);
				opacity:0;
			 }
			 .animateIn{
			 	opacity:1
			 }
			 .imgSLiderCnt img:hover{
			 	cursor:pointer;
			 }
			 </style>
		<div style="height:400px;width:100%;overflow:hidden;position:relative;" class="imgSLiderCnt">
		 	<img ng-repeat="x in imageList" ng-src="images/slider/{{x}}"  ng-class="{'showImg': $index==currentImgId,'hideImg':$index!=currentImgId,'animateOut':$index==outId,'animateIn':$index==inId }"  style="width:100%;position:absolute;top:-30px;transition: all 2s linear;">
		 </div>`,
		 
		controller:function($scope,$element,$attrs){
				$scope.currentImgId = 0;
				$scope.imageList = JSON.parse($attrs.imgarry);
				$scope.imgLeng = ($scope.imageList.length-1);
				//set the total time, animation + picture stationary time ......
				$interval(function(){
					$scope.$emit('changeSlider',true);
				},5000);
				
				//fade out slider image
				$scope.$on('changeSlider',function(e,data){
					if(data){
						$scope.outId = $scope.currentImgId; 
						//set fadeOut time.............
						if($scope.currentImgId == $scope.imgLeng){
							$scope.currentImgId = 0;
						} else{
							$scope.currentImgId++
						}
					}
				})
				//image slider code ends....................
		 }
	}
});


app.directive('imgGrid',function($window){
	return{
		scope:{},
		template:`<md-grid-list md-cols-xs="2" md-cols-gt-xs="3" md-cols-gt-md="4"  md-row-height-xs="100px" md-row-height-gt-xs="200px" md-row-height-gt-md="250px"  md-gutter=".3em">
		<!--<md-grid-tile ng-repeat="x in images track by $index" md-colspan="{{$index|randomize}}">-->
		<md-grid-tile ng-repeat="x in images track by $index" >
			<a href="#"style="background-image:url('images/slider/{{x}}');background-size: cover;width:100%;height:100%"></a>
		</md-grid-tile>
		`,
  		controller:function($scope,$element,$attrs){
  			$scope.images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"];
  		}
	}
});

