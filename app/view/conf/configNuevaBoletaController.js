Ext.define('tiendarepuestos.view.conf.configNuevaBoletaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.acciones-documentos',
    requires: ['tiendarepuestos.util.Rutas'],

    //@Acciones
    init:function(){},
    onClickAgregar:function(b){
      r = Ext.create('tiendarepuestos.model.TiendaDocumentoVentaAsignado');
      d = this.lookupReference('dgvBoleta').getStore();
      d.add(r);
    },
    onClickEliminar:function(b){
      r = b.getWidgetRecord();
      d = this.lookupReference('dgvBoleta').getStore();
      data = {
        id : r.get('id')
      };
      if(Ext.isNumber(r.get('id')))
          tiendarepuestos.util.Util.ajax(tiendarepuestos.util.Rutas.tiendaEliminarDocumentoVenta,data,d)
      else
          d.remove(r);

    },
    onClickGuardar:function(b){
      t=Ext.ComponentQuery.query('window')[1].tienda;
      r=Ext.ComponentQuery.query('window')[1].objeto;
      d=this.lookupReference('dgvBoleta').getStore();

      ca = d.getCount();
      rs = [];
      for (i = 0; i < ca; i++) {
        r = d.getAt(i);
        da = {
          xid: ( Ext.isNumeric(r.get('id')) == true ? r.get('id') : 0),
          xdocumento:r.get('documentoventa'),
          xtienda : t
        };
        rs.push(da);
      }
      data={
        documentos : JSON.stringify(rs)
      };
      tiendarepuestos.util.Util.ajax(tiendarepuestos.util.Rutas.tiendaAsignarDocumentoVenta,data,d);



    }
  });
