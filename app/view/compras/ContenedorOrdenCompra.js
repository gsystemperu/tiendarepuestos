Ext.define('tiendarepuestos.view.compras.ContenedorOrdenCompra', {
  extend: 'Ext.panel.Panel',
  xtype: 'wContenedorOrdenCompra',
  itemId : 'wContenedorOrdenCompra',
  alias: 'widget.wContenedorOrdenCompra',
  reference : 'wContendedorOrdenCompra',
  requires: [
    'Ext.layout.container.Card',
    'tiendarepuestos.view.compras.AccionesContenedorOrdenCompra',
    'tiendarepuestos.view.compras.IngresarOrdenCompra',
    'tiendarepuestos.view.compras.EditarOrdenCompra',
    'tiendarepuestos.util.Rutas'
  ],
  layout: {
    type: 'card',
    align: 'stretch',
    deferredRender: true,
  },
  bodyPadding: 0,
  defaults: {
    bodyPadding: 0,
    border: false
  },
  controller: 'acciones-contenedoordencompra',
  initComponent: function () {
    me = this;
    Ext.apply(this, {
      items: [{
        id: 'ordencompra-0',
        xtype: 'wOrdenCompra'

      }, {
        id: 'ordencompra-1',
        xtype:'wingresarordencompra'
      }
      , {
        id: 'ordencompra-2',
        xtype:'weditarordencompra'
      }
    ],
    tbar: me.getToolBar()
    });
    this.callParent();
  },
  getToolBar:function(){
    return obj = [{
        xtype: 'button',
        text: 'CREAR',
        handler: 'onClickIngresar'
      }, 
      /*{
        xtype: 'button',
        text: 'ACTUALIZAR LISTA',
        handler:'onClickActualizarLista'
      },
      {
        xtype: 'button',
        text: 'IMPRIMIR',
      },
      /*{
        xtype: 'button',
        text: 'ENVIAR CORREO',
      },*/
      {
        xtype:'button',
        text :'CONFIRMAR ORDEN',
        handler:'onClickConfirmarOrdenCompra'
      }

    ];
  }

});
