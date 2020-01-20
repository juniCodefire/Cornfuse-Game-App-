const logout = document.querySelector('[data-logout]');

logout.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('cornfuse_gamer_data');
    location.replace(`${window.origin}`);
});