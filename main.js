import "./style.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
import Alpine from "alpinejs";

document.addEventListener("alpine:init", () => {
  Alpine.store("menuOpen", false);
});

Alpine.start();
