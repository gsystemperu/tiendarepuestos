
Ext.define('tiendarepuestos.view.farma.FormMedicamento',{
    extend: 'tiendarepuestos.view.almacen.FormProducto',
    requires: [
        'tiendarepuestos.view.almacen.FormProducto',
        'tiendarepuestos.view.farma.FormMedicamentoController',
        'tiendarepuestos.view.farma.FormMedicamentoModel'
    ],
    controller: 'farma-formmedicamento',
    viewModel: {
        type: 'farma-formmedicamento'
    },

    html: 'Hello, World!!'
});
