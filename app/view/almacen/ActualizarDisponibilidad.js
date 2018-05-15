Ext.define('tiendarepuestos.view.almacen.ActualizarDisponibilidad',{
    extend: 'Ext.window.Window',
    alias : 'widget.wActDisponibilidad',
    xtype : 'wActDisponibilidad',
    itemId : 'wActDisponibilidad',
    requires: [
        'tiendarepuestos.view.almacen.ActualizarDisponibilidadController',
    ],
    autoShow:true,
    width : 700,
    height:158,
    modal:true,
    controller: 'almacen-actualizardisponibilidad',
    padding : 0,
    items:[
        {
            xtype:'form',
            reference : 'frmdispo',
            itemId : 'frmdispo',
            url : tiendarepuestos.util.Rutas.productoActualizarCantidad,
            layout:{
                type:'vbox',
                pack: 'start',
                align: 'stretch'
            },
            bodyPadding:10,
            defaults:{
                xtype:'textfield',
                labelWidth:200
            },
            items:[
                {
                    xtype:'hiddenfield',
                    name : 'id'
                    
                },
                {
                    fieldLabel :'Producto',
                    name : 'nombre',
                    flex: 1
                },
                {
                    xtype:'numberfield',
                    fieldLabel :'Nueva cantidad a mano',
                    name : 'nuevacantidad',
                    flex :1,
                    minvalue : 0,
                    allowBlank:false
                }
            ],
            bbar:[
                '->',
                {text:'Cancelar',handler:'onClickCancelar'},
                {text:'Guardar',handler:'onClickGuardar'}
            ]
        }
        
    ]
});
