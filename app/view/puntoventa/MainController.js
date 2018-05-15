Ext.define('tiendarepuestos.view.puntoventa.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.puntoventa-main',
  onCalcularTotalVenta: function () {
    me = this;
    store = Ext.ComponentQuery.query('#dgvDetalleCaja')[0].getStore();
    _tot = 0;
    store.each(function (record) {
      _tot = parseFloat(_tot) + record.get('total');
    });
    Ext.ComponentQuery.query('#txtTotalVentaCaja')[0].setValue(_tot.toFixed(2));
  },
  onEditorCalcularTotal: function (editor, e) {
    if (e.field == 'cantidad') {
      ca = e.record.get('cantidad');
      pa = e.record.get('preciodosis');
      pe = e.record.get('precio');
      console.log("1");
      if (e.record.get('precioanterior') != 0) {
        pe = e.record.get('precioanterior')
      }
      to = pe * ca;
      e.record.set('precio', pe.toFixed(2));
      e.record.set('total', to.toFixed(2));
      e.record.set('precioanterior', pe.toFixed(2));
      e.record.set('dosis', 0);
      this.onCalcularTotalVenta();
    } else { //fraccion
      pa = e.record.get('preciodosis');
      to = pa * e.record.get('dosis');
      if (e.record.get('precioanterior') == 0) {
        e.record.set('precioanterior', e.record.get('precio'));
      }
      e.record.set('precio', pa.toFixed(2));
      e.record.set('total', to.toFixed(2));
      e.record.set('cantidad', 1);
      this.onCalcularTotalVenta();
    }
    /*if(e.record.get('precioanterior')!=0)
    {
       _pre  = e.record.get('precioanterior');
    }else{
      _pre   = e.record.get('precio');
    }

    _dosis   = e.record.get('dosis');
    _kilos   = e.record.get('kilos');
    _gramos  = e.record.get('gramos');
    console.log(e.field);
    if(parseInt(_dosis)==0){
      //alert("aaa");
      _tot = _pre * _cant;
      e.record.set('precio', _pre.toFixed(2));
      e.record.set('total', _tot.toFixed(2));
      e.record.set('precioanterior',0);
      this.onCalcularTotalVenta();
      //return false;
    }*/
    /*if(parseFloat(_kilos)>0){
      _cant       = e.record.get('kilos');
      _pre        = e.record.get('preciokilo');
      _anterior   = e.record.get('precio');
      _tot = _pre * _cant;
      e.record.set('precio', _pre.toFixed(2));
      e.record.set('precioanterior', _anterior.toFixed(2));
      e.record.set('total', _tot.toFixed(2));
      this.onCalcularTotalVenta();
      //return false;
    }
    if(parseFloat(_gramos)>0){
      _cant       = e.record.get('gramos');
      _pre        = e.record.get('preciogramo');
      _anterior   = e.record.get('precio');
      _tot = _pre * _cant;
      e.record.set('precio', _pre.toFixed(2));
      e.record.set('precioanterior', _anterior.toFixed(2));
      e.record.set('total', _tot.toFixed(2));
      this.onCalcularTotalVenta();
      //return false;
    }*/
    /*if(parseFloat(_dosis)>0){ //Este modelo vente por fraccion
      
      _cant       = e.record.get('dosis');
      _pre        = e.record.get('preciodosis');
      _anterior   = e.record.get('precio');
      _tot = _pre * _cant;
      e.record.set('precio', _pre.toFixed(2));
      e.record.set('precioanterior', _anterior.toFixed(2));
      e.record.set('total', _tot.toFixed(2));
      this.onCalcularTotalVenta();
      //return false;
    }*/
  },
  onClickEliminarItem: function (btn) {
    rec = btn.getWidgetRecord();
    store = Ext.ComponentQuery.query('#dgvDetalleCaja')[0].getStore();
    store.remove(rec);
    this.onCalcularTotalVenta();
  },
  onClickGuardarCajaPago: function (btn) {
    fm = Ext.ComponentQuery.query('#wPuntoVentaPago')[0];
    me = this;
    if (fm.isValid()) {
      dt = [];
      st = Ext.ComponentQuery.query('#dgvDetalleCaja')[0].getStore();
      if (st.getCount() == 0) { tiendarepuestos.util.Util.showToast("TIENE QUE INGRESAR PRODUCTOS"); return false; }
      st.each(function (record) {
        if (record.get('cantidad') != 0) 
        {
          //Venta por unidad
          if(record.get('dosis')>0 && record.get('cantidad')==1){
            _swDosis = true;
          }else{ // Venta por cantidad
            _swDosis = false;
          }
          if (record.get('kilos') > 0 && record.get('cantidad')==1) {
            _swKilos = true;
          } else {
            _swKilos = false;
          }
          if (record.get('gramos') > 0 && record.get('cantidad')==1) {
            _swGramos = true;
          } else {
            _swGramos = false;
          }

          _reg = {
            "idprod": record.get('idprod'),
            "cantidad": record.get('cantidad'),
            "precio": record.get("precio"),
            "total": record.get("total"),
            "ventadosis": _swDosis,
            "dosis": record.get("dosis"),
            "ventakilos": _swKilos,
            "kilos": record.get("kilos"),
            "ventagramos": _swGramos,
            "gramos": record.get("gramos"),
          };
          dt.push(_reg);
        }

      });
      __jsondetalle = JSON.stringify(dt);

      __radios = Ext.ComponentQuery.query('radio');
      if (__radios[0].value) {
        __tipodoc = 3;
      }
      if (__radios[1].value) {
        __tipodoc = 2;
      }
      if (__radios[2].value) {
        __tipodoc = 1;
      }

      Ext.Ajax.request({
        url: tiendarepuestos.util.Rutas.facturacionGuardarPagoPuntoVenta,
        params: {
          id: 0,
          idcoti: 0,
          idper: Ext.ComponentQuery.query('#cboCliente')[0].getValue(),
          vjsondetalle: __jsondetalle.toString(),
          idfopag: Ext.ComponentQuery.query('#cboFormaPagoPv')[0].getValue(),
          idmodo: 1,
          documentoventa: __tipodoc,
          serie: Ext.ComponentQuery.query('#txtSerieDoc')[0].getValue(),
          numerodoc: Ext.ComponentQuery.query('#txtNumeroDoc')[0].getValue(),
          acuenta: Ext.ComponentQuery.query('#txtAcuentaVentaCajaValidar')[0].getValue()
        },
        success: function (response) {
          __data = Ext.JSON.decode(response.responseText);
          if (__data.error != 0) {
            Ext.ComponentQuery.query('#wPuntoVentaPago')[0].reset();
            Ext.ComponentQuery.query('#dgvDetalleCaja')[0].getStore().removeAll();
            tiendarepuestos.util.Util.showToast("GUARDADO");
            Ext.ComponentQuery.query('#dvListaProductos')[0].getStore().load();
            me = Ext.ComponentQuery.query('#wContenedorPuntoVenta')[0];
            l = me.getLayout();
            l.setActiveItem(0);
            Ext.ComponentQuery.query('#txtTotalVentaCaja')[0].setValue('0');

            objrpt = window.open(tiendarepuestos.util.Rutas.imprimirTicket + 'id=' + __data.error, "", "width=700,height=900");

            // Impresion Matricial
            // objrpt = window.open( tiendarepuestos.util.Rutas.rptImprimirNota+ 
            //'id='+ __data.error, "", "width=700,height=900");
            //setTimeout(function(){ objrpt.close()}, 4000);

          }
        }
      });
    }else{

      alert("validador");
    }

  },
  onKeyPagoAcuenta: function (obj, e, eOpts) {
    if (e.keyCode == 13) {
      __total = Ext.ComponentQuery.query('#txtTotalVentaCajaValidar')[0].getValue()
      __acuenta = Ext.ComponentQuery.query('#txtAcuentaVentaCajaValidar')[0].getValue();
      Ext.ComponentQuery.query('#txtSaldoVentaCajaValidar')[0].setValue(__total - __acuenta);
    }
  },
  onChangeSeleccionarDoc: function (obj, val, old) {
    switch (parseInt(val.dv)) {
      case 3:
        Ext.ComponentQuery.query('#lblDoc')[0].setHidden(true);
        Ext.ComponentQuery.query('#txtSerieDoc')[0].setHidden(true);
        Ext.ComponentQuery.query('#txtNumeroDoc')[0].setHidden(true);
        break;//nota
      case 2:
        Ext.ComponentQuery.query('#lblDoc')[0].setHidden(false);
        Ext.ComponentQuery.query('#txtSerieDoc')[0].setHidden(false);
        Ext.ComponentQuery.query('#txtNumeroDoc')[0].setHidden(false);
        break;//boleta
      case 1:
        Ext.ComponentQuery.query('#lblDoc')[0].setHidden(false);
        Ext.ComponentQuery.query('#txtSerieDoc')[0].setHidden(false);
        Ext.ComponentQuery.query('#txtNumeroDoc')[0].setHidden(false);
        break;//factura

    }
  }

});
