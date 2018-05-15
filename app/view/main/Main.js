Ext.define('tiendarepuestos.view.main.Main', {
  extend: 'Ext.container.Viewport',
  layout: 'border',
  alias: 'wMain',
  requires: [
    'tiendarepuestos.view.main.MainController',
    'tiendarepuestos.view.menu.Tree'
  ],
  controller: 'main',
  items: [
    {
      region: 'west',
      collapsible: true,
      titleCollapse :false,
      collapsed:false,
      title: 'Repuestos Angelica ',
      iconCls: 'fa fa-wrench fa-2x' ,
      titleAlign : 'center',
      width: 230,
      layout: {
        type: 'accordion',
        titleCollapse: true,
        animate: true,
        activeOnTop: false,
        fill: false
      },
      listeners:{
        beforecollapse:'onBeforecollapse'
      },
      defaults:{
        titleAlign :'center'
      },
      plugins: 'responsive',
      responsiveConfig: {
        'width < 768 && tall': {
            region: 'south',
          },
        'width >= 768': {
            region: 'west'
        }
      },
      items: [       
      {
        title: 'Configuraciones',
        itemId: 'panMantenimiento',
        iconCls: 'fa fa-gear fa-2x' ,
        
        bodyPadding: 0,
        items: [{
          xtype: 'menutree',
          reference: 'treeMantenimiento', //'treeGestionClientes',
          layout: 'fit',
          rootVisible: true,
          listeners: {
            itemClick: 'onClickOpcionMenu'
          }
        }]


      }, {
        title: 'Control de Almacen',
        itemId: 'panControlAlmacen', //'panGestionCliente',
        iconCls: 'fa fa-dropbox fa-2x',
        bodyPadding: 0,
        items: [{
          xtype: 'menutree',
          reference: 'treeControlAlmacen', //'treeGestionClientes',
          layout: 'fit',
          rootVisible: true,
          listeners: {
            itemClick: 'onClickOpcionMenu'
          }
        }]


      }, 
      {
        title: 'Control de Ventas',
        itemId: 'panControlVentas',
        iconCls: 'fa fa-gift fa-2x',
        //listeners: [{ expand: 'onExpandPanel' }],
        items: [{
          xtype: 'menutree',
          reference: 'treeControlVentas',
          layout: 'fit',
          rootVisible: true,
          listeners: {
            itemClick: 'onClickOpcionMenu'
          }
        }]

      },
      {
        title: 'Manufactura (MRP)',
        itemId: 'panControlMRP',
        iconCls: 'fa fa-university',
        hidden:true,
        //listeners: [{ expand: 'onExpandPanel' }],
        items: [{
          xtype: 'menutree',
          reference: 'treeControlManufactura',
          layout: 'fit',
          rootVisible: true,
          listeners: {
            itemClick: 'onClickOpcionMenu'
          }
        }]

      }, {
        title: 'Importacion de Datos',
        itemId: 'panImportacionDatos',
        iconCls: 'fa fa-server',
        //listeners: [{ expand: 'onExpandPanel' }],
        html: 'Panel content!',
        hidden:true,
      }, {
        title: 'Control de Usuarios',
        itemId: 'panControlUsuarios',
        iconCls: 'fa fa-key fa-2x',
        hidden:false,
        //listeners: [{ expand: 'onExpandPanel' }],
        items: [{
          xtype: 'menutree',
          reference: 'treeControlUsuarios',
          layout: 'fit',
          rootVisible: false,
          useArrows: true,
        }]
      },
      {
        title: 'Soporte',
        itemId: 'panAcercaDe',
        iconCls: 'fa fa-cube fa-2x',
        //listeners: [{ expand: 'onExpandPanel' }],
        layout:'vbox',
        bodyPadding : 5,
        items: [
          {
            xtype  :'image',
            src    : 'resources/images/lgsis.png',
            width  : 100,
            height : 30,
          },
          {
            xtype  :'label',
            text : 'Ing. : Eddy Erazo'
          },
          {
            xtype  :'label',
            text : 'Telefono : 925 183 347'
          },
          {
            xtype  :'label',
            text : 'Ing. : Daniel Garibay'
          },
          {
            xtype  :'label',
            text : 'Telefono : 959 355 747'
          }
        
        ]
      },
    
    ]

    }, {
      region: 'center',
      padding: 5,
      reference: 'tabPrincipal',
      defaults: {bodyPadding: 0},
      scrollable: true,
      layout:'fit',
      items: [
        {
          title: 'Nosotros',
          bodyPadding:200,
          //layout:'fit',
          layout:'vbox',
          items:[
            {
              xtype  :'image',
              src    : 'resources/images/lgsis.png',
              width  : 300,
              height : 80,
            },
            {
              xtype  :'label',
              text   : '       Asesoria en tecnologíca para tu negocio       '
            },
           /* {
              xtype  :'label',
              text : 'Direccion : Urb. Santo Domingo Mz. D Lote 5'
            },*/
            {
              xtype  :'label',
              text : 'Ing. : Eddy Erazo'
            },
            {
              xtype  :'label',
              text : 'Telefono : 925 183 347'
            },
            {
              xtype  :'label',
              text : 'Ing. : Daniel Garibay'
            },
            {
              xtype  :'label',
              text : 'Telefono : 959 355 747'
            }
          ]
      }]
    }
  ]

});
