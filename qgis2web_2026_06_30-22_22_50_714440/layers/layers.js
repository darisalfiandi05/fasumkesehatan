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
                title: 'Kecamatan Genuk'
            });
var format_Klinik_2 = new ol.format.GeoJSON();
var features_Klinik_2 = format_Klinik_2.readFeatures(json_Klinik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klinik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klinik_2.addFeatures(features_Klinik_2);
var lyr_Klinik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klinik_2, 
                style: style_Klinik_2,
                popuplayertitle: 'Klinik',
                interactive: true,
                title: 'Klinik'
            });
var format_Puskesmas_3 = new ol.format.GeoJSON();
var features_Puskesmas_3 = format_Puskesmas_3.readFeatures(json_Puskesmas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_3.addFeatures(features_Puskesmas_3);
var lyr_Puskesmas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_3, 
                style: style_Puskesmas_3,
                popuplayertitle: 'Puskesmas',
                interactive: true,
                title: 'Puskesmas'
            });
var format_RumahSakit_4 = new ol.format.GeoJSON();
var features_RumahSakit_4 = format_RumahSakit_4.readFeatures(json_RumahSakit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_4.addFeatures(features_RumahSakit_4);
var lyr_RumahSakit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_4, 
                style: style_RumahSakit_4,
                popuplayertitle: 'Rumah Sakit',
                interactive: true,
                title: 'Rumah Sakit'
            });

lyr_WorldStreetMap_0.setVisible(true);lyr_Kecamatan_Genuk_1.setVisible(true);lyr_Klinik_2.setVisible(true);lyr_Puskesmas_3.setVisible(true);lyr_RumahSakit_4.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,lyr_Kecamatan_Genuk_1,lyr_Klinik_2,lyr_Puskesmas_3,lyr_RumahSakit_4];
lyr_Kecamatan_Genuk_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_Klinik_2.set('fieldAliases', {'Id': 'Id', });
lyr_Puskesmas_3.set('fieldAliases', {'Id': 'Id', });
lyr_RumahSakit_4.set('fieldAliases', {'Id': 'Id', });
lyr_Kecamatan_Genuk_1.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_Klinik_2.set('fieldImages', {'Id': '', });
lyr_Puskesmas_3.set('fieldImages', {'Id': '', });
lyr_RumahSakit_4.set('fieldImages', {'Id': 'Range', });
lyr_Kecamatan_Genuk_1.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_Klinik_2.set('fieldLabels', {'Id': 'no label', });
lyr_Puskesmas_3.set('fieldLabels', {'Id': 'no label', });
lyr_RumahSakit_4.set('fieldLabels', {'Id': 'no label', });
lyr_RumahSakit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});