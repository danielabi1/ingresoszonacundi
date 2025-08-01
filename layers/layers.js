var wms_layers = [];


        var lyr_MAPABASE_0 = new ol.layer.Tile({
            'title': 'MAPA BASE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_INGRESOSZONACUND_1 = new ol.format.GeoJSON();
var features_INGRESOSZONACUND_1 = format_INGRESOSZONACUND_1.readFeatures(json_INGRESOSZONACUND_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INGRESOSZONACUND_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INGRESOSZONACUND_1.addFeatures(features_INGRESOSZONACUND_1);
var lyr_INGRESOSZONACUND_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INGRESOSZONACUND_1, 
                style: style_INGRESOSZONACUND_1,
                popuplayertitle: 'INGRESOS ZONA CUND',
                interactive: true,
                title: '<img src="styles/legend/INGRESOSZONACUND_1.png" /> INGRESOS ZONA CUND'
            });
var format_ZONASCUNDI_2 = new ol.format.GeoJSON();
var features_ZONASCUNDI_2 = format_ZONASCUNDI_2.readFeatures(json_ZONASCUNDI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONASCUNDI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASCUNDI_2.addFeatures(features_ZONASCUNDI_2);
var lyr_ZONASCUNDI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONASCUNDI_2, 
                style: style_ZONASCUNDI_2,
                popuplayertitle: 'ZONAS CUNDI',
                interactive: true,
    title: 'ZONAS CUNDI<br />\
    <img src="styles/legend/ZONASCUNDI_2_0.png" /> 100%<br />\
    <img src="styles/legend/ZONASCUNDI_2_1.png" /> 41%<br />\
    <img src="styles/legend/ZONASCUNDI_2_2.png" /> 35%<br />\
    <img src="styles/legend/ZONASCUNDI_2_3.png" /> 32%<br />\
    <img src="styles/legend/ZONASCUNDI_2_4.png" /> 31%<br />\
    <img src="styles/legend/ZONASCUNDI_2_5.png" /> 30%<br />\
    <img src="styles/legend/ZONASCUNDI_2_6.png" /> 27%<br />\
    <img src="styles/legend/ZONASCUNDI_2_7.png" /> 22%<br />\
    <img src="styles/legend/ZONASCUNDI_2_8.png" /> 19%<br />\
    <img src="styles/legend/ZONASCUNDI_2_9.png" /> 18%<br />\
    <img src="styles/legend/ZONASCUNDI_2_10.png" /> 14%<br />\
    <img src="styles/legend/ZONASCUNDI_2_11.png" /> 13%<br />\
    <img src="styles/legend/ZONASCUNDI_2_12.png" /> 11%<br />\
    <img src="styles/legend/ZONASCUNDI_2_13.png" /> 6%<br />\
    <img src="styles/legend/ZONASCUNDI_2_14.png" /> 5%<br />\
    <img src="styles/legend/ZONASCUNDI_2_15.png" /> 3%<br />\
    <img src="styles/legend/ZONASCUNDI_2_16.png" /> 1%<br />\
    <img src="styles/legend/ZONASCUNDI_2_17.png" /> <br />' });
var format_SPT_Bogota_2023SPT_BOGOTAKML_3 = new ol.format.GeoJSON();
var features_SPT_Bogota_2023SPT_BOGOTAKML_3 = format_SPT_Bogota_2023SPT_BOGOTAKML_3.readFeatures(json_SPT_Bogota_2023SPT_BOGOTAKML_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPT_Bogota_2023SPT_BOGOTAKML_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPT_Bogota_2023SPT_BOGOTAKML_3.addFeatures(features_SPT_Bogota_2023SPT_BOGOTAKML_3);
var lyr_SPT_Bogota_2023SPT_BOGOTAKML_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPT_Bogota_2023SPT_BOGOTAKML_3, 
                style: style_SPT_Bogota_2023SPT_BOGOTAKML_3,
                popuplayertitle: 'SPT_Bogota_2023 — SPT_BOGOTA.KML',
                interactive: true,
                title: 'SPT_Bogota_2023 — SPT_BOGOTA.KML'
            });

lyr_MAPABASE_0.setVisible(true);lyr_INGRESOSZONACUND_1.setVisible(true);lyr_ZONASCUNDI_2.setVisible(true);lyr_SPT_Bogota_2023SPT_BOGOTAKML_3.setVisible(true);
var layersList = [lyr_MAPABASE_0,lyr_INGRESOSZONACUND_1,lyr_ZONASCUNDI_2,lyr_SPT_Bogota_2023SPT_BOGOTAKML_3];
lyr_INGRESOSZONACUND_1.set('fieldAliases', {'SPT': 'SPT', 'ZONA': 'ZONA', 'Cantidad PDV': 'Cantidad PDV', 'INGRESO TOTAL': 'INGRESO TOTAL', 'Ing. Prom. PDV': 'Ing. Prom. PDV', 'promedio_COSTO': 'promedio_COSTO', 'promedio_Utilidad': 'promedio_Utilidad', 'promedio_Rentabilidad': 'promedio_Rentabilidad', 'CX': 'CX', 'CY': 'CY', 'COD ZONA': 'COD ZONA', });
lyr_ZONASCUNDI_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'COD_ZONA': 'COD_ZONA', 'INGRESOS ZONA CUND_SPT': 'INGRESOS ZONA CUND_SPT', 'INGRESOS ZONA CUND_ZONA': 'INGRESOS ZONA CUND_ZONA', 'INGRESOS ZONA CUND_Cantidad PDV': 'INGRESOS ZONA CUND_Cantidad PDV', 'INGRESOS ZONA CUND_INGRESO TOTAL': 'INGRESOS ZONA CUND_INGRESO TOTAL', 'INGRESOS ZONA CUND_Ing. Prom. PDV': 'INGRESOS ZONA CUND_Ing. Prom. PDV', 'INGRESOS ZONA CUND_promedio_COSTO': 'INGRESOS ZONA CUND_promedio_COSTO', 'INGRESOS ZONA CUND_promedio_Utilidad': 'INGRESOS ZONA CUND_promedio_Utilidad', 'INGRESOS ZONA CUND_promedio_Rentabilidad': 'INGRESOS ZONA CUND_promedio_Rentabilidad', 'INGRESOS ZONA CUND_CX': 'INGRESOS ZONA CUND_CX', 'INGRESOS ZONA CUND_CY': 'INGRESOS ZONA CUND_CY', });
lyr_SPT_Bogota_2023SPT_BOGOTAKML_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_INGRESOSZONACUND_1.set('fieldImages', {'SPT': '', 'ZONA': '', 'Cantidad PDV': '', 'INGRESO TOTAL': '', 'Ing. Prom. PDV': '', 'promedio_COSTO': '', 'promedio_Utilidad': '', 'promedio_Rentabilidad': '', 'CX': '', 'CY': '', 'COD ZONA': '', });
lyr_ZONASCUNDI_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'COD_ZONA': 'Range', 'INGRESOS ZONA CUND_SPT': 'TextEdit', 'INGRESOS ZONA CUND_ZONA': 'TextEdit', 'INGRESOS ZONA CUND_Cantidad PDV': 'Range', 'INGRESOS ZONA CUND_INGRESO TOTAL': 'TextEdit', 'INGRESOS ZONA CUND_Ing. Prom. PDV': 'TextEdit', 'INGRESOS ZONA CUND_promedio_COSTO': 'TextEdit', 'INGRESOS ZONA CUND_promedio_Utilidad': 'TextEdit', 'INGRESOS ZONA CUND_promedio_Rentabilidad': 'TextEdit', 'INGRESOS ZONA CUND_CX': 'TextEdit', 'INGRESOS ZONA CUND_CY': 'TextEdit', });
lyr_SPT_Bogota_2023SPT_BOGOTAKML_3.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_INGRESOSZONACUND_1.set('fieldLabels', {'SPT': 'hidden field', 'ZONA': 'hidden field', 'Cantidad PDV': 'hidden field', 'INGRESO TOTAL': 'hidden field', 'Ing. Prom. PDV': 'hidden field', 'promedio_COSTO': 'hidden field', 'promedio_Utilidad': 'hidden field', 'promedio_Rentabilidad': 'hidden field', 'CX': 'hidden field', 'CY': 'hidden field', 'COD ZONA': 'hidden field', });
lyr_ZONASCUNDI_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'COD_ZONA': 'hidden field', 'INGRESOS ZONA CUND_SPT': 'inline label - always visible', 'INGRESOS ZONA CUND_ZONA': 'inline label - always visible', 'INGRESOS ZONA CUND_Cantidad PDV': 'hidden field', 'INGRESOS ZONA CUND_INGRESO TOTAL': 'inline label - always visible', 'INGRESOS ZONA CUND_Ing. Prom. PDV': 'inline label - always visible', 'INGRESOS ZONA CUND_promedio_COSTO': 'hidden field', 'INGRESOS ZONA CUND_promedio_Utilidad': 'hidden field', 'INGRESOS ZONA CUND_promedio_Rentabilidad': 'hidden field', 'INGRESOS ZONA CUND_CX': 'hidden field', 'INGRESOS ZONA CUND_CY': 'no label', });
lyr_SPT_Bogota_2023SPT_BOGOTAKML_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SPT_Bogota_2023SPT_BOGOTAKML_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});