// Create the map centered on a specific location
var myMap = L.map("map").setView([0, 0], 2);

// Add the tile layer (base map)
var streetMap = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
});
var darkMap = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  attribution: "&copy; OpenStreetMap contributors, &copy; CartoDB"
});

var baseMaps = {
  "Street Map": streetMap,
  "Dark Map": darkMap
};

streetMap.addTo(myMap);  // Set the default base map

// Define the URL of the earthquake data
var earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var tectonicPlatesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// Fetch the earthquake data
fetch(earthquakeUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(earthquakeData) {
    // Create a layer group for the earthquake markers
    var earthquakes = L.layerGroup();

    // Loop through the earthquake data and create markers
    earthquakeData.features.forEach(function(feature) {
      var magnitude = feature.properties.mag;
      var depth = feature.geometry.coordinates[2];

      // Define marker options based on magnitude and depth
      var markerOptions = {
        radius: magnitude * 3,  // Size of the marker based on magnitude
        fillColor: getColor(depth),  // Color of the marker based on depth
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };

      // Create a marker with popup
      var marker = L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], markerOptions)
        .bindPopup("<h3>" + feature.properties.place +
          "</h3><hr><p>Magnitude: " + magnitude + "<br>Depth: " + depth + "</p>");

      // Add the marker to the earthquake layer group
      earthquakes.addLayer(marker);
    });

    // Fetch the tectonic plates data
    fetch(tectonicPlatesUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(tectonicPlatesData) {
        // Create a layer group for the tectonic plates
        var tectonicPlates = L.layerGroup();

        // Create a GeoJSON layer for the tectonic plates data
        L.geoJSON(tectonicPlatesData, {
          style: {
            color: "#FF0000",  // Red color for tectonic plates
            weight: 2
          }
        }).addTo(tectonicPlates);

        // Create an object of overlay layers
        var overlayMaps = {
          "Earthquakes": earthquakes,
          "Tectonic Plates": tectonicPlates
        };

        // Add layer controls to the map
        L.control.layers(baseMaps, overlayMaps).addTo(myMap);
      });
  });

// Function to determine color based on depth
function getColor(depth) {
  if (depth < 10) {
    return "#00FF00";  // Green
  } else if (depth < 30) {
    return "#FFFF00";  // Yellow
  } else if (depth < 70) {
    return "#FFA500";  // Orange
  } else {
    return "#FF0000";  // Red
  }
}