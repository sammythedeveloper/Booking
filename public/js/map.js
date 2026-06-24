console.log(coordinates);
document.addEventListener("DOMContentLoaded", () => {
  if (
    typeof coordinates === "undefined" ||
    !coordinates ||
    coordinates.length < 2
  ) {
    console.error("Leaflet Error: 'coordinates' array is missing.");
    return;
  }

  // Database is [Lng, Lat] -> Explicitly flip them for Leaflet [Lat, Lng]
  const lng = coordinates[0]; // 14.485
  const lat = coordinates[1]; // 40.6281

  // Initialize map with the correct Latitude first
  const map = L.map("map").setView([lat, lng], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Place marker with Latitude first
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      `<h5>${
        document.querySelector("h3")?.innerText || "Listing Location"
      }</h5>`
    )
    .openPopup();

  setTimeout(() => {
    map.invalidateSize();
  }, 400);
});
