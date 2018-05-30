Ext.define('tiendarepuestos.view.puntoventa.Listado',{
    extend: 'Ext.panel.Panel',
    xtype :'wListadoProducto',
    alias : 'wListadoProducto',
    requires: [
        'tiendarepuestos.view.puntoventa.ListadoController',
        'Ext.toolbar.TextItem',
        'Ext.view.View',
        'Ext.ux.DataView.Animated'
    ],
    controller: 'puntoventa-listado',
    bodyPadding:1,
    layout:'fit',
    initComponent:function(){
        me = this;
        __storeProducto     = Ext.create('tiendarepuestos.store.Productos');
       
         Ext.apply(this,{
             items:[{
                   xtype: 'dataview',
                   layout:'fit',
                   autoScroll :true,
                   itemId : 'dvListaProductos',
                    tpl: [
                        '<tpl for=".">',
                            '<div class="cuarto">',
                                          '<table style="width:100%;" border="0" CELLPADDING="0" CELLSPACING="0">',
                                            '<tpl if="sevendepordosis &gt;=true"> ',
                                                 '<tr>',
                                                     '<td  align="right" class="productoprecio">Precio : S./ {precioventa} <br> Stock Dosis :{stock_dosis} <br> A Mano :{existencias} </strong><br></td>',
                                                 '</tr>',
                                                 '<tr>',
                                                     '<td class="productonombre">{nombre}</td>',
                                                 '</tr>',
                                            '</tpl>',

                                            '<tpl if="ventagramos &gt;=true"> ',
                                                 '<tr>',
                                                     '<td  align="right" class="productoprecio">S./ {precioventa} <br> Stock Gramos : {stock_gramos}  <br> A Mano : {existencias}</strong><br></td>',
                                                 '</tr>',
                                                 '<tr>',
                                                     '<td class="productonombre">{nombre}</td>',
                                                 '</tr>',
                                            '</tpl>',

                                            '<tpl if="ventakilos &gt;=true"> ',
                                                 '<tr>',
                                                     '<td  align="right" class="productoprecio">S./ {precioventa} <br> Stock Kilos : {stock_kilos}  <br> A Mano : {existencias}</strong><br></td>',
                                                 '</tr>',
                                                 '<tr>',
                                                     '<td class="productonombre">{nombre}</td>',
                                                 '</tr>',
                                            '</tpl>',
                                            '<tpl if="ventakilos==false && ventagramos ==false && sevendepordosis ==false ">',
                                                  '<tr>',
                                                      '<td  align="left" class="productoprecio">Precio Venta : S./        {precioventa} <br> Precio Unidad : S/.        {preciounidad}  <br> A Mano :    (  {existencias} )</strong><br></td>',
                                                  '</tr>',
                                                  '<tr>',
                                                      '<td class="productonombre">{nombre}</td>',
                                                  '</tr>',
                                            '</tpl>',

                                        '</table>',
                            '</div>',
                        '</tpl>'
                    ],
                    plugins: {
                        xclass: 'Ext.ux.DataView.Animated'
                    },
                    multiSelect:true,
                    store:__storeProducto,
                    trackOver: true,
                    overItemCls: 'x-item-over',
                    itemSelector: 'div.cuarto',
                    emptyText: ' ',
                    listeners:{ itemclick :'accionClickItem'}
                }
             ],
             tbar:[
                {
                    xtype:'label',
                    text :'Producto',
                    padding: '5px 0 0 0',
                    border: true,
                    width: 110,
                    height: 25,
                    style: {
                        background: '#6a4b5a',
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '13px'
                    }
                },
                {
                  xtype: 'textfield',
                  reference: 'txtBuscarCodigoProd',
                  itemId: 'txtBuscarCodigoProd',
                  flex: 1,
                  enableKeyEvents: true,
                  listeners:{
                    keyup:'onKeyUpBuscarProducto'
                  }
                } 
             ]
         });
        this.callParent(arguments);

    },

});
