
Ext.define('tiendarepuestos.view.dashboard.Mrp',{
    extend: 'Ext.panel.Panel',

    requires: [
        'tiendarepuestos.view.dashboard.MrpController',
        'tiendarepuestos.view.dashboard.MrpModel'
    ],

    controller: 'dashboard-mrp',
    viewModel: {
        type: 'dashboard-mrp'
    },

    html: 'Hello, World!!'
});
