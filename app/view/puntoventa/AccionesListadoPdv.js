Ext.define('tiendarepuestos.view.puntoventa.AccionesListadoPdv', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.acciones-listadopdv',
    requires:['tiendarepuestos.util.Rutas'],
    init:function(){},
    onClickIngresarPagoAcuentaPdv:function(btn){
      __rec = btn.getWidgetRecord();
      Ext.widget('wPagosAcuentaPdv', {
        codigo :__rec.get("idfacturacion"),
        nombre :__rec.get("nomcompleto") ,
        monto  :__rec.get("totalcoti")
      });
    },
    onClickEliminarPagoAcuentaPdv:function(btn){
        console.log("aaa");
    },
    onClickVisualizarVenta:function(btn){
      r  = Ext.ComponentQuery.query('#dgvVentasFacturarPdv')[0].getSelectionModel().getSelection()[0];
      if(r){
        var objrpt = window.open( tiendarepuestos.util.Rutas.rptVisualizarNota+ 
        'id='+ r.get('idfacturacion'), "", "width=700,height=900");
      }
    },
    onClickImprimirComprobante:function(btn){
      r  = Ext.ComponentQuery.query('#dgvVentasFacturarPdv')[0].getSelectionModel().getSelection()[0];
      console.log(r);
      if(r){
        switch (r.get('tipodoc')) {
          case 'BOL':objrpt = window.open( tiendarepuestos.util.Rutas.rptImprimirNota+ 'id='+ r.get('idfacturacion'), "", "width=700,height=900");break;
          case 'FAC':objrpt = window.open( tiendarepuestos.util.Rutas.rptImprimirNota+ 'id='+ r.get('idfacturacion'), "", "width=700,height=900");break;
          case 'NOT':objrpt = window.open( tiendarepuestos.util.Rutas.imprimirTicket+ 'id='+ r.get('idfacturacion'), "", "width=700,height=900");break;
        }
        
        
      }
    },
    onClickBuscarCotizacionesPorFechas:function(){
        d=this.lookupReference('dfDesde').getRawValue();
        h=this.lookupReference('dfHasta').getRawValue();
        s=Ext.ComponentQuery.query('#dgvVentasFacturarPdv')[0].getStore();
        s.load({
          params:{
            desde : d,
            hasta : h
          }
        });


    }
});
