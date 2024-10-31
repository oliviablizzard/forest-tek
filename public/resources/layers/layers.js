var wms_layers = [];

var format_canada_0 = new ol.format.GeoJSON();
var features_canada_0 = format_canada_0.readFeatures(json_canada_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_canada_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_canada_0.addFeatures(features_canada_0);
var lyr_canada_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_canada_0, 
                style: style_canada_0,
                popuplayertitle: "canada",
                interactive: true,
    title: 'canada<br />\
    <img src="styles/legend/canada_0_0.png" /> NB<br />\
    <img src="styles/legend/canada_0_1.png" /> NL<br />\
    <img src="styles/legend/canada_0_2.png" /> NS<br />\
    <img src="styles/legend/canada_0_3.png" /> ON<br />\
    <img src="styles/legend/canada_0_4.png" /> PEI<br />\
    <img src="styles/legend/canada_0_5.png" /> QC<br />\
    <img src="styles/legend/canada_0_6.png" /> <br />'
        });

lyr_canada_0.setVisible(true);
var layersList = [lyr_canada_0];
lyr_canada_0.set('fieldAliases', {'PRUID': 'PRUID', 'PRNAME': 'PRNAME', 'PROV': 'PROV', 'keep': 'keep', });
lyr_canada_0.set('fieldImages', {'PRUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PROV': 'TextEdit', 'keep': 'Range', });
lyr_canada_0.set('fieldLabels', {'PRUID': 'no label', 'PRNAME': 'no label', 'PROV': 'no label', 'keep': 'no label', });
lyr_canada_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});