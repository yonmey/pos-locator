import Config from "../config/config";
const template = require("./InfoWindowTpl.ejs");

export default class Marker {
  createMarker(markerData) {
    let compiledHTML = template({
      name: markerData.fields.nom, // todo change specific name
      address: markerData.fields.adresse, // todo change specific name
      phone: markerData.fields.tel, // todo change specific name
      email: markerData.fields.mail // todo change specific name
    });

    let infowindow = new google.maps.InfoWindow({
      content: compiledHTML
    });

    let marker = new google.maps.Marker({
      icon: Config.googleMaps.markers.iconUrl,
      position: {
        lat: markerData.geometry.coordinates[1], // todo change specific name
        lng: markerData.geometry.coordinates[0] // todo change specific name
      },
      map: map
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
      map.setCenter(marker.getPosition());
      map.setZoom(17);
    });

    return marker;
  }

  createGeoLocatedMarker(position) {
    if (position instanceof google.maps.LatLng) {
      return new google.maps.Marker({
        icon: Config.googleMaps.markers.geoLocationImage,
        position: position,
        map: map
      });
    }
  }
}
