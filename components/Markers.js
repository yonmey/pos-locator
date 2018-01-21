export default class Markers {
  getClosestMarker(position) {
    function rad(x) {
      return x * Math.PI / 180;
    }

    let lat = position.lat();
    let lng = position.lng();
    let R = 6371; // radius of earth in km
    let distances = [];
    let closest = -1;

    for (let i = 0; i < markers.length; i++) {
      let mlat = markers[i].position.lat();
      let mlng = markers[i].position.lng();
      let dLat = rad(mlat - lat);
      let dLong = rad(mlng - lng);
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(lat)) *
          Math.cos(rad(lat)) *
          Math.sin(dLong / 2) *
          Math.sin(dLong / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c;
      distances[i] = d;

      if (closest == -1 || d < distances[closest]) {
        closest = i;
      }
    }

    return markers[closest];
  }

  getDistanceToClosestMarker(currentPosition) {
    let closestMarker = this.getClosestMarker(currentPosition);

    if (closestMarker) {
      let cd = google.maps.geometry.spherical.computeDistanceBetween(
        closestMarker.getPosition(),
        currentPosition
      );

      return Math.round(cd);
    }
  }
}
