# Earthquake Visualization
## Background
During this project, I had the opportunity to work on visualizing earthquake data for the United States Geological Survey (USGS). The USGS collects a vast amount of data from all over the world, and my task was to develop a meaningful way to visualize this data. By creating an effective visualization, the goal was to educate the public and other government organizations about the issues our planet faces and secure additional funding for future research and initiatives.

## Project Structure
This project is divided into two parts:

## Part 1: Create the Earthquake Visualization
In this part, I focused on visualizing the earthquake dataset provided by the USGS. The steps I followed were:

1. Obtained the earthquake dataset by visiting the USGS GeoJSON Feed and selecting a dataset to visualize.

2. Used the JSON representation of the chosen dataset to pull in the earthquake data for visualization.

3. Created a Leaflet map that plotted all the earthquakes based on their latitude and longitude coordinates.

4. Adjusted the size of the data markers to reflect the magnitude of the earthquakes, with higher magnitudes resulting in larger markers.

5. Assigned colors to the data markers based on the depth of the earthquakes, with greater depth resulting in darker colors.

6. Included popups for each marker to display additional information about the earthquake when clicked.

7. Created a legend to provide context for the map data, including depth labels and corresponding colors.

## Part 2: Gather and Plot More Data (Optional)
In this optional part, I went a step further and added a second dataset to the map to illustrate the relationship between tectonic plates and seismic activity. The additional tasks I performed were:

1. Obtained the tectonic plates dataset from the provided source.

2. Plotted the tectonic plates dataset on the map alongside the earthquakes.

3. Added different base maps to choose from, including a "Street Map" and a "Dark Map".

4. Organized the earthquake and tectonic plates datasets into separate overlays that could be turned on and off independently.

5. Implemented layer controls to provide users with the ability to switch between different base maps and toggle the earthquake and tectonic plates layers.

## Usage
To use and interact with this project:

* Clone the repository to your local machine.

* Open the index.html file in a web browser.

* The web page will display a map visualizing the earthquake data.

* You can click on the earthquake markers to view additional information about each event.

* If you completed Part 2, you will see layer controls that allow you to switch between different base maps and toggle the earthquake and tectonic plates layers.

## Conclusion
By completing this project, I have developed a comprehensive visualization of earthquake data for the USGS. The resulting map provides valuable insights into the distribution, magnitude, and depth of earthquakes around the world. Additionally, by including the tectonic plates dataset and layer controls, the map offers a more comprehensive understanding of the relationship between tectonic activity and seismic events.

This project showcases my proficiency in using Leaflet, JavaScript, and data visualization techniques to create interactive and informative maps. I am confident that this visualization will contribute to the USGS's efforts to educate the public and raise awareness about the importance of monitoring and understanding earthquake occurrences.

Feel free to explore the map and gain insights into the fascinating world of earthquakes and tectonic plates!
