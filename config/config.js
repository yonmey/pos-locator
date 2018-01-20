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
      iconUrl: "https://www.birttu.com/widget/images/emoticonos-26.png"
    }
  },
  elements: {
    searchBar: "search",
    map: "map",
    panel: "panel",
    geolocator: "geolocator"
  }
};

export default Config;
