// File: navigation.js
document.addEventListener('alpine:init', () => {
    Alpine.data('navigation', () => ({
        navopen: true,
        open: false,
        toggleNav() {
            this.navopen = !this.navopen;
        },
        toggleOpen() {
            this.open = !this.open;
        }
    }));
});