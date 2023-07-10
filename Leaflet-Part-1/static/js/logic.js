// Create the map centered on a specific location
var myMap = L.map("map").setView([0, 0], 2);

// Add the tile layer (base map)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(myMap);

// Define the URL of the earthquake data
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Fetch the earthquake data
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Loop through the earthquake data and create markers
    data.features.forEach(function(feature) {
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
      L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], markerOptions)
        .bindPopup("<h3>" + feature.properties.place +
          "</h3><hr><p>Magnitude: " + magnitude + "<br>Depth: " + depth + "</p>")
        .addTo(myMap);
    });

    // Create a legend
    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");

      // Define legend labels and corresponding color
      var labels = ["<10 km", "10-30 km", "30-70 km", ">70 km"];
      var colors = ["#00FF00", "#FFFF00", "#FFA500", "#FF0000"];

      // Loop through the labels and add color swatches
      for (var i = 0; i < labels.length; i++) {
        div.innerHTML +=
          '<i style="background:' + colors[i] + '"></i> ' +
          labels[i] + (labels[i + 1] ? '<br>' : '+');
      }

      return div;
    };

    // Add the legend to the map
    legend.addTo(myMap);
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