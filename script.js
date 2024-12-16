function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const closer = document.querySelector('.menu-closer');
    const links = document.querySelectorAll('.sidebar > li > a');

    links.forEach(link => {
        link.style.width = '100%';
    });
    sidebar.style.left = '0';
    overlay.style.display = 'flex';
    closer.classList.add('rotate');
}
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const closer = document.querySelector('.menu-closer');
    const links = document.querySelectorAll('.sidebar > li > a');

    links.forEach(link => {
        link.style.width = 'fit-content';
    });
    sidebar.style.left = '-250px';
    overlay.style.display = 'none';
    closer.classList.remove('rotate');
}
