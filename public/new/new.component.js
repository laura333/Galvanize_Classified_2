(function() {
  'use strict';

  angular
  .module('app')
  .component('new', {
    controller: controller,
    templateUrl: 'new/new.template.html'
  });

  controller.$inject = ['$http', '$state', '$stateParams'];

  function controller($http, $state, $stateParams) {
    const vm = this;
    // vm.$onInit = onInit;
    vm.createAd = createAd;
    
    // function onInit() {}

    function createAd() {
      $http.post('/classifieds', vm.newAd).then((result) => {
        console.log(result);
        $state.go('home');
      });
    }
  }

}());
