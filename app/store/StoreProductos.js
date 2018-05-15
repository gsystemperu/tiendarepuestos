Ext.define('tiendarepuestos.store.StoreProductos', {extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }});

/*
@DataSet :
Stores para las operaciones de Producto
==============================================================
*/
Ext.define('tiendarepuestos.store.Productos', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Producto',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams :{
      nombre : '',
      tipoproducto : 0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/*
@DataSet :
Stores para listar los productos para las ordenes de compra
==============================================================
*/
Ext.define('tiendarepuestos.store.ProductosOrdenCompra', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Producto',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams :{
        idprov : 0,
        nombre : ''
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_listar_oc'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


/*
@DataSet :
Stores para visualizar las series de cada producto por lote y guia
==============================================================
*/
Ext.define('tiendarepuestos.store.ProductoExistencias', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.ProductoExistencia',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_existencias'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/*
@DataSet :
@Descripcion : 
DataSet para los registros de los inventarios
==============================================================
*/
Ext.define('tiendarepuestos.store.InventarioRegistros', {
    extend  : 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.InventarioRegistro',
    autoLoad: true,
    remoteSort: true,
    autoSync  : false,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_inventario_registros'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/*
@DataSet :
==============================================================
*/
Ext.define('tiendarepuestos.store.ProductoInventarioLista', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.ProductoInventario',
    autoLoad: false,
    remoteSort: true,
    autoSync  : false,
    extraParams :{ idinventario : 0 },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/producto_inventario_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

