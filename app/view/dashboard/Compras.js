
Ext.define('tiendarepuestos.view.dashboard.Compras',{
    extend: 'Ext.panel.Panel',

    requires: [
        'tiendarepuestos.view.dashboard.ComprasController',
        'tiendarepuestos.view.dashboard.ComprasModel'
    ],

    controller: 'dashboard-compras',
    viewModel: {
        type: 'dashboard-compras'
    },

    html: 'Hello, World!!'
});
