Ext.define('tiendarepuestos.view.puntoventa.ListadoController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.puntoventa-listado',
  onKeyUpBuscarProducto: function (obj, e, eOpts) {
    if (e.keyCode == 113) { tiendarepuestos.util.Util.focusControl('txtBuscarCodigoBarrasProd'); }
    if (e.keyCode == 13) {
      _combo = Ext.ComponentQuery.query('#cboCliente')[0].getValue();
      if (_combo == null) { tiendarepuestos.util.Util.showToast('Seleccionar un cliente para buscar sus precios !!'); return false; }
      _store = Ext.ComponentQuery.query('#dvListaProductos')[0].getStore();
      _store.load({
        params: {
          nombre: obj.getValue(),
          idclie: _combo
        }
      });
    }
  },
  onKeyBuscarProductoBarras: function (obj, e, eOpts) {
    if (e.keyCode == 113) { tiendarepuestos.util.Util.focusControl('txtBuscarCodigoProd'); }
  },
  onChangeBuscarProductoBarras: function (obj, newValue, oldValue, eOpts) {
    me = this;
    _combo = Ext.ComponentQuery.query('#cboCliente')[0].getValue();
    if (_combo == null) { tiendarepuestos.util.Util.showToast('Seleccionar un cliente para buscar sus precios !!'); return false; }
    l = Ext.ComponentQuery.query('#dvListaProductos')[0];
    st = l.getStore();
    if (newValue != '') {
      st.load({
        params: {
          codigobarras: obj.getValue(),
          idclie: _combo,
          nombre: '*'
        },
        scope: this,
        callback: function (records, operation, success) {
          r = records[0];
          if (r) {
            var _data = {
              idprod: r.get('id'),
              producto: r.get('nombre'),
              cantidad: 1,
              precio: r.get('precioventa'),
              total: r.get('precioventa') * 1,
              minutos: r.get('minutos'),
              dosis: 0,
              preciodosis: r.get('preciounidad'),
              gramos: 0,
              kilos: 0,
              preciokilo: r.get('preciokilo'),
              preciogramo: r.get('preciogramo')
            };
            _grid = Ext.ComponentQuery.query('#dgvDetalleCaja')[0];
            _grid.getStore().insert(0, _data);
            me.onCalcularTotalVenta();
          }
        }
      });
      obj.setValue('');
    }
  },
  accionClickItem: function (listview, record, item, index, e, eOpts) {
    me = this;
    if (Ext.ComponentQuery.query('#cboCliente')[0].getValue()) {
      var _data = {
        idprod: record.get('id'),
        producto: record.get('nombre'),
        cantidad: 1,
        precio: record.get('precioventa'),
        total: record.get('precioventa') * 1,
        minutos: record.get('minutos'),
        dosis: 0,
        preciodosis: record.get('preciounidad'),
        gramos: 0,
        kilos: 0,
        preciokilo: record.get('preciokilo'),
        preciogramo: record.get('preciogramo')
      };
      var _grid = Ext.ComponentQuery.query('#dgvDetalleCaja')[0];
      /*if (_grid.getStore().findRecord('idprod', parseInt( record.get('id') ))) {
           Ext.Msg.alert('AVISO','EL PRODUCTO YA ESTA EN LISTA, MODIFICAR LA CANTIDAD ? ');return false;

       }*/
      _grid.getStore().insert(0, _data);
      me.onCalcularTotalVenta();
    } else {
      tiendarepuestos.util.Util.showToast('TIENE QUE SELECCIONAR AL CLIENTE O CREARLO !!'); return false;
    }
  },
  onCalcularTotalVenta: function () {
    me = this;
    var store = Ext.ComponentQuery.query('#dgvDetalleCaja')[0].getStore();
    var _tot = 0;

    store.each(function (record) {
      _tot = parseFloat(_tot) + record.get('total');
    });
    Ext.ComponentQuery.query('#txtTotalVentaCaja')[0].setValue(_tot.toFixed(2));
  },

});
