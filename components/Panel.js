import Config from "../config/config";
import Markers from "./Markers";

export default class Panel {
  load() {
    const panelElement = document.getElementById(Config.elements.panel);
  }

  showClosestPOS(position) {
    const markers = new Markers();
    let distance = markers.getDistanceToClosestMarker(position);

    console.log("Closest marker at", distance, "meters");
  }
}
