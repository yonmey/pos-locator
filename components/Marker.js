import Config from "../config/config";

export default class Marker {
  createMarker(markerData) {
    let infowindow = new google.maps.InfoWindow({
      content: "Render HTML here"
    });

    let marker = new google.maps.Marker({
      icon: Config.googleMaps.markers.iconUrl,
      position: {
        lat: markerData.geometry.coordinates[1],
        lng: markerData.geometry.coordinates[0]
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
}
