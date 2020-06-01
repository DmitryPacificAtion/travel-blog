(function () {
  const menuItems = Object.values(document.querySelectorAll('.menu__item'));
  const submenuItems = Object.values(document.querySelectorAll('.submenu__item'));

  const menuItemHandler = e => {
    e.stopPropagation();
    const isActive = e.target.classList.contains('active');
    menuItems.forEach(item => item.classList.remove('active'));
    e.target.classList.toggle('active', !isActive);
  };

  const submenuItemHandler = e => {
    e.stopPropagation();
    const isActive = e.target.classList.contains('active');
    submenuItems.forEach(item => item.classList.remove('active'));
    e.target.classList.toggle('active', !isActive);
  };

  menuItems.forEach((list) => list.addEventListener('click', menuItemHandler));
  submenuItems.forEach((list) => list.addEventListener('click', submenuItemHandler));
})();
