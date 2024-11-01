const initMap = () => {
    const initialLatLng = [-6.276247154826614, 106.87525804336683];
    const map = L.map('map', {
        maxZoom: 20,
        zoomControl: true,
    }).setView(initialLatLng, 17);

    // Layer peta
    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '© OpenStreetMap contributors'
    });

    const hotLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team'
    });

    const googleLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '© Google Maps'
    });

    osmLayer.addTo(map);

    // Control layers
    const baseMaps = {
        "OpenStreetMap": osmLayer,
        "OpenStreetMap HOT": hotLayer,
        "Google Maps": googleLayer
    };

    const layerControl = L.control.layers(baseMaps, null, {
        collapsed: true,
        position: 'topright'
    }).addTo(map);

    // Handle mobile layer control
    const handleLayerControl = () => {
        const controlElement = document.querySelector('.leaflet-control-layers');
        if (!controlElement) return;

        // Make sure control is above bottom navbar
        controlElement.style.zIndex = '1000';

        // Handle clicks on control
        controlElement.addEventListener('click', (e) => {
            e.stopPropagation();
            controlElement.classList.add('leaflet-control-layers-expanded');
        });

        // Handle clicks outside control
        document.addEventListener('click', (e) => {
            if (!controlElement.contains(e.target)) {
                controlElement.classList.remove('leaflet-control-layers-expanded');
            }
        });
    };

    // Custom icon
    const blueIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Marker dengan popup
    const marker = L.marker(initialLatLng, {
        draggable: false,
        icon: blueIcon
    }).addTo(map);

    marker.bindPopup("<b class='text-gray-800'>Teguh Aqiqah</b>").openPopup();

    // Update koordinat
    const updateCoordinates = () => {
        const coordElement = document.getElementById('coordinates');
        const text = window.innerWidth <= 640 ? 
            `TA: ${initialLatLng[0].toFixed(4)}, ${initialLatLng[1].toFixed(4)}` :
            `Teguh Aqiqah: ${initialLatLng[0].toFixed(6)}, ${initialLatLng[1].toFixed(6)}`;
        coordElement.textContent = text;
    };

    // Handle resize
    const handleResize = () => {
        map.invalidateSize();
        updateCoordinates();
    };

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', () => {
        handleResize();
        handleLayerControl();
    });

    marker.on('click', function() {
        this.openPopup();
    });

    // Initial update
    updateCoordinates();
};

// Initialize map when DOM is ready
document.addEventListener('DOMContentLoaded', initMap);