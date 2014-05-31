app.factory('taxonsFactory', function($http) {
    var factory = {},
        root = 'http://localhost:8001';

    factory.getAll = function(id) {
        return $http.get(root + '/taxa');
    };

    factory.getByID = function(id, options) {
        var settings = this._unionSettings({ children: false }, options),
            path = root + '/taxa/' + id;

        if (settings.children) {
            path += '?embed=children';
        }

        return $http.get(path);
    };

    factory.getChildren = function(parentID) {
        return $http.get(root + '/taxa/' + parentID + '/children');
    }

    factory._unionSettings = function(settings, options) {
        if (typeof options != 'undefined') {
            for (var k in settings) {
                if (typeof options[k] != 'undefined') {
                    settings[k] = options[k];
                }
            }
        }

        return settings;
    }

    return factory;
});