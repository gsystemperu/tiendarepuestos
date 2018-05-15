Ext.define('tiendarepuestos.store.tree.ControlCompras', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            { text: 'Solicitudes Presupuesto', leaf: true, itemId: "RegistroProveedores", titulo: "Registro de Proveedores"  },
            { text: 'Pedidos de Compra', leaf: true, itemId: "RegistroItem", titulo: "Registro de Items" },
            { text: 'Proveedores', leaf: true, itemId: "RegistroItem", titulo: "Registro de Items" },
            { text: 'Productos', leaf: true, itemId: "RegistroItem", titulo: "Registro de Items" },
            
        ]


    }
});
