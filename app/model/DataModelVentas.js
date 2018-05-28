Ext.define('tiendarepuestos.model.DataModelVentas', {extend: 'Ext.data.Model',fields: [{ name: 'id', type: 'int' }]});

// @Model : Producto
Ext.define('tiendarepuestos.model.ProductoPorCliente', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'codigobarras', type: 'string' },
        { name: 'codigoproducto', type: 'string' },
        { name: 'nombre', type: 'string' },
        { name: 'precioprod', type: 'float' },
        { name: 'idunidadmedida', type: 'int' },
        { name: 'unidadmedida', type: 'string' },
        { name: 'presentacion', type: 'string' },
        { name: 'existencias', type: 'float' },
        { name: 'stock_dosis', type: 'float' },
        { name: 'stock_kilos', type: 'float' },
        { name: 'stock_gramos', type: 'float' }
    ]
});

// @Model : Cliente
Ext.define('tiendarepuestos.model.Cliente', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idper', type: 'int' },
        { name: 'paternoper', type: 'string' },
        { name: 'maternoper', type: 'string' },
        { name: 'nombreper', type: 'string' },
        { name: 'sexoper', type: 'string' },
        { name: 'fnaciper', type: 'string' },
        { name: 'iddocidentidad', type: 'int' },
        { name: 'descripcion', type: 'string' },
        { name: 'numdocper', type: 'string' },
        { name: 'numrucper', type: 'string' },
        { name: 'domiciper', type: 'string' },
        { name: 'telefper', type: 'string' },
        { name: 'celper', type: 'string' },
        { name: 'idestado', type: 'int' },
        { name: 'nomcompleto', type: 'string' },
        { name: 'correoper', type: 'string' },
        { name: 'provinciaper', type: 'string' },
        { name: 'tipoprecioper', type: 'int' },
        { name: 'cotizaciones', type: 'int' },
        { name: 'ventas', type: 'int' }


    ]
});

// @Model Tipo Documento

Ext.define('tiendarepuestos.model.TipoDocumento', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idtipdoc', type: 'int' },
        { name: 'descripcion', type: 'string' },
    ]
});

// @Model Tipo Documento de Venta

Ext.define('tiendarepuestos.model.TipoDocumentoVenta', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'descripcion', type: 'string' },
    ]
});

// @Model Listado de Cotizaciones

Ext.define('tiendarepuestos.model.Cotizacion', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'vid', type: 'int' },//idcoti
        { name: 'tidcoti', type: 'string' },
        { name: 'vfecha', type: 'string' }, //fechacoti
        { name: 'idper', type: 'int' },
        { name: 'nomcompleto', type: 'string' },
        { name: 'estado', type: 'int' },
        { name: 'descripcion', type: 'string' },
        { name: 'valigvcont', type: 'float' },
        { name: 'valtotalcont', type: 'float' },
        //{ name: 'valtotalcont', type: 'float' },
        { name: 'valtotalcont' },
        { name : 'numdocper',type:'string'},
        { name : 'numrucper',type:'string'},
        { name : 'domiciper',type:'string'},
        { name : 'vendedor',type:'string'},
        { name : 'referencia',type:'string'},
        { name : 'vformapago',type:'int'},
        { name : 'vmodoentrega',type:'int'},
        { name : 'incluyeigv',type:'boolean'},
        { name : 'fechavalidohasta',type:'string'},
        { name : 'comentario',type:'string'},
        { name : 'idmoneda',type:'integer'}
    ]
});

// @Model Listado de Cotizacion Detalle

Ext.define('tiendarepuestos.model.CotizacionDetalle', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'ctcodigo', type: 'string' },
        { name: 'idcoti', type: 'int' },
        { name: 'item', type: 'int' },
        { name: 'descripcion', type: 'string' },
        { name: 'idpresentacion', type: 'int' },
        { name: 'presentacion', type: 'string' },
       // { name: 'precio', type: 'float' },
       { name: 'precio' },
        { name: 'cantidad', type: 'int' },
        //{ name: 'total', type: 'float' },
        { name: 'total' },
        { name: 'vecimiento', type: 'date' },
        { name: 'idprod', type: 'int' },

    ]
});



// @Model Forma de Pago

Ext.define('tiendarepuestos.model.FormaPago', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idfopag', type: 'int' },
        { name: 'descripcion', type: 'string' }

    ]
});



// @Model Modo de Entrega

Ext.define('tiendarepuestos.model.ModoEntrega', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idmodo', type: 'int' },
        { name: 'item', type: 'int' }

    ]
});

// @Model Vendedor

Ext.define('tiendarepuestos.model.Vendedor', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idvend', type: 'int' },
        { name: 'nomvend', type: 'string' },
        { name: 'apevend', type: 'string' },
        { name: 'emailvend', type: 'string' },
        { name: 'televend', type: 'string' },
        { name: 'celvend', type: 'string' },
        { name: 'completo', type: 'string' }


    ]
});

// @Model Unidad Medida

Ext.define('tiendarepuestos.model.UnidadMedida', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idumed', type: 'int' },
        { name: 'descripcion', type: 'string' },
        { name: 'abreviatura', type: 'string' }
    ]
});


// @Model Unidad Medida

Ext.define('tiendarepuestos.model.Presentacion', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idpres', type: 'int' },
        { name: 'despres', type: 'string' },
        { name: 'abrepres', type: 'string' }
    ]
});

// @Model Categoria
/*
Ext.define('tiendarepuestos.model.Categoria', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idcate', type: 'int' },
        { name: 'descate', type: 'string' },
        { name: 'abrecate', type: 'string' }
    ]
});*/

// @Model Estadistica Por Producto

Ext.define('tiendarepuestos.model.EstProducto', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idcoti', type: 'string' },
        { name: 'fechacoti', type: 'string' },
        { name: 'idprod', type: 'int' },
        { name: 'cantidad', type: 'int' },
        { name: 'precio', type: 'float' },
        { name: 'total', type: 'float' },
        { name: 'idvend', type: 'int' },
        { name: 'vendedor', type: 'string' }
    ]
});


// @Model Listado de Cotizaciones a Facturar

Ext.define('tiendarepuestos.model.CotizacionesFacturar', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'idfacturacion', type: 'int' },
        { name: 'idcoti', type: 'int' },
        { name: 'idcotitxt', type: 'string' },
        { name: 'fechacoti', type: 'string' },
        { name: 'idper', type: 'int' },
        { name: 'nomcompleto', type: 'string' },
        { name: 'estado', type: 'integer' },
        { name: 'domiciper', type: 'string' },
        { name: 'telefper', type: 'string' },
        { name: 'numdocper', type: 'string' },
        { name: 'numrucper', type: 'string' },
        { name: 'estadodesc', type: 'string' },
        { name: 'validohasta', type: 'string' },
        { name: 'totalcoti', type: 'float' },
        { name: 'estadodesc', type: 'string' },
        { name: 'idfopag', type: 'integer' },
        { name: 'idmodo', type: 'integer' },
        { name: 'incluyeigv', type: 'boolean' },
        { name: 'fechafact', type: 'string' },
        { name: 'docinterno', type: 'string' },
        { name: 'tipodoc', type: 'string' },
        { name: 'pagoacuenta', type: 'float' },
        { name: 'saldopagar', type: 'float' },
        { name: 'formapago', type: 'string' },
        { name: 'seriedoc', type: 'string' },
        { name: 'numerodoc', type: 'string' },
        { name: 'idguia', type: 'integer' },
        { name: 'puntopartida', type: 'string' },
        { name: 'puntollegada', type: 'string' },
        { name: 'fechatraslado', type: 'date' },
        { name: 'costominimo', type: 'float' },
        { name: 'razonsocialdestinatario', type: 'string' },
        { name: 'rucdestinatario', type: 'string' },
        { name: 'dnidestinatario', type: 'string' },
        { name: 'marcanumeroplaca', type: 'string' },
        { name: 'numeroconstanciainscripcion', type: 'string' },
        { name: 'numerolicenciaconductor', type: 'string' },
        { name: 'empresatransporterazonsocial', type: 'string' },
        { name: 'empresatransporteruc', type: 'string' },
        { name: 'fechaemision', type: 'date' },
        { name: 'idmotivotranslado', type: 'integer' },
        { name: 'serieguia', type: 'string' },
        { name: 'numeroguia', type: 'string' },
        { name: 'enviarsunat', type: 'boolean' },
        { name: 'estadosunat', type: 'string' },
        { name: 'totalcotianulado', type: 'float' }


    ]
});


// @Model Detalle de Facturacion

Ext.define('tiendarepuestos.model.DetFacturacion', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'integer' },
        { name: 'producto', type: 'string' },
        { name: 'cantidad', type: 'int' },
        { name: 'precio', type: 'float' },
        { name: 'total', type: 'float' },
        { name: 'dosis', type: 'boolean' },
        { name: 'dosiscantidad', type: 'integer' },
        { name: 'kilos', type: 'boolean' },
        { name: 'kiloscantidad', type: 'float' },
        { name: 'gramos', type: 'boolean' },
        { name: 'gramoscantidad', type: 'float' },
        { name: 'vencimiento', type: 'string' },
        { name: 'presentacion', type: 'string' }
    ]
});


// @Model Detalle de ingreso al almacen , muestra todos los ingresos de una orden de compra
Ext.define('tiendarepuestos.model.DetalleIngresoGuiaVista', {
    extend: 'Ext.data.Model',
    fields: [
      {name: "fechaingreso", type:'string' },
      {name: "producto", type:'string' },
      {name: "cantidadsolicitada", type:'float' },
      {name: "cantidadrecibida", type:'float' },
      {name: "fvencimiento",type:'string'}, //, format:'d/m/Y'},
      {name: "preciorecibido", type:'float' },
      {name: "totalrecibido", type:'float' }
    ]
});



// @Model Detalle de ingreso al almacen , muestra todos los ingresos de una orden de compra
Ext.define('tiendarepuestos.model.MotivoTranslado', {
    extend: 'Ext.data.Model',
    fields: [
      {name: "id", type:'int' },
      {name: "descripcion", type:'string' },
    ]
});


// @Model Documentos de venta Asignados a una tienda
Ext.define('tiendarepuestos.model.TiendaDocumentoVentaAsignado', {
    extend: 'Ext.data.Model',
    fields: [
      {name: "id", type:'int' },
      {name: "documentoventa", type:'string' }
    ]
});
// @Model Documentos de venta para asignar una tienda
Ext.define('tiendarepuestos.model.TiendaDocumentoVenta', {
    extend: 'Ext.data.Model',
    fields: [
      {name: "id", type:'int' },
      {name: "documentoventa", type:'string' }
    ]
});



// @Model ticketeras de venta Asignados a una tienda
Ext.define('tiendarepuestos.model.TiendaTicketeraAsignada', {
    extend: 'Ext.data.Model',
    fields: [
      {name: "id", type:'int' },
      {name: "ticketera", type:'string' }
    ]
});
// @Model ticketeras de venta para asignar una tienda
Ext.define('tiendarepuestos.model.TiendaTicketera', {
    extend: 'Ext.data.Model',
    fields: [
      {name: "id", type:'int' },
      {name: "ticketera", type:'string' }
    ]
});

// @Model de los metodos de pago
Ext.define('tiendarepuestos.model.MetodoPago', {
    extend: 'Ext.data.Model',
    fields: [
      {name: "id", type:'int' },
      {name: "descripcion", type:'string' },
    ]
});
