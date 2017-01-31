(function() {
    'use strict';

    angular
        .module('app')
        .component('edit', {
            controller: controller,
            templateUrl: 'edit/edit.template.html'
        });

    controller.$inject = ['$http', '$state', '$stateParams'];

    function controller($http, $state, $stateParams) {
        const vm = this;
        vm.selectedAd = $stateParams.selectedAd;
        vm.$onInit = onInit;
        vm.editAd = editAd;

        function onInit() {}

        function editAd() {
            console.log(vm.selectedAd.id);
            $http.patch(`/classifieds/${vm.selectedAd.id}`, vm.selectedAd).then((result) => {
                console.log(result);
                $state.go('home');
            });
        }

    }

}());
