var wms_layers = [];


        var lyr_WorldStreetMap_0 = new ol.layer.Tile({
            'title': 'World Street Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Kecamatan_Genuk_1 = new ol.format.GeoJSON();
var features_Kecamatan_Genuk_1 = format_Kecamatan_Genuk_1.readFeatures(json_Kecamatan_Genuk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_Genuk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_Genuk_1.addFeatures(features_Kecamatan_Genuk_1);
var lyr_Kecamatan_Genuk_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_Genuk_1, 
                style: style_Kecamatan_Genuk_1,
                popuplayertitle: 'Kecamatan_Genuk',
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_Genuk_1.png" /> Kecamatan_Genuk'
            });
var format_bufferklinik_2 = new ol.format.GeoJSON();
var features_bufferklinik_2 = format_bufferklinik_2.readFeatures(json_bufferklinik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufferklinik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufferklinik_2.addFeatures(features_bufferklinik_2);
var lyr_bufferklinik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bufferklinik_2, 
                style: style_bufferklinik_2,
                popuplayertitle: 'buffer klinik',
                interactive: true,
                title: '<img src="styles/legend/bufferklinik_2.png" /> buffer klinik'
            });
var format_Klinik_3 = new ol.format.GeoJSON();
var features_Klinik_3 = format_Klinik_3.readFeatures(json_Klinik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klinik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klinik_3.addFeatures(features_Klinik_3);
var lyr_Klinik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klinik_3, 
                style: style_Klinik_3,
                popuplayertitle: 'Klinik',
                interactive: true,
                title: '<img src="styles/legend/Klinik_3.png" /> Klinik'
            });
var format_bufferpuskesmas_4 = new ol.format.GeoJSON();
var features_bufferpuskesmas_4 = format_bufferpuskesmas_4.readFeatures(json_bufferpuskesmas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufferpuskesmas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufferpuskesmas_4.addFeatures(features_bufferpuskesmas_4);
var lyr_bufferpuskesmas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bufferpuskesmas_4, 
                style: style_bufferpuskesmas_4,
                popuplayertitle: 'buffer puskesmas',
                interactive: true,
                title: '<img src="styles/legend/bufferpuskesmas_4.png" /> buffer puskesmas'
            });
var format_Puskesmas_5 = new ol.format.GeoJSON();
var features_Puskesmas_5 = format_Puskesmas_5.readFeatures(json_Puskesmas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_5.addFeatures(features_Puskesmas_5);
var lyr_Puskesmas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_5, 
                style: style_Puskesmas_5,
                popuplayertitle: 'Puskesmas',
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_5.png" /> Puskesmas'
            });
var format_bufferrumahsakit_6 = new ol.format.GeoJSON();
var features_bufferrumahsakit_6 = format_bufferrumahsakit_6.readFeatures(json_bufferrumahsakit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufferrumahsakit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufferrumahsakit_6.addFeatures(features_bufferrumahsakit_6);
var lyr_bufferrumahsakit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bufferrumahsakit_6, 
                style: style_bufferrumahsakit_6,
                popuplayertitle: 'buffer rumah sakit',
                interactive: true,
                title: '<img src="styles/legend/bufferrumahsakit_6.png" /> buffer rumah sakit'
            });
var format_RumahSakit_7 = new ol.format.GeoJSON();
var features_RumahSakit_7 = format_RumahSakit_7.readFeatures(json_RumahSakit_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_7.addFeatures(features_RumahSakit_7);
var lyr_RumahSakit_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_7, 
                style: style_RumahSakit_7,
                popuplayertitle: 'Rumah Sakit',
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_7.png" /> Rumah Sakit'
            });

lyr_WorldStreetMap_0.setVisible(true);lyr_Kecamatan_Genuk_1.setVisible(true);lyr_bufferklinik_2.setVisible(true);lyr_Klinik_3.setVisible(true);lyr_bufferpuskesmas_4.setVisible(true);lyr_Puskesmas_5.setVisible(true);lyr_bufferrumahsakit_6.setVisible(true);lyr_RumahSakit_7.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,lyr_Kecamatan_Genuk_1,lyr_bufferklinik_2,lyr_Klinik_3,lyr_bufferpuskesmas_4,lyr_Puskesmas_5,lyr_bufferrumahsakit_6,lyr_RumahSakit_7];
lyr_Kecamatan_Genuk_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_bufferklinik_2.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', });
lyr_Klinik_3.set('fieldAliases', {'Id': 'Id', });
lyr_bufferpuskesmas_4.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', });
lyr_Puskesmas_5.set('fieldAliases', {'Id': 'Id', });
lyr_bufferrumahsakit_6.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', });
lyr_RumahSakit_7.set('fieldAliases', {'Id': 'Id', });
lyr_Kecamatan_Genuk_1.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_bufferklinik_2.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', });
lyr_Klinik_3.set('fieldImages', {'Id': 'Range', });
lyr_bufferpuskesmas_4.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', });
lyr_Puskesmas_5.set('fieldImages', {'Id': 'Range', });
lyr_bufferrumahsakit_6.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', });
lyr_RumahSakit_7.set('fieldImages', {'Id': 'Range', });
lyr_Kecamatan_Genuk_1.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'header label - visible with data', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_bufferklinik_2.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', });
lyr_Klinik_3.set('fieldLabels', {'Id': 'no label', });
lyr_bufferpuskesmas_4.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', });
lyr_Puskesmas_5.set('fieldLabels', {'Id': 'no label', });
lyr_bufferrumahsakit_6.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', });
lyr_RumahSakit_7.set('fieldLabels', {'Id': 'no label', });
lyr_RumahSakit_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});