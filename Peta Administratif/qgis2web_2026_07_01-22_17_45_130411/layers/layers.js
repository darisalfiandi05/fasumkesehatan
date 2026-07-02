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
var format_Export_semarang_kota_1 = new ol.format.GeoJSON();
var features_Export_semarang_kota_1 = format_Export_semarang_kota_1.readFeatures(json_Export_semarang_kota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_semarang_kota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_semarang_kota_1.addFeatures(features_Export_semarang_kota_1);
var lyr_Export_semarang_kota_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_semarang_kota_1, 
                style: style_Export_semarang_kota_1,
                popuplayertitle: 'Export_semarang_kota',
                interactive: true,
                title: '<img src="styles/legend/Export_semarang_kota_1.png" /> Export_semarang_kota'
            });
var format_Kecamatan_Genuk_2 = new ol.format.GeoJSON();
var features_Kecamatan_Genuk_2 = format_Kecamatan_Genuk_2.readFeatures(json_Kecamatan_Genuk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_Genuk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_Genuk_2.addFeatures(features_Kecamatan_Genuk_2);
var lyr_Kecamatan_Genuk_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_Genuk_2, 
                style: style_Kecamatan_Genuk_2,
                popuplayertitle: 'Kecamatan_Genuk',
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_Genuk_2.png" /> Kecamatan_Genuk'
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
var format_Puskesmas_4 = new ol.format.GeoJSON();
var features_Puskesmas_4 = format_Puskesmas_4.readFeatures(json_Puskesmas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_4.addFeatures(features_Puskesmas_4);
var lyr_Puskesmas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_4, 
                style: style_Puskesmas_4,
                popuplayertitle: 'Puskesmas',
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_4.png" /> Puskesmas'
            });
var format_RumahSakit_5 = new ol.format.GeoJSON();
var features_RumahSakit_5 = format_RumahSakit_5.readFeatures(json_RumahSakit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_5.addFeatures(features_RumahSakit_5);
var lyr_RumahSakit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_5, 
                style: style_RumahSakit_5,
                popuplayertitle: 'Rumah Sakit',
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_5.png" /> Rumah Sakit'
            });

lyr_WorldStreetMap_0.setVisible(true);lyr_Export_semarang_kota_1.setVisible(true);lyr_Kecamatan_Genuk_2.setVisible(true);lyr_Klinik_3.setVisible(true);lyr_Puskesmas_4.setVisible(true);lyr_RumahSakit_5.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,lyr_Export_semarang_kota_1,lyr_Kecamatan_Genuk_2,lyr_Klinik_3,lyr_Puskesmas_4,lyr_RumahSakit_5];
lyr_Export_semarang_kota_1.set('fieldAliases', {'FID_Conver': 'FID_Conver', 'Name': 'Name', 'FID_BATAS_': 'FID_BATAS_', 'KAB': 'KAB', 'COUNT': 'COUNT', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'ET_ID': 'ET_ID', 'PENDUDUK': 'PENDUDUK', 'LUAS': 'LUAS', 'JIWA_HA': 'JIWA_HA', });
lyr_Kecamatan_Genuk_2.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_Klinik_3.set('fieldAliases', {'Id': 'Id', });
lyr_Puskesmas_4.set('fieldAliases', {'Id': 'Id', });
lyr_RumahSakit_5.set('fieldAliases', {'Id': 'Id', });
lyr_Export_semarang_kota_1.set('fieldImages', {'FID_Conver': 'TextEdit', 'Name': 'TextEdit', 'FID_BATAS_': 'TextEdit', 'KAB': 'TextEdit', 'COUNT': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'ET_ID': 'TextEdit', 'PENDUDUK': 'TextEdit', 'LUAS': 'TextEdit', 'JIWA_HA': 'TextEdit', });
lyr_Kecamatan_Genuk_2.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_Klinik_3.set('fieldImages', {'Id': '', });
lyr_Puskesmas_4.set('fieldImages', {'Id': '', });
lyr_RumahSakit_5.set('fieldImages', {'Id': 'Range', });
lyr_Export_semarang_kota_1.set('fieldLabels', {'FID_Conver': 'no label', 'Name': 'no label', 'FID_BATAS_': 'no label', 'KAB': 'no label', 'COUNT': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'ET_ID': 'no label', 'PENDUDUK': 'no label', 'LUAS': 'no label', 'JIWA_HA': 'no label', });
lyr_Kecamatan_Genuk_2.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_Klinik_3.set('fieldLabels', {'Id': 'no label', });
lyr_Puskesmas_4.set('fieldLabels', {'Id': 'no label', });
lyr_RumahSakit_5.set('fieldLabels', {'Id': 'no label', });
lyr_RumahSakit_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});