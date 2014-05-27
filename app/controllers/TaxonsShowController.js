app.controller('TaxonsShowController', function($scope, $stateParams, taxonsFactory) {
    render.taxons.redraw();

    $scope.taxons = []
        .concat([taxonsFactory.getByID($stateParams.id)])
        .concat(taxonsFactory.getChildren($stateParams.id));
});