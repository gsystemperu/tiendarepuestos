Ext.define('tiendarepuestos.store.tree.ControlAlmacen', {
  extend: 'Ext.data.TreeStore',
  root: {
    expanded: true,
    children: [
      {
        text: 'Almacenes',
        leaf: true,
        itemId: "wRegAlmacen",
        titulo: "Registro Almacenes",
        glyph: 'xf16b'
      }, {
        text: 'Productos',
        leaf: true,
        itemId: "wContenedorProducto",
        titulo: "Registro Productos",
        glyph: 'xf16b'
      },
      {
        text: 'Proveedores',
        leaf: true,
        itemId: "wRegProveedores",
        titulo: "Proveedores",
        glyph: 'xf16b'
      },
      /*{
        text: 'Ingreso Mercaderia',
        leaf: true,
        itemId: "wReglasAbastecimiento",
        titulo: "Abastecimiento"
      },*/
      {
        text: 'Ingreso Mercaderia',
        expanded: true,
        //leaf : true,
         titulo : '',
         children: [
          {
            text: 'Orden Compra',
            leaf: true,
            itemId: "wContenedorOrdenCompra",
            titulo: "Orden Compra",
            glyph: 'xf16b'
          },
          {
            text: 'Guias Entrada',
            leaf: true,
            itemId: "wContenedorGuias",
            titulo: "Guia Entrada",
            glyph: 'xf16b'
          }
        ]
      },
      {
        text: 'Administración',
        expanded: true,
        //leaf : true,
         titulo : '',
         children: [
          {
            text: 'Inventarios',
            leaf: true,
            itemId: "wContenedorInventario",
            titulo: "Ajsute Inventario",
            glyph: 'xf16b'
          }
        
        ]
      },
      /*{
        text: 'Reportes',
        expanded: true,
        //leaf : true,
         titulo : '',
         children: [
          {
            text: 'Stock',
            leaf: true,
            //itemId: "wContenedorOrdenCompra",
            titulo: "Stock",
            glyph: 'xf16b'
          }
        
        ]
      },*/


    ]


  }
});
