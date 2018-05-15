Ext.define('tiendarepuestos.model.menu.Accordion', {
    extend: 'Ext.data.Model',
    requires: [
       'tiendarepuestos.model.menu.TreeNode'
   ],
   fields: [
       { name: 'id', type: 'int'},
       { name: 'text' },
       { name: 'iconCls' }
   ],
   hasMany: {
       model: 'tiendarepuestos.model.menu.TreeNode',
       foreignKey: 'parent_id',
       name: 'items'
   }
});
