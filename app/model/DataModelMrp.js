Ext.define('tiendarepuestos.model.DataModelMrp', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }]
});

// @Model : Listado de Materiales
Ext.define('tiendarepuestos.model.ListaMateriales', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'id',type: 'int'
            },
            {
              name: 'idproducto',
              type: 'integer'
            },
            {
              name: 'producto',
              type: 'string'
            },
            {
              name: 'cantidad',
              type: 'float'
            },
            {
              name: 'idunidadmedida',
              type: 'integer'
            },
            {
              name: 'unidadmedida',
              type: 'string'
            }
    ]
});
