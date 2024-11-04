// src/JS/navbar.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const navMenu = document.getElementById('nav-menu-mobile');
    const navMenuActions = document.getElementById('nav-menu-mobile-actions');
    const pesanButton = document.getElementById('pesan-button');

    // Fungsi untuk memeriksa ukuran layar dan mengatur visibilitas navbar
    function checkScreenSize() {
        if (window.innerWidth < 1024) { // 1024px adalah batas untuk lg:hidden
            navMenu.classList.remove('hidden');
            navMenuActions.classList.remove('hidden');
        } else {
            navMenu.classList.add('hidden');
            navMenuActions.classList.add('hidden');
        }
    }

    // Panggil fungsi saat halaman dimuat
    checkScreenSize();

    // Tambahkan event listener untuk resize
    window.addEventListener('resize', checkScreenSize);

    // Event listener untuk toggle button
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            navMenu.classList.toggle('hidden');
            navMenuActions.classList.toggle('hidden');
        });
    }

    // Event listener untuk tombol pesan
    if (pesanButton) {
        pesanButton.addEventListener('click', function () {
            navMenuActions.classList.toggle('hidden'); // Menampilkan atau menyembunyikan tombol Masuk dan Daftar
        });
    }
});