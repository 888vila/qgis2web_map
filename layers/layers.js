var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: "lab1",
                interactive: false,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: "building_house",
                interactive: true,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });
var format_building_house_4 = new ol.format.GeoJSON();
var features_building_house_4 = format_building_house_4.readFeatures(json_building_house_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_4.addFeatures(features_building_house_4);
var lyr_building_house_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_4, 
                style: style_building_house_4,
                popuplayertitle: "дома — building_house",
                interactive: true,
                title: '<img src="styles/legend/building_house_4.png" /> дома — building_house'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: "дороги — highway",
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> дороги — highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: "highway",
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });
var format_highway_7 = new ol.format.GeoJSON();
var features_highway_7 = format_highway_7.readFeatures(json_highway_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_7.addFeatures(features_highway_7);
var lyr_highway_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_7, 
                style: style_highway_7,
                popuplayertitle: "highway",
                interactive: true,
                title: '<img src="styles/legend/highway_7.png" /> highway'
            });
var format_highway_8 = new ol.format.GeoJSON();
var features_highway_8 = format_highway_8.readFeatures(json_highway_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_8.addFeatures(features_highway_8);
var lyr_highway_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_8, 
                style: style_highway_8,
                popuplayertitle: "дороги — highway",
                interactive: true,
                title: '<img src="styles/legend/highway_8.png" /> дороги — highway'
            });
var format_building_house_9 = new ol.format.GeoJSON();
var features_building_house_9 = format_building_house_9.readFeatures(json_building_house_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_9.addFeatures(features_building_house_9);
var lyr_building_house_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_9, 
                style: style_building_house_9,
                popuplayertitle: "building_house",
                interactive: true,
                title: '<img src="styles/legend/building_house_9.png" /> building_house'
            });
var format_2building_house_10 = new ol.format.GeoJSON();
var features_2building_house_10 = format_2building_house_10.readFeatures(json_2building_house_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2building_house_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2building_house_10.addFeatures(features_2building_house_10);
var lyr_2building_house_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2building_house_10, 
                style: style_2building_house_10,
                popuplayertitle: "2 — building_house",
                interactive: true,
                title: '<img src="styles/legend/2building_house_10.png" /> 2 — building_house'
            });
var format_building_house_11 = new ol.format.GeoJSON();
var features_building_house_11 = format_building_house_11.readFeatures(json_building_house_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_11.addFeatures(features_building_house_11);
var lyr_building_house_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_11, 
                style: style_building_house_11,
                popuplayertitle: "building_house",
                interactive: true,
                title: '<img src="styles/legend/building_house_11.png" /> building_house'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_building_house_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);lyr_highway_7.setVisible(true);lyr_highway_8.setVisible(true);lyr_building_house_9.setVisible(true);lyr_2building_house_10.setVisible(true);lyr_building_house_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_lab1_2,lyr_building_house_3,lyr_building_house_4,lyr_highway_5,lyr_highway_6,lyr_highway_7,lyr_highway_8,lyr_building_house_9,lyr_2building_house_10,lyr_building_house_11];
lyr_lab1_2.set('fieldAliases', {'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_building_house_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_5.set('fieldAliases', {});
lyr_highway_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'wheelchair': 'wheelchair', 'level': 'level', 'entrance': 'entrance', 'door': 'door', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'natural': 'natural', 'ele': 'ele', 'crossing': 'crossing', 'name:ru': 'name:ru', 'name': 'name', 'motorcar': 'motorcar', 'foot': 'foot', 'bicycle': 'bicycle', 'ford': 'ford', 'railway': 'railway', 'tower:type': 'tower:type', 'power': 'power', 'material': 'material', 'access': 'access', 'barrier': 'barrier', });
lyr_highway_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tactile_paving': 'tactile_paving', 'horse': 'horse', 'trail_visibility': 'trail_visibility', 'description': 'description', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'oneway': 'oneway', 'tracktype': 'tracktype', 'sac_scale': 'sac_scale', 'man_made': 'man_made', 'smoothness': 'smoothness', 'railway': 'railway', 'ref': 'ref', 'old_ref': 'old_ref', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'lanes': 'lanes', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', 'service': 'service', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_highway_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tactile_paving': 'tactile_paving', 'horse': 'horse', 'trail_visibility': 'trail_visibility', 'description': 'description', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'oneway': 'oneway', 'tracktype': 'tracktype', 'sac_scale': 'sac_scale', 'man_made': 'man_made', 'smoothness': 'smoothness', 'railway': 'railway', 'ref': 'ref', 'old_ref': 'old_ref', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'lanes': 'lanes', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', 'service': 'service', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_building_house_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'level': 'level', 'entrance': 'entrance', 'door': 'door', 'access': 'access', });
lyr_2building_house_10.set('fieldAliases', {});
lyr_building_house_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_lab1_2.set('fieldImages', {'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_building_house_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'Range', });
lyr_highway_5.set('fieldImages', {});
lyr_highway_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'wheelchair': '', 'level': '', 'entrance': '', 'door': '', 'bench': '', 'public_transport': '', 'bus': '', 'natural': '', 'ele': '', 'crossing': '', 'name:ru': '', 'name': '', 'motorcar': '', 'foot': '', 'bicycle': '', 'ford': '', 'railway': '', 'tower:type': '', 'power': '', 'material': '', 'access': '', 'barrier': '', });
lyr_highway_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tactile_paving': '', 'horse': '', 'trail_visibility': '', 'description': '', 'footway': '', 'ford': '', 'depth': '', 'oneway': '', 'tracktype': '', 'sac_scale': '', 'man_made': '', 'smoothness': '', 'railway': '', 'ref': '', 'old_ref': '', 'name:etymology:wikidata': '', 'name': '', 'lanes': '', 'bicycle': '', 'access': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', 'service': '', 'surface': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_highway_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tactile_paving': '', 'horse': '', 'trail_visibility': '', 'description': '', 'footway': '', 'ford': '', 'depth': '', 'oneway': '', 'tracktype': '', 'sac_scale': '', 'man_made': '', 'smoothness': '', 'railway': '', 'ref': '', 'old_ref': '', 'name:etymology:wikidata': '', 'name': '', 'lanes': '', 'bicycle': '', 'access': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', 'service': '', 'surface': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_building_house_9.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'wheelchair': '', 'level': '', 'entrance': '', 'door': '', 'access': '', });
lyr_2building_house_10.set('fieldImages', {});
lyr_building_house_11.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_lab1_2.set('fieldLabels', {'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_house_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_5.set('fieldLabels', {});
lyr_highway_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'wheelchair': 'no label', 'level': 'no label', 'entrance': 'no label', 'door': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'natural': 'no label', 'ele': 'no label', 'crossing': 'no label', 'name:ru': 'no label', 'name': 'no label', 'motorcar': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'ford': 'no label', 'railway': 'no label', 'tower:type': 'no label', 'power': 'no label', 'material': 'no label', 'access': 'no label', 'barrier': 'no label', });
lyr_highway_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tactile_paving': 'no label', 'horse': 'no label', 'trail_visibility': 'no label', 'description': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'oneway': 'no label', 'tracktype': 'no label', 'sac_scale': 'no label', 'man_made': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'lanes': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', 'service': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_highway_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tactile_paving': 'no label', 'horse': 'no label', 'trail_visibility': 'no label', 'description': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'oneway': 'no label', 'tracktype': 'no label', 'sac_scale': 'no label', 'man_made': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'lanes': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', 'service': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_building_house_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'level': 'no label', 'entrance': 'no label', 'door': 'no label', 'access': 'no label', });
lyr_2building_house_10.set('fieldLabels', {});
lyr_building_house_11.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_house_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});