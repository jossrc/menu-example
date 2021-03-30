const btnsActiveMenu = Array.from(
  document.querySelectorAll('.dismiss, .overlay')
);
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const openMenu = document.querySelector('.open-menu');

btnsActiveMenu.forEach((btns) => {
  btns.addEventListener('click', () => {
    if (
      sidebar.classList.contains('active') &&
      overlay.classList.contains('active')
    ) {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    } else {
      sidebar.classList.add('active');
      overlay.classList.add('active');
    }
  });
});

openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  sidebar.classList.add('active');
  overlay.classList.add('active');

  if (document.querySelectorAll('.collapse.show')) {
    document.querySelectorAll('.collapse.show').forEach((collapsed) => {
      collapsed.classList.toggle('show');
    });
  }

  const expandedItems = document.querySelectorAll('a[aria-expanded=true]');

  if (expandedItems.length > 0) {
    expandedItems.forEach((btnExpanded) => {
      btnExpanded.setAttribute('aria-expanded', 'false');
    });
  }
});
