Ext.define('tiendarepuestos.store.StoreMantenimientos', {extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }});

/* 
@DataSet :
Stores para los mantenimientos de las tablas maestras
==============================================================
*/
Ext.define('tiendarepuestos.store.Estados', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Estado',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/estados_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.Bancos', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Banco',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/bancos_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.Almacenes', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Almacen',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/almacen_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.AlmacenSecciones', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.AlmacenSecciones',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/almacen_secciones_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.Categoria', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Categoria',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/categoria_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.Colores', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Color',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/color_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.Medidas', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Medida',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/medidas_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.TipoDeProductos', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.TipoDeProducto',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/tipo_producto_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.UnidadDeMedidas', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.UnidadDeMedida',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/unidad_medida_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.Tarifas', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Tarifa',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/tarifa_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});



/* 
@DataSet :
Stores para los mantenimientos Tabla Modelo
==============================================================
*/
Ext.define('tiendarepuestos.store.Modelos', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Modelo',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/modelo_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/* 
@DataSet :
Stores para los mantenimientos Tabla Marca
==============================================================
*/
Ext.define('tiendarepuestos.store.Marcas', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Marca',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/marca_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/* 
@DataSet :
Stores para las series de documentos del sistema
==============================================================
*/

Ext.define('tiendarepuestos.store.Series', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Serie',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/series_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/* 
@DataSet :
Stores para las ticketeras del sistema
==============================================================
*/

Ext.define('tiendarepuestos.store.Ticketeras', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Ticketera',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/ticketeras_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


/* 
@DataSet :
Stores tiendas 
==============================================================
*/

Ext.define('tiendarepuestos.store.Tiendas', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModels'],
    model   :'tiendarepuestos.model.Tienda',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/tiendas_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
