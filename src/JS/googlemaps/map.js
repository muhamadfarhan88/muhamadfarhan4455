// Inisialisasi peta
var initialLatLng = [-6.276247154826614, 106.87525804336683]; // Koordinat Teguh Aqiqah
var map = L.map('map').setView(initialLatLng, 17); // Set view ke lokasi awal dengan zoom level 19

// Tambahkan layer peta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Tambahkan marker di lokasi default
var marker = new L.Marker(initialLatLng).addTo(map);
document.getElementById('coordinates').innerText = 'Teguh Aqiqah: ' + initialLatLng[0].toFixed(6) + ', ' + initialLatLng[1].toFixed(6);

// Event listener untuk klik peta
map.on('click', function (e) {
    if (marker) { // Periksa apakah marker sudah ada
        map.removeLayer(marker); // Hapus marker yang ada
    }
    marker = new L.Marker(e.latlng).addTo(map); // Tambahkan marker baru

    // Tampilkan koordinat di elemen
    document.getElementById('coordinates').innerText = 'Koordinat: ' + e.latlng.lat.toFixed(6) + ', ' + e.latlng.lng.toFixed(6);
});