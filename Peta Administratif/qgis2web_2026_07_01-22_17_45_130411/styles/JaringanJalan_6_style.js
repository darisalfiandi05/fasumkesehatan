function style_JaringanJalan_6(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var size = 0;
    var color = '';
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    
    if (feature.get("jenis") == 'Arteri') {
        size = 4;
        color = 'rgba(255, 0, 0, 1)';
    }
    else if (feature.get("jenis") == 'Kolektor') {
        size = 3;
        color = 'rgba(255, 128, 0, 1)';
    }
    else if (feature.get("jenis") == 'Lokal') {
        size = 2;
        color = 'rgba(0, 128, 255, 1)';
    }
    else {
        size = 2;
        color = 'rgba(100, 100, 100, 1)';
    }
    
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: color, lineDash: null, lineCap: 'round', lineJoin: 'round', width: size}),
        zIndex: 10
    })];
    return style;
};
