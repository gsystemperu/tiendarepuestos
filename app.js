Ext.setGlyphFontFamily('FontAwesome');
Ext.require('tiendarepuestos.util.Glyphs');

/*Ext.Loader.setConfig({
  enabled:true,
  paths:{
      'gsperu':'./util'
  }
});*/


Ext.application(
{
    name: 'tiendarepuestos',
    extend: 'tiendarepuestos.Application'

});
