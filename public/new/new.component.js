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
    vm.$onInit = onInit;
    vm.createAd = createAd;
  }

}());
