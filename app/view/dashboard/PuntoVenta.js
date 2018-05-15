
Ext.define('tiendarepuestos.view.dashboard.PuntoVenta',{
    extend: 'Ext.panel.Panel',

    requires: [
        'tiendarepuestos.view.dashboard.PuntoVentaController',
        'tiendarepuestos.view.dashboard.PuntoVentaModel'
    ],

    controller: 'dashboard-puntoventa',
    viewModel: {
        type: 'dashboard-puntoventa'
    },

    html: 'Hello, World!!'
});
