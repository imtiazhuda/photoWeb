app.service('cstModalService',function($uibModal, $log, $document){
	
	this.modal=function(tplUrl,cstCntr,$ctrl,size, parentSelector){
		 $ctrl.items = ['item1', 'item2', 'item3'];
			var parentElem = parentSelector ? 
			  angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
			var modalInstance = $uibModal.open({
			  animation: $ctrl.animationsEnabled,
			  ariaLabelledBy: 'modal-title',
			  ariaDescribedBy: 'modal-body',
			  templateUrl: tplUrl,
			  controller: cstCntr,
			  controllerAs: '$ctrl',
			  size: size,
			  appendTo: parentElem,
			 resolve: {
				items: function () {
				  return $ctrl.items;
				}
			  }
			});
		
			modalInstance.result.then(function (selectedItem) {
			  //$ctrl.selected = selectedItem;
			}, function () {
			  //$log.info('Modal dismissed at: ' + new Date());
			});
	};
});
