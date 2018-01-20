import Config from "../config/config";

export default class SearchBar {
  init() {
    const searchElement = document.getElementById(Config.elements.searchBar);

    let autocomplete = new google.maps.places.Autocomplete(searchElement);
    google.maps.event.addListener(map, "bounds_changed", () =>
      autocomplete.bindTo("bounds", map)
    );

    autocomplete.addListener("place_changed", () => {
      var place = autocomplete.getPlace();
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17); // Why 17? Because it looks good.
      }
    });
  }
}
