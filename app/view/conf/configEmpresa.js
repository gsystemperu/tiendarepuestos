Ext.define('tiendarepuestos.view.conf.configEmpresa', {
    extend: 'Ext.form.Panel',
    alias: 'widget.wRegEmpresa',
    xtype: 'wRegEmpresa',
    itemId: 'wRegEmpresa',
    requires: [
      'Ext.form.field.*',
      'tiendarepuestos.util.Rutas',
      'tiendarepuestos.view.conf.configEmpresaController'
    ],
    margin: 30,
    autoScroll: true,
    controller: 'acciones-empresa',
    url: tiendarepuestos.util.Rutas.actualizarEmpresa,
    layout: {
      type: 'vbox',
      pack: 'start',
      align: 'stretch'
    },
    initComponent: function () {
      me = this;
      Ext.apply(me, {
        items: me.getFormularioEmpresa(),
        bbar: [
          '->',
          {
            xtype: 'button',
            text: 'Cancelar',
            scale: 'medium',
            handler: 'onClickCancelarEmpresa'
          },
          {
            xtype: 'button',
            text: 'Grabar',
            scale: 'medium',
            handler: 'onClickGuardarEmpresa'
          }
  
        ]
      });
      me.callParent(arguments);
      me.getCargarDatosEmpresa();
      
    },
    getCargarDatosEmpresa:function(){
        Ext.Ajax.request({
            url: tiendarepuestos.util.Rutas.empresaDatos, 
            success: function(response){
                ob = Ext.JSON.decode(response.responseText).data[0];
                Ext.ComponentQuery.query('hiddenfield[name=id]')[0].setValue(ob.id);
                Ext.ComponentQuery.query('textfield[name=razonsocial]')[0].setValue(ob.razonsocial);
                Ext.ComponentQuery.query('textfield[name=ruc]')[0].setValue(ob.ruc);
                Ext.ComponentQuery.query('textarea[name=direccion]')[0].setValue(ob.direccion);
                Ext.ComponentQuery.query('textfield[name=lema]')[0].setValue(ob.lema);
                Ext.ComponentQuery.query('textfield[name=correo]')[0].setValue(ob.correo);
                Ext.ComponentQuery.query('textfield[name=telefono]')[0].setValue(ob.telefono);
            }
         });
         return true;
    },
    getFormularioEmpresa: function () {
      s = Ext.create('tiendarepuestos.store.Series');
      t = Ext.create('tiendarepuestos.store.Ticketeras');
      i = Ext.create('tiendarepuestos.store.Tiendas');
      d = Ext.create('tiendarepuestos.store.DocumentoVenta');
      var obj = [
    
        {
          xtype  : 'hiddenfield',
          name   : 'id',
          value: 0
        },
        {
          xtype: 'hiddenfield',
          name: 'jsondetalle',
          reference: 'jsondetalle'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Razón Social',
          name: 'razonsocial',
          allowBlank: false,
          fieldStyle: 'font-size:25px;text-transform: uppercase;background-color:#E1E1E1;border:false;'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'R.U.C',
            name: 'ruc',
            allowBlank: false,
            
        },
        {
            xtype: 'textarea',
            fieldLabel: 'Dirección',
            name: 'direccion',
            allowBlank: true,
           
        },
        {
          xtype: 'container',
          layout: {
            type: 'hbox',
            aling: 'stretch'
          },
          hidden: false,
          padding: '0 0 10 0',
          defaultType:'textfield',
          items: [
              {
                    fieldLabel: 'Lema',
                    name: 'lema',
                    allowBlank: true,
                    flex: 1
                },
                {
                    fieldLabel: 'Correo',
                    name: 'correo',
                    type:'mail',
                    allowBlank: true,
                    flex: 1,
                    labelAlign:'right'
                },
                {
                    fieldLabel: 'Telefono',
                    name: 'telefono',
                    allowBlank: true,
                    flex: 1,
                    labelAlign:'right'
                },
           
          ]
        },
       {
            xtype: 'tabpanel',
            itemId: 'tabDetalleEmpresa',
            height: 300,
            activeItem: 1,
            items: [

                {
                    title: '..:: Tiendas ::..',
                    layout: 'fit',
                    tbar: [
                      {
                        xtype: 'button',
                        text: 'Nuevo',
                        handler: 'onClickNuevaTienda'
                      },
                      '->',
                      {
                        xtype: 'button',
                        text: 'Boleta',
                        glyph: 0xf0f6,
                        handler: 'onClickNuevaBoleta'
                      },
                      {
                        xtype: 'button',
                        text: 'Factura',
                        glyph: 0xf0f6,
                        handler: 'onClickNuevaFactura'
                      },
                      {
                        xtype: 'button',
                        text: 'Guia Remision',
                        glyph: 0xf0f6,
                        handler: 'onClickNuevaBoleta'
                      },
                      {
                        xtype: 'button',
                        text: 'Ticketera',
                        glyph: 0xf0f6,
                        handler: 'onClickNuevaTicketera'
                      },
                     
                    ],
                    items: [{
                      xtype: 'gridpanel',
                      store: i,
                      reference: 'dgvTiendas',
                      selModel: 'rowmodel',
                      plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                      },
                      columns: [
                        {
                          text: 'Dirección',
                          dataIndex: 'direccion',
                          flex: 2,
                          editor:{
                              xtype:'textfield'
                          }

                        },
                        {
                            text: 'Telefono',
                            dataIndex: 'telefono',
                            flex: 1,
                            editor:{
                                xtype:'textfield'
                            }
                        },
                        {
                            text: 'Celular',
                            dataIndex: 'celular',
                            flex: 1,
                            editor:{
                                xtype:'textfield'
                            }
                        },
                        {
                          xtype: 'widgetcolumn',
                          flex: 0.5,
                          widget: {
                            xtype: 'button',
                            flex: 1,
                            glyph: 0xf014,
                            handler: 'onClickEliminarTienda'
        
                          }
        
                        }
                      ],
                    }]
                  },
                  {
                    title: '..:: Doc. Internos ::..',
                    layout: 'fit',
                    tbar: [{
                        xtype: 'button',
                        text: 'Nuevo',
                        handler: 'onClickNuevoDocInterno'
                      },
                     
                    ],
                    items: [{
                      xtype: 'gridpanel',
                      store: s,
                      reference: 'dgvDocInternos',
                      selModel: 'rowmodel',
                      plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                      },
                      columns: [
                        {
                          text : 'Tipo',
                          dataIndex: 'documento',
                          flex :1,
                          editor:{
                              xtype:'combo',
                              store : d, 
                              valueField:'descripcion',
                              displayField:'descripcion'
                          }
                      },
                       {
                            text : 'Serie',
                            dataIndex: 'serie',
                            flex :1,
                            editor:{ xtype:'textfield'}
                            
                        },
                        {
                          text : 'Número',
                          dataIndex: 'numero',
                          flex :1,
                          editor:{ xtype:'numberfield'}
                        },
                        {
                          xtype: 'widgetcolumn',
                          flex: 0.5,
                          widget: {
                            xtype: 'button',
                            flex: 0.5,
                            glyph: 0xf014,
                            handler: 'onClickEliminarSerie'
                          }
                        }
                      ]
                    }]
                  },
                  {
                    title: '..:: Ticketeras ::..',
                    layout: 'fit',
                    tbar: [{
                        xtype: 'button',
                        text: 'Nuevo',
                        handler: 'onClickNuevaTicketera'
                      },
                     
                    ],
                    items: [{
                      xtype: 'gridpanel',
                      store: t,
                      reference: 'dgvTicketera',
                      selModel: 'rowmodel',
                      plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                      },
                      columns: [
                        {
                          text : 'Descripción',
                          dataIndex: 'descripcion',
                          flex :1.5,
                          editor:{
                              xtype:'textfield',
                              
                          }
                      },
                        {
                          text : 'Codigo',
                          dataIndex: 'codigo',
                          flex :1,
                          editor:{
                              xtype:'textfield',
                              
                          }
                      },
                       {
                            text : 'Serie',
                            dataIndex: 'serie',
                            flex :1,
                            editor:{
                              xtype:'textfield'
                            }
                        },
                        {
                          text : 'Autorizacion Sunat',
                          dataIndex: 'autorizacionsunat',
                          flex :1,
                          editor:{
                            xtype:'textfield'
                          }
                        },
                        {
                          text : 'Número',
                          dataIndex: 'numero',
                          flex :1,
                          editor:{
                            xtype:'numberfield'
                          }
                        },
                        {
                          xtype: 'widgetcolumn',
                          flex: 0.5,
                          widget: {
                            xtype: 'button',
                            flex: 0.5,
                            glyph: 0xf014,
                            handler: 'onClickEliminarTicketera'
                          }
                        }
                      ]
                    }]
                  }
            ]
        }
      ];
      return obj;
    }
  
  
  
  });