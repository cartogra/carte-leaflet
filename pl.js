var stamenMap = L.tileLayer.provider('Stamen.Watercolor');
var imageryMap = L.tileLayer.provider('Esri.WorldImagery');
var osmMap = L.tileLayer.provider('OpenStreetMap.France');


var baseMaps = {
     OSM: osmMap,
    'Stamen Watercolor': stamenMap,
    'World Imagery': imageryMap 
   
}

 var geoserverIPPort= 'localhost:8085';
 var geoserverWorkspace= 'GIS';
 var stateLayerName= 'GIS:cam_st'
 var camStateLayer= L.tileLayer.wms(
     "http://" + geoserverIPPort + "geoserver" + geoserverWorkspace + "/wms",
 {
     layers: stateLayerName,
     format: "image/png",
     trnsparent: true,
     version: "1.1.0",
    tiled: true,
 }

 )

 var overlayMap= {
     "cameroon State": camStateLayer,
 };

var map = L.map("map", {

center: [4.1631366,11.5396439],
    zoom: 5,
    layers: [osmMap, camStateLayer]
});

var markersLayer = L.layerGroup([13.36367971,6.679596, 13.36367971,6.6795968282]).addTo(map);


var maplayers = L.control.layers(baseMaps, overlayMap).addTo(map); 

var ctlMesure= L.control.pointMeasure({
    position: "topleft",
    measureControlTile: "measure lenght",
}).add(map);

 $.getJSON("resources/data/arrondiss_FeaturesToJSON", function (data){
    L.geoJSON(data).addTo(map);
 })


 fetch('C:\Users\KES\Desktop\cle\carte\geoJSON\leaflet\resources\data/arrondiss_FeaturesToJSON')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        geojsonLayer.addData(data);
    });
