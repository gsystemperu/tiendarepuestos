Ext.define('tiendarepuestos.view.almacen.ActualizarDisponibilidadController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.almacen-actualizardisponibilidad',
    onClickCancelar:function(b){
        this.getView().close();
    },
    onClickGuardar:function(b){
        f = this.lookupReference('frmdispo');
        v = this.getView();
        if (f.isValid()) {
            f.submit({
                waitMsg: 'Guardando informacion...',
                success: function (form, action) {
                    if(action.result.error!=0){
                        v.close();
                       // Ext.ComponentQuery.query('#')[0].getStore().load();

                    }                   
                },
                failure: function () {
                    Ext.Msg.alert("Aviso", action.result.msg);
                }
            });

        }else{
            Ext.Msg.alert("Aviso","Ingrese una cantidad valida");
        }
    }

});
