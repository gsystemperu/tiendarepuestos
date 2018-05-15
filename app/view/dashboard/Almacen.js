
Ext.define('tiendarepuestos.view.dashboard.Almacen',{
    extend: 'Ext.panel.Panel',

    requires: [
        'tiendarepuestos.view.dashboard.AlmacenController',
        'tiendarepuestos.view.dashboard.AlmacenModel'
    ],

    controller: 'dashboard-almacen',
    viewModel: {
        type: 'dashboard-almacen'
    },

    html: 'Hello, World!!'
});
