Ext.define('tiendarepuestos.store.tree.ControlUsuarios', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            { text: 'Registro de Usuarios', leaf: true, itemId: "registroUsuarios", titulo: "Registro Usuarios" , glyph: 'xf007'},
            { text: 'Niveles de Acceso', leaf: true, itemId: "registroNivelesAccesso", titulo: 'Nivles de Acceso', glyph: 'xf007' },
        ]
    }
});
