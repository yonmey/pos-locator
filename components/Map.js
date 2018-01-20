import Config from "../config/config";

export default class Map {
  init() {
    const mapElement = document.getElementById(Config.elements.map);

    return new google.maps.Map(mapElement, {
      center: Config.googleMaps.initalCoordinates,
      zoom: Config.googleMaps.initialZoom
    });
  }
}
