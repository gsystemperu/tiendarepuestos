
Ext.define('tiendarepuestos.view.seguridad.Permisos',{
    extend: 'Ext.panel.Panel',

    requires: [
        'tiendarepuestos.view.seguridad.PermisosController',
        'tiendarepuestos.view.seguridad.PermisosModel'
    ],

    controller: 'seguridad-permisos',
    viewModel: {
        type: 'seguridad-permisos'
    },

    html: 'Hello, World!!'
});
