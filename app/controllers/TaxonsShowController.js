app.controller('TaxonsShowController', function($scope, $stateParams, taxonsFactory) {
    // render.taxons.redraw();

    // $scope.taxons = []
    //     .concat([taxonsFactory.getByID($stateParams.id)])
    //     .concat(taxonsFactory.getChildren($stateParams.id));

    $scope.taxons = [];

    taxonsFactory.getByID($stateParams.id, { children: true })
        .success(function(response) {
            $scope.taxons.push(response.data);
            for (var child in response.data.children.data) {
                $scope.taxons.push(response.data.children.data[child]);
            }

            console.log($scope.taxons);
        })
        .error(function(response) {

        });
});