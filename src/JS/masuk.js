document.getElementById('masukform').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Logika sederhana untuk login (Anda bisa menggantinya dengan logika yang lebih kompleks)
    if (username && password) {
        // Tampilkan avatar setelah login
        document.getElementById('avatarContainer').classList.remove('hidden');
        alert('Login berhasil!'); // Anda bisa mengganti ini dengan logika yang lebih baik
    }
});