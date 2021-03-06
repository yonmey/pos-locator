import Config from "../config/config";
import Marker from "./Marker";

export default class GeoLocator {
  getCurrentPosition() {
    if (navigator.geolocation) {
      let positionPromise = () =>
        new Promise((res, rej) => {
          navigator.geolocation.getCurrentPosition(res, rej);
        });

      return positionPromise().then(currentPosition => {
        let latLntPosition = new google.maps.LatLng({
          lat: currentPosition.coords.latitude,
          lng: currentPosition.coords.longitude
        });

        return latLntPosition;
      });
    }
  }

  locate() {
    return this.getCurrentPosition().then(currentPosition => {
      map.setCenter(currentPosition);
      map.setZoom(17);

      let currentPositionMarker = new Marker();
      currentPositionMarker.createGeoLocatedMarker(currentPosition);

      return currentPosition;
    });
  }
}
