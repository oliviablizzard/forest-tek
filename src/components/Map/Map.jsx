import React, { useEffect } from 'react';
import './Map.scss'; // Optional: Create a CSS file for additional styles

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
};

let map; // Define map outside the component to track its instance

const MapComponent = () => {
  useEffect(() => {
    // Load necessary scripts for the map in order
    const scripts = [
      '/resources/qgis2web_expressions.js',
      '/resources/functions.js',
      '/resources/ol.js',
      '/resources/ol-layerswitcher.js',
      '/resources/Autolinker.min.js',
      '/resources/qgis2web.js',
    ];

    const loadScriptsSequentially = async () => {
      for (const script of scripts) {
        await loadScript(script);
      }
      initializeMap(); // Initialize the map after all scripts are loaded
    };

    const initializeMap = () => {
      const ol = window.ol; // Ensure OpenLayers is available
      if (!map) { // Check if map already exists
        map = new ol.Map({
          target: 'map', // The id of the map div
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM(),
            }),
          ],
          view: new ol.View({
            center: ol.proj.fromLonLat([-100, 40]), // Set to your desired coordinates
            zoom: 4,
          })
        });
      } else {
        map.setTarget('map'); // If already initialized, set the target again
      }
    };

    loadScriptsSequentially().catch((error) => {
      console.error(error); // Handle script loading errors
    });

    return () => {
      // Cleanup: remove the map if necessary
      if (map) {
        map.setTarget(undefined); // Clear the target to avoid memory leaks
        map = null; // Reset the map instance
      }
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div>
      <h1>Map View</h1>
      <div id="map" style={{ width: '100%', height: '500px' }}>
        {/* The map will render here */}
      </div>
    </div>
  );
};

export default MapComponent;