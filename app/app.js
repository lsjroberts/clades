var app = angular.module('cladesApp', ['ngRoute']);

app.controller('TaxonsController', function($scope) {
    $scope.taxons = [
        {id: 1, parentID: null, name: "Life", rank: "life", extant: 1},
        {id: 2, parentID: 1, name: "Bacteria", rank: "domain", extant: 1},
        {id: 3, parentID: 1, name: "Archaea", rank: "domain", extant: 1},
        {id: 4, parentID: 1, name: "Eukaryota", rank: "domain", extant: 1},
        {id: 5, parentID: 4, name: "Animalia", rank: "kingdom", extant: 1},
        {id: 6, parentID: 4, name: "Plantae", rank: "kingdom", extant: 1},
        {id: 7, parentID: 4, name: "Chromaleveolata", rank: "kingdom", extant: 1},
        {id: 8, parentID: 4, name: "Rhizaria", rank: "kingdom", extant: 1},
        {id: 9, parentID: 4, name: "Excavata", rank: "kingdom", extant: 1},
    ];
});