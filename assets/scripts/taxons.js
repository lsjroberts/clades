var render = {
    taxons: {
        redraw: function() {
            setTimeout(function() {
                var taxons = $('.taxon').get(),
                    tree = {};

                for (t in taxons) {
                    var taxon = $(taxons[t]),
                        parentID = parseInt(taxon.attr('data-parentID'));

                    if (isNaN(parentID)) {
                        parentID = 0;
                    }

                    if (!(parentID in tree)) {
                        tree[parentID] = [];
                    }

                    tree[parentID].push(taxon);
                }

                console.log(tree);
            }, 1);
        },
    },
};