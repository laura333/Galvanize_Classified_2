(function() {
    'use strict';

    angular
        .module('app')
        .component('home', {
            controller: controller,
            templateUrl: 'home/home.template.html'
        });

    controller.$inject = ['$http', '$state', '$stateParams']

    function controller($http, $state, $stateParams) {
        const vm = this;
        vm.$onInit = onInit;
        vm.showAds = showAds;
        vm.createAd = {};
        vm.editAd = editAd;
        vm.deleteAd = deleteAd;
        vm.updateSort = updateSort;
        vm.sortCriteria = '-date';

        function onInit() {
            showAds();
        }

        function showAds() {
            $http.get('/classifieds').then((result) => {
                console.log(result.data);
                vm.ads = result.data;
            });
        }

        function createAd() {
            $state.go('createAd');
        }

        function editAd(thisAd) {
            $state.go('editAd', {
                selectedAd: thisAd
            });
        }

        function deleteAd(id) {
            $http.delete(`/classifieds/${id}`).then((result) => {
                console.log(result);
                showAds();
            });
        }

        function updateSort(criteria) {
            vm.sortCriteria = criteria;
        }

    }

}());
