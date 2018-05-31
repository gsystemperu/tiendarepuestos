Ext.define('tiendarepuestos.view.puntoventa.ContenedorMain', {
  extend: 'Ext.panel.Panel',
  xtype: 'wContenedorPuntoVenta',
  itemId : 'wContenedorPuntoVenta',
  reference : 'wContenedorPuntoVenta',
  requires: [
    'Ext.layout.container.Card',
    'tiendarepuestos.view.puntoventa.AccionesContenedorMain',
    'tiendarepuestos.view.puntoventa.Main',
    'tiendarepuestos.view.puntoventa.Pago'
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
  controller :'acciones-contenedormain',
  initComponent: function () {
    me = this;
    Ext.apply(this, {
      items: [{
        id: 'pdv-0',
        xtype: 'wPdv'
      },
      {
        id : 'pdv-1',
        xtype:'wPuntoVentaPago'
      },
      {
        id : 'pdv-2',
        xtype:'wListadoPdv'
      }

    ],
    tbar: me.getBotonesERP()

    });
    this.callParent();
  },
  getBotonesERP:function(){
    sc  = Ext.create('tiendarepuestos.store.Clientes');
    return obj = [
      {
        xtype:'combo',
        flex: 2.9,
        fieldStyle : 'font-size:18px;font-weight:bold; text-transform:uppercase;',
        store  :sc,
        valueField : 'idper',
        displayField : 'nombreper',
        queryMode : 'local',
        itemId :'cboCliente',
        editable:true,
        allowBlank:false,
        emptyText: 'SELECCIONAR AL CLIENTE',
        listeners:{
          'select' : 'onSelectCliente'
        }
        
      },
      {
        xtype:'button',
        itemId : 'btnNuevoClientePdv',
        glyph: tiendarepuestos.util.Glyphs.getGlyph('nuevo'),
        combo : 'cboCliente',
        flex: 0.2,
        handler:'onClickNuevoClientePDV'


      },
      '->',
      {
        text : 'APERTURAR',
        itemId:'btnAperturar',
        scale : 'medium',
        handler:'onClickApeturarCaja'
      },
      {
        text : 'REGRESAR',
        itemId:'btnRegresar',
        scale : 'medium',
        handler:'onClickRegresarPago'
      },
       {
         text : 'PAGO',
         itemId:'btnVentasPdv',
         scale : 'medium',
         handler:'onClickIngresarPago'
       },
       {
         text : 'LISTADO VENTAS',
         itemId:'btnListadoVentasPdv',
         scale : 'medium',
         handler:'onClickListadoVentaPdv'
       },


    ];
  },


});
