import Config from "./config/config";
import StoreLocator from "./StoreLocator";

document.addEventListener("DOMContentLoaded", () => {
  const sl = new StoreLocator();
  sl.initAll();
});
