'use strict';

angular.module('facilitymgmtApp')
    .controller('ClientController', function ($scope, $state, Client) {

        $scope.clients = [];
        $scope.loadAll = function() {
            Client.query(function(result) {
               $scope.clients = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.client = {
                name: null,
                conatactPerson: null,
                address: null,
                city: null,
                state: null,
                zipcode: null,
                pf: null,
                esic: null,
                workHours: null,
                id: null
            };
        };
    });