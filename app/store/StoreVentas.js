Ext.define('tiendarepuestos.store.StoreVentas', {
    extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }
});

// @DataSet :

Ext.define('tiendarepuestos.store.Clientes', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.Cliente',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idper',direction: 'ASC'}],
    extraParams: { vDocumento: '', vRuc: '', vDatos: ''},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/buscar_cliente'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/*
Ext.define('tiendarepuestos.store.Productos', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.Producto',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    groupField: 'categoria',
    sorters: [{property: 'idprod',direction: 'ASC'}],
    extraParams: { vCodigo: '', vDescripcion: '', vCategoria : null},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/buscar_producto'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});*/

Ext.define('tiendarepuestos.store.ProductosPorPrecioPersona', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.ProductoPorCliente',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    //groupField: 'categoria',
    sorters: [{property: 'idprod',direction: 'ASC'}],
    extraParams: { vCodigo: '', vDescripcion: '', vCategoria : null,vIdCliente:0},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/buscar_producto_por_persona'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.DetalleCotizacion', {
    extend: 'Ext.data.Store',
    fields: [
            {name: "idprod", type:'int' },
            {name: "descripcion", type:'string' },
            {name: "cantidad", type:'int' },
            //{name: "precio", type:'float' },
            {name: "precio"},
            {name: "total", type:'float' }  ,
            {name: "vencimiento",type:'date', format:'d/m/Y'},
            {name: "presentacion", type:'string' },
            {name: "unidadcantidad", type:'float' }
    ],
    proxy: { type: 'memory' }
});

Ext.define('tiendarepuestos.store.TipoDocumentos', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.TipoDocumento',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idtipdoc',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_documentos'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.Cotizaciones', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.Cotizacion',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcoti',direction: 'ASC'}],
    extraParams: {
        vDesde      : '',
        vHasta      : '',
        vPersona    : '',
        vCodigo     : ''
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_cotizaciones'},
        reader: {
            type: 'json',
            rootProperty: 'data',
            //totalProperty: 'totalreg'
        }
    }
});

Ext.define('tiendarepuestos.store.CotizacionesDetalle', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.CotizacionDetalle',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'item',direction: 'ASC'}],
    extraParams: { vIdCotizacion: 0 },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/cotizacion_detalle_vista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.FormaPago', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.FormaPago',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idfopag',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_forma_pago'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.ModoEntrega', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.ModoEntrega',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idmodo',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_modo_entrega'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.Vendedores', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.Vendedor',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idvend',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_vendedores'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.UnidadMedida', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.UnidadMedida',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idumed',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_unidad_medida'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});



Ext.define('tiendarepuestos.store.Presentacion', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.Presentacion',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idpres',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_presentacion'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.Categoria', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.Categoria',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcate',direction: 'ASC'}],
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_categorias'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.CotizacionesEstadistica', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.Cotizacion',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcoti',direction: 'ASC'}],
    extraParams: {
        vDesde: '',
        vHasta: '',
        vPersona : ''
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/estadistica_por_cliente'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.CotizacionesEstadisticaProducto', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.EstProducto',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcoti',direction: 'ASC'}],
    extraParams: {
        vDesde: '',
        vHasta: '',
        vProducto : 0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/estadistica_por_producto'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.CotizacionesEstadisticaVendedor', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.Cotizacion',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    sorters: [{property: 'idcoti',direction: 'ASC'}],
    extraParams: {
        vDesde: '',
        vHasta: '',
        vProducto : 0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/estadistica_por_vendedor'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.CotizacionesDelCliente', {
    extend: 'Ext.data.Store',requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.Cotizacion',
    autoLoad: false,extraParams: {vCodigo : 0},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/buscar_cotizaciones_cliente'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.CotizacionesFacturar', {
    extend: 'Ext.data.Store',requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.CotizacionesFacturar',
    autoLoad: true,
    extraParams: {vDesde : '',vHasta:''},
    groupField: 'fechacoti',
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/cotizaciones_a_facturar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('tiendarepuestos.store.ClienteVentasFacturacion', {
    extend: 'Ext.data.Store',requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.CotizacionesFacturar',
    autoLoad: false,
    extraParams: {idper : 0},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/persona_buscar_ventas'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.DocumentoVenta', {
    extend: 'Ext.data.Store',requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.TipoDocumentoVenta',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/documentos_venta_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});



Ext.define('tiendarepuestos.store.PuntoVentaPagos', {
    extend: 'Ext.data.Store',requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.CotizacionesFacturar',
    autoLoad: false,
    extraParams: {desde : '',hasta:''},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/buscar_punto_venta_pagos'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.DetalleFacturacion', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.DetFacturacion',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams: {idfacturacion:101},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/detalle_facturacion'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('tiendarepuestos.store.NombreMoneda', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModel'],
    model   :'tiendarepuestos.model.NombreMoneda',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_nombre_moneda'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

//@ Store : Muestra los datos de los ingresos de una orden de compra

Ext.define('tiendarepuestos.store.DetalleIngresoGuiaVista', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.DetalleIngresoGuiaVista',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/ordercompra_lista_detalle_ingresos'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


// @ Store : Listado de Motivos de Translado para las guias de remisión

Ext.define('tiendarepuestos.store.MotivosTranslados', {
    extend: 'Ext.data.Store',
    requiere:['tiendarepuestos.model.DataModelVentas'],
    model   :'tiendarepuestos.model.MotivoTranslado',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/listar_motivos_translado'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
