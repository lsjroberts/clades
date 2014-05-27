app.factory('taxonsFactory', function($http) {
    var factory = {};

    factory.testData = [
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

    factory.getAll = function(id) {
        return this.testData;
    };

    factory.getByID = function(id) {
        taxons = this.getAll();
        for (i in taxons) {
            if (taxons[i].id == id) {
                return taxons[i];
            }
        }

        return false;
    };

    factory.getChildren = function(parentID) {
        taxons = this.getAll();
        children = [];
        for (i in taxons) {
            if (taxons[i].parentID == parentID) {
                children.push(taxons[i]);
            }
        }

        return children;
    }

    return factory;
});