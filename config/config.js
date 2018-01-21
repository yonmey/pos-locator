const Config = {
  googleMaps: {
    apiKey: "",
    language: "fr",
    libraries: ["geometry", "places"],
    initalCoordinates: { lat: 46, lng: 2 },
    initialZoom: 6,
    markers: {
      url:
        "https://datanova.legroupe.laposte.fr/api/records/1.0/search/?dataset=base-de-donnees-locales-guichets-publics-locaux-organismes&rows=3000&facet=typeorga&facet=editeur&facet=accestype&facet=codepost&facet=datemaj&facet=departement",
      geoLocationImage:
        "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50",
      iconUrl: "https://www.birttu.com/widget/images/emoticonos-26.png"
    },
    markerClustererImagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  },
  elements: {
    searchBar: "search",
    map: "map",
    panel: "panel",
    geolocator: "geolocator"
  }
};

export default Config;
