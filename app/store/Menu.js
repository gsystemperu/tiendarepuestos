Ext.define('tiendarepuestos.store.Menu', {
    extend: 'Ext.data.Store',
    requires: [
        'tiendarepuestos.util.Util'
    ],
    model: 'tiendarepuestos.model.menu.Accordion',
    extraParams:{
      vusuario : 0
    },
    autoLoad: false,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'resources/api/usuario_menu',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){
                tiendarepuestos.util.Util.showErrorMsg(response.responseText);
            }
        }
    }
});
