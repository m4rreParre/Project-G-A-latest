function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const closer = document.querySelector('.menu-closer');


    sidebar.style.left = '0';
    overlay.style.display = 'flex';
    closer.classList.add('rotate');
}
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const closer = document.querySelector('.menu-closer');


    sidebar.style.left = '-250px';
    overlay.style.display = 'none';
    closer.classList.remove('rotate');
}
