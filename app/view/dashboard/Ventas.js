
Ext.define('tiendarepuestos.view.dashboard.Ventas',{
    extend: 'Ext.panel.Panel',

    requires: [
        'tiendarepuestos.view.dashboard.VentasController',
        'tiendarepuestos.view.dashboard.VentasModel'
    ],

    controller: 'dashboard-ventas',
    viewModel: {
        type: 'dashboard-ventas'
    },

    html: 'Hello, World!!'
});
