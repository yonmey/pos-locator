import Config from "../config/config";

export default class Map {
  init() {
    const mapElement = document.getElementById(Config.elements.map);

    return new google.maps.Map(mapElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
}
