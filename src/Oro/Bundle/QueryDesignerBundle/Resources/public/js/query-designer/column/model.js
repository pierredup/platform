/* global define */
define(['backbone'],
function(Backbone) {
    'use strict';

    /**
     * @export  oro/query-designer/column/model
     * @class   oro.queryDesigner.column.Model
     * @extends Backbone.Model
     */
    return Backbone.Model.extend({
        defaults: {
            id : 0,
            name : null,
            label: null,
            sorting: null
        }
    });
});
