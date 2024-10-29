// Inisialisasi peta
var initialLatLng = [-6.276247154826614, 106.87525804336683];
var map = L.map('map', {
    maxZoom: 20,
    zoomControl: true
}).setView(initialLatLng, 17);

// Definisi layer-layer peta
var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '© OpenStreetMap contributors'
});

var hotLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team'
});

var googleLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '© Google Maps'
});

// Tambahkan layer default
osmLayer.addTo(map);

// Buat control layer dengan opsi collapsed
var baseMaps = {
    "OpenStreetMap": osmLayer,
    "OpenStreetMap HOT": hotLayer,
    "Google Maps": googleLayer
};

// Tambahkan control layers dengan opsi collapsed true
var layerControl = L.control.layers(baseMaps, null, {
    collapsed: true,
    position: 'topright'
}).addTo(map);

// Custom icon untuk marker
var blueIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Tambahkan marker tetap dengan popup
var marker = L.marker(initialLatLng, {
    draggable: false,
    icon: blueIcon
}).addTo(map);

// Tambahkan popup ke marker
marker.bindPopup("<b>Teguh Aqiqah</b>").openPopup();

// Tampilkan koordinat
document.getElementById('coordinates').innerText = 'Teguh Aqiqah: ' + initialLatLng[0].toFixed(6) + ', ' + initialLatLng[1].toFixed(6);

// Event ketika marker diklik
marker.on('click', function() {
    this.openPopup();
});

// Nonaktifkan event click pada peta
map.off('click');

// Handle resize untuk memastikan peta menyesuaikan dengan container
window.addEventListener('resize', function() {
    map.invalidateSize();
});

// Fungsi untuk mengatur tinggi peta
function adjustMapHeight() {
    const navbar = document.querySelector('.navbar');
    const contentWrapper = document.querySelector('.content-wrapper');
    const windowHeight = window.innerHeight;
    const navbarHeight = navbar.offsetHeight;
    contentWrapper.style.height = `${windowHeight - navbarHeight}px`;
    map.invalidateSize();
}

// Panggil fungsi saat halaman dimuat dan diresize
window.addEventListener('load', adjustMapHeight);
window.addEventListener('resize', adjustMapHeight);