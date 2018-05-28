Ext.define('tiendarepuestos.view.conf.configEmpresaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.acciones-empresa',
    requires: ['tiendarepuestos.util.Rutas'],

    //@Acciones
    init:function(){},
    onClickNuevaTienda: function (btn) {
      r = Ext.create('tiendarepuestos.model.Tienda');
      d = this.lookupReference('dgvTiendas').getStore();
      d.add(r);
    },
    onClickNuevoDocInterno: function (btn) {
      r = Ext.create('tiendarepuestos.model.Serie');
      d = this.lookupReference('dgvDocInternos').getStore();
      d.add(r);
    },
    onClickNuevaTicketera: function (btn) {
      r = Ext.create('tiendarepuestos.model.Ticketera');
      d = this.lookupReference('dgvTicketera').getStore();
      d.add(r);
    },
    onClickEliminarTienda: function (btn) {
      r = btn.getWidgetRecord();
      d = this.lookupReference('dgvTiendas').getStore();
      data = {
        idtienda : r.get('id')
      };
      if(Ext.isNumber(r.get('id')))
          tiendarepuestos.util.Util.ajax(tiendarepuestos.util.Rutas.tiendaEliminar,data,d)
      else
          d.remove(r);

    },
    onClickEliminarSerie:function(btn){
      r = btn.getWidgetRecord();
      d = this.lookupReference('dgvDocInternos').getStore();
      data = {
        idserie : r.get('id')
      };
      if(Ext.isNumber(r.get('id')))
          tiendarepuestos.util.Util.ajax(tiendarepuestos.util.Rutas.serieEliminar,data,d)
      else
          d.remove(r);
    },
    onClickEliminarTicketera:function(btn){
      r = btn.getWidgetRecord();
      d = this.lookupReference('dgvTicketera').getStore();
      data = {
        idticketera : r.get('id')
      };
      if(Ext.isNumber(r.get('id')))
          tiendarepuestos.util.Util.ajax(tiendarepuestos.util.Rutas.ticketeraEliminar,data,d)
      else
          d.remove(r);
    },
    onClickGuardarEmpresa: function (btn) {
      d = this.lookupReference('dgvTiendas').getStore();
      f = Ext.ComponentQuery.query('#wRegEmpresa')[0];
      ca = d.getCount();
      rs = [];
      w = 0
      for (i = 0; i < ca; i++) {
        r = d.getAt(i);
        //if(r.modified){ w= 1 ;}
        da = {
          xid: ( Ext.isNumeric(r.get('id')) == true ? r.get('id') : 0),
          xdireccion:r.get('direccion'),
          xtelefono:r.get('telefono'),
          celular: r.get('celular')
        };

        rs.push(da);
      }
      this.lookupReference('tiendas').setValue(JSON.stringify(rs));

      di  = this.lookupReference('dgvDocInternos').getStore();
      cdi = di.getCount();
      rs  = [];
      for(i = 0; i< cdi; i++)
      {
        r = di.getAt(i);
        da = {
          "xid": ( Ext.isNumeric(r.get('id')) == true ? r.get('id') : 0),
          "xdoc": r.get('documento'),
          "xserie": r.get('serie'),
          "xnumero": r.get('numero')
        }
        rs.push(da);
      }
      this.lookupReference('documentos').setValue(JSON.stringify(rs));

      dt  = this.lookupReference('dgvTicketera').getStore();
      cdi = dt.getCount();
      rs  = [];
      for(i = 0; i< cdi; i++)
      {
        r = dt.getAt(i);
        da = {
          "xid": ( Ext.isNumeric(r.get('id')) == true ? r.get('id') : 0),
          "xdescripcion": r.get('descripcion'),
          "xcodigo": r.get('codigo'),
          "xserie": r.get('serie'),
          "xautorizacionsunat": r.get('autorizacionsunat'),
          "xnumero": r.get('numero')
        }
        rs.push(da);
      }
      this.lookupReference('ticketeras').setValue(JSON.stringify(rs));

      me = this;
      if (f.isValid()) {
        f.submit({
          waitMsg: 'Guardando informacion...',
          success: function (form, action) {
             if(action.result.error!=0){
                        try {
                            d.reload();
                            dt.reload();
                            di.reload();
                      } catch (e) {console.log(e);return false;}
              }
          },
          failure: function () {
            Ext.Msg.alert("Aviso", "Error en guardar la información");
          }
        });
      }

    },
    onClickCancelarEmpresa:function(btn){
       Ext.ComponentQuery.query('#wRegEmpresa')[1].close();
    },
    onClickNuevaBoleta:function(b){
      o=Ext.ComponentQuery.query('#dgvTiendas')[0];
      r=o.getSelectionModel().getSelection()[0];
      if(r){
        tiendarepuestos.util.
        Util.crearWindowOpenMantenimiento('Asignar Documento Interno',300,450,o.getStore(),'wnuevaboleta',r.get('id'));
      }
    },
    onClickNuevaTicketera:function(b){
      o=Ext.ComponentQuery.query('#dgvTiendas')[0];
      r=o.getSelectionModel().getSelection()[0];
      if(r){
        tiendarepuestos.util.
        Util.crearWindowOpenMantenimiento('Asignar Ticketera',300,650,o.getStore(),'wnuevaticketera',r.get('id'));
      }
    }

  });
