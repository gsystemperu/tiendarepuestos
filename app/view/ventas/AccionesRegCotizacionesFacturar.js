Ext.define('tiendarepuestos.view.ventas.AccionesRegCotizacionesFacturar', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.acciones-regcotizacionfacturar',
    onClickSalirCotizacionFacturar:function(){
      try {
         me =  Ext.ComponentQuery.query('#wContenedorCotizacionesFacturar')[0];    //this;
         l = me.getLayout();
        l.setActiveItem(0);
        Ext.ComponentQuery.query('#frmRegCotizacionFacturar')[0].reset();
      } catch (e) {
        console.log('Ingresar Cotizacion Facturar');
      }
    },
    onClickMantenimiento: function () { _win = Ext.create('tiendarepuestos.view.ventas.Mantenimiento');},
    onClickNuevoCliente:function(){ _win = Ext.create('tiendarepuestos.view.ventas.RegistrarCliente');_win.show(btn, function () {}, this);},
    onClickGuardarCotizacionFacturar:function(){
       _form =  Ext.ComponentQuery.query('#frmRegCotizacionFacturar')[0];
       if (_form.isValid()) {

            _dataDetalle = [];
            _store = this.lookupReference('dgvDetalleVentaFacturar').getStore();
           me = this;
           _store.each(function (record) {
               if (record.get('cantidad') != 0) {
                   _reg = {
                       "idprod": record.get('idprod'),
                       "cantidad": record.get('cantidad'),
                       "precio": record.get("precio"),
                       "total": record.get("total"),
                       "vencimiento": (record.get("vencimiento")==null? null:  Ext.Date.format(record.get("vencimiento"), 'd/m/Y') )
                   };
                   _dataDetalle.push(_reg);
               }

           });
           _txt1 = Ext.ComponentQuery.query('#txtJsonDetalleFacturacion');
           _txt1[0].setValue(JSON.stringify(_dataDetalle));
            _view = this.getView();
           _form.submit({
               waitMsg: 'Guardando informacion...',
               success: function (form, action) {
                    me =  Ext.ComponentQuery.query('#wContenedorCotizacionesFacturar')[0];    //this;
                    l = me.getLayout();
                   l.setActiveItem(0);
                   _dgv = Ext.ComponentQuery.query('#dgvVentasFacturar')[0];
                   _dgv.getStore().reload();

               },
               failure: function () {
                   Ext.Msg.alert("Aviso", action.result.msg);
                   _view.close();
               }
           });
       } else {
           tiendarepuestos.util.Util.showErrorMsg('Ingresar los datos para la facturacion!');
       }
    },
    onClickEliminarcotizacionFacturar:function(button, event, eOpts){
       rec = button.getWidgetRecord();
      me = this;
      //if(rec.get('estado')==3){ tiendarepuestos.util.Util.showErrorMsg('No se puede anular esta factura!'); return false; }
      Ext.MessageBox.confirm('Aviso','Desea eliminar el producto ?',function(btn){
        if(btn=='yes'){
          if (rec) {
              Ext.Ajax.request({
                 url :tiendarepuestos.util.Rutas.facturacionAnular,
                 params:{
                   idfacturacion : rec.get('idfacturacion'),
                   idcotizacion   : rec.get('idcoti')
                 },
                 success:function(response){
                    data = Ext.JSON.decode(response.responseText);
                   Ext.each(data,function(r){
                     if(r.error != 0)
                         Ext.ComponentQuery.query('#dgvVentasFacturar')[0].getStore().reload();
                  });
                 }
             });
          }
        }
      });
    },
    onClickVerCotizacionFactura:function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts){
    
      try {
        if (record)
        {
          me =  Ext.ComponentQuery.query('#wContenedorCotizacionesFacturar')[0];    //this;
          l = me.getLayout();
          l.setActiveItem(3);
          Ext.ComponentQuery.query('#frmVisualizarCotizacionFacturar')[0].reset();
          Ext.ComponentQuery.query('#frmVisualizarCotizacionFacturar')[0].loadRecord(record);
          Ext.ComponentQuery.query('#dgvDetalleVentaFacturarVisualizar')[0].getStore().removeAll();
          Ext.ComponentQuery.query('#wContenedorCotizacionesFacturar')[0].mask('..... Cargando');
         
          switch (record.get('estado')) {
            
              case 1: u=tiendarepuestos.util.Rutas.facturacionDetalle; break;
              case 3: u=tiendarepuestos.util.Rutas.cotizacionDetalle; break;
              case 5: u=tiendarepuestos.util.Rutas.facturacionDetalle; break;
              case 7: u=tiendarepuestos.util.Rutas.facturacionDetalle; break;
          }
          switch (record.get('estado')) {
              case 1: v = record.get('idfacturacion');break;
              case 3: v = record.get('idcoti');break;
              case 5: v = record.get('idfacturacion');break;
              case 7: v = record.get('idfacturacion');break;
                
          }
          Ext.Ajax.request({
              //url :(record.get('estado')!=3?tiendarepuestos.util.Rutas.cotizacionDetalle:tiendarepuestos.util.Rutas.facturacionDetalle),
              url : u,
              params:{
                vIdCotizacion :  v  //(record.get('estado')!=3?record.get('idcoti') : record.get('idfacturacion')) 
              },
              method : 'GET',
              success:function(response){
                _ds = Ext.JSON.decode(response.responseText);
                _t         = 0;
                Ext.each(_ds.data,function(record)
                 {
                    _store         = Ext.ComponentQuery.query('#dgvDetalleVentaFacturarVisualizar')[0].getStore();
                    if(record.descripcion) 
                        p = record.descripcion;
                    else 
                        p = record.producto;
                    
                    _data = {
                            idprod: parseInt(record.id),
                            descripcion  : p,
                            cantidad     :(record.unidadcantidad==0?record.cantidad:0) ,
                            precio       : record.precio,
                            total        : record.total,
                            vencimiento  : record.to_char,
                            presentacion : record.presentacion,
                            unidadcantidad:record.unidadcantidad
                        };
                      _store.insert(0, _data);
                      _t =_t + record.total
                });
                Ext.ComponentQuery.query('#wContenedorCotizacionesFacturar')[0].unmask();
                _s = _t / 1.18;
                _i = _t - (_t / 1.18);
                Ext.ComponentQuery.query('#SubtotalventasfacturacionVi')[0].setValue(_s.toFixed(5));
                Ext.ComponentQuery.query('#igvventasfacturacionVi')[0].setValue(_i.toFixed(5));
                Ext.ComponentQuery.query('#TotalGeneralfacturacionVi')[0].setValue(_t.toFixed(5));
                
              }
          });

            }else{
            Ext.Msg.alert("Aviso","Tiene que seleccionar una cotizacion a facturar!");return false;
            }

        } catch (e) {
            console.log(e);
        }
    },
    onClickIngresarPagoAcuenta:function(btn){
      __rec = btn.getWidgetRecord();
      console.log(__rec);
      Ext.widget('wPagosAcuenta', {
        codigo :__rec.get("idfacturacion"),
        nombre :__rec.get("nomcompleto") ,
        monto  :__rec.get("totalcoti")
      });
    },
    onClickBuscarCotizacionesPorFechas:function(btn){
        __store = Ext.ComponentQuery.query('#dgvVentasFacturar')[0].getStore();

        __store.load({
            params:{
              vDesde : Ext.ComponentQuery.query('#dfDesde')[0].getRawValue(),
              vHasta : Ext.ComponentQuery.query('#dfHasta')[0].getRawValue()
            }
        });

    },
    onSelectedDetalleFacturacionVenta:function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts)
    {
         me = this;
          //if(record.get('idcoti')>0)
          //{
        //     __store = Ext.ComponentQuery.query('#gvVentasFacturarCotizacion')[0].getStore();
        //     __store.load({
        //        params :{
        //          vIdCotizacion: record.get('idcoti')
        //        }
        //      })
              /*__grid = Ext.ComponentQuery.query('#gvVentasFacturarDetalle')[0];
              __grid.reconfigure(__storeCotiDet,[{
                      text: 'Producto',dataIndex: 'descripcion',
                      flex: 2,align: 'left'
                  },
                  {
                      text: 'Presentacion',dataIndex: 'presentacion',
                      flex: 1,align: 'left'
                  },
                  {
                      text: 'Precio',dataIndex: 'precio',
                      flex: 0.5,align: 'right'
                  },
                  {
                      text: 'Cantidad',dataIndex: 'cantidad',
                      flex: 0.5,align: 'right'
                  },
                  {
                      text: 'Total',dataIndex: 'total',
                      flex: 0.5,align: 'right'
                  }
              ]);*/
        //  }
          if(record.get('idfacturacion')>0)
          {
            __store = Ext.ComponentQuery.query('#gvVentasFacturarDetalle')[0].getStore();
            alert("a");
            __store.load({
               params :{
                 idfacturacion: record.get('idfacturacion')
               }
             })

            /*__storeFactDet = Ext.create('tiendarepuestos.store.DetalleFacturacion');

            __grid = Ext.ComponentQuery.query('#gvVentasFacturarDetalle')[0];
            __grid.reconfigure(__storeFactDet,[{
                    text: 'Producto',dataIndex: 'producto',
                    flex: 2,align: 'left'
                },
                {
                    text: 'Presentacion',dataIndex: 'presentacion',
                    flex: 1,align: 'left'
                },
                {
                    text: 'Precio',dataIndex: 'precio',
                    flex: 0.5,align: 'right'
                },
                {
                    text: 'Cantidad',dataIndex: 'cantidad',
                    flex: 0.5,align: 'right'
                },
                {
                    text: 'Cantidad',dataIndex: 'cantidad',
                    flex: 0.5,align: 'right'
                },
                {
                    text: 'Total',dataIndex: 'total',
                    flex: 0.5,align: 'right'
                }
            ]);

            Ext.Ajax.request({
                url : tiendarepuestos.util.Rutas.facturacionDetalle,
                params:{
                  idfacturacion : record.get('idfacturacion')
                },
                success:function(response){
                    __data = Ext.JSON.decode(response.responseText);

                    __index = 1;
                    Ext.each(__data.data,function(record,index){
                        __dato = {
                            cantidad : record.cantidad,
                            dosis   :  record.dosis,
                            dosiscantidad : record.dosiscantidad,
                            gramos : record.gramos,
                            gramoscantidad : record.gramoscantidad,
                            id  : record.id,
                            kilos : record.kilos,
                            kiloscantidad : record.kiloscantidad,
                            precio  : record.precio,
                            presentacion : record.presentacion,
                            producto : record.producto,
                            total : record.total,
                            vecimiento : record.vencimiento
                        };
                      //  __grid.getStore().insert(__index,__dato);
                        __index ++ ;
                    });

                }
            });*/
          }
    },
    onClickEliminarDetalle: function (button, event, eOpts) {
         grid = this.lookupReference('dgvDetalleVentaFacturar');
         store = grid.getStore();
         rec = button.getWidgetRecord();
        if (rec) {
            store.remove(rec);
            this.onCalcularTotalRegistroCotizacionFacturar(false);
        }
    },
    onSelectedIncluyeIGV: function (obj, newValue, oldValue, eOpts) {
        this.onCalcularTotalRegistroCotizacionFacturar(newValue);
    },
    onEditorCalcularTotalRegistroCotizacionFacturar: function (editor, e) {
         _cant = 0;
         _pre = 0;
        _cant = e.record.get('cantidad');
        _pre = e.record.get('precio');
        _tot = _pre * _cant;
        e.record.set('total', _tot.toFixed(5));
        this.onCalcularTotalRegistroCotizacionFacturar();
    },
    onCalcularTotalRegistroCotizacionFacturar: function () {
        me = this;
        __objChk      = Ext.ComponentQuery.query('#incluyeigvfacturacion')[0];
        __objIgv      = this.lookupReference('igvventasfacturacion');
        __objSubTotal = this.lookupReference('Subtotalventasfacturacion');
        __objTotal    = this.lookupReference('TotalGeneralfacturacion');

         store = Ext.ComponentQuery.query('#dgvDetalleVentaFacturar')[0].getStore();
         _tot = 0;
         _igv = 0;
        store.each(function (record) {
            _tot = _tot + record.get('total');
        });
        s = _tot / 1.18;
        i = _tot -(_tot / 1.18);
        __objSubTotal.setValue(s.toFixed(5));
        __objIgv.setValue(i.toFixed(5));
        __objTotal.setValue(_tot.toFixed(5));
        


    },

});
