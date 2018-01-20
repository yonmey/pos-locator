import axios from "axios";
import GoogleMapsLoader from "google-maps";

import Map from "./components/Map";
import GeoLocator from "./components/GeoLocator";
import SearchBar from "./components/SearchBar";
import Panel from "./components/Panel";
import Config from "./config/config";
import Marker from "./components/Marker";

export default class StoreLocator {
  constructor() {
    GoogleMapsLoader.KEY = Config.googleMaps.apiKey;
    GoogleMapsLoader.LANGUAGE = Config.googleMaps.language;
    GoogleMapsLoader.LIBRARIES = Config.googleMaps.libraries;
  }

  initAll() {
    GoogleMapsLoader.load(google => {
      window.google = google;

      const map = new Map();
      window.map = map.init();

      this.createMarkers();
      this.initSearchBar();
      this.initGeoLocator();
      this.initResultsPanel();
    });
  }

  initMap() {
    GoogleMapsLoader.load(google => {
      window.google = google;

      const map = new Map();
      window.map = map.init();
    });
  }

  createMarkers() {
    axios.get(Config.googleMaps.markers.url).then(res => {
      res.data.records.forEach((markerData, i) => {
        if (markerData.geometry) {
          let marker = new Marker();
          marker.createMarker(markerData);
        }
      });
    });
  }

  initSearchBar() {
    const searchBar = new SearchBar();
    searchBar.init();
  }

  initGeoLocator() {
    document
      .getElementById(Config.elements.geolocator)
      .addEventListener("click", () => {
        const geoLocator = new GeoLocator();
        geoLocator.locate();
      });
  }

  initResultsPanel() {
    const panel = new Panel();
    panel.load();
  }
}
