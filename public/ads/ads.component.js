(function() {
    'use strict';

    angular
        .module('app')
        .component('ads', {
            controller: controller,
            templateUrl: './ads/ads.template.html'
        });

    function controller() {
        const vm = this;
        vm.$onInit = onInit;
        vm.createAd = createAd;
        vm.formActive = false;

        function onInit() {
            console.log("getting to init fn");
        }

        function toggleForm() {
          vm.formActive = !vm.formActive;
        }

        function createAd() {
          vm.ad.created_at = new Date();
          vm.ads.push(vm.ad);
          delete vm.ad;
          vm.formActive = false;
        }

    }









}());
