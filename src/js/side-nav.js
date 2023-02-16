const header = document.querySelector('header');
const sideNav = document.querySelector('#side-nav-container');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const viewportWidth = window.innerWidth
                     || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight
                      || document.documentElement.clientHeight;

  return (
    rect.top >= 0
        && rect.left >= 0
        && rect.bottom <= viewportHeight /* or $(window).height() */
        && rect.right <= viewportWidth /* or $(window).width() */
  );
}

function controlSideNavVisibility() {
  if (window.innerWidth >= 768) {
    sideNav.style.opacity = (isElementInViewport(header)) ? 0 : 1;
  } else {
    sideNav.display = 'none';
  }
}

const observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) {
    sideNav.style.opacity = (window.innerWidth >= 768) ? 1 : 0;
  } else {
    sideNav.style.opacity = 0;
  }
});

observer.observe(header);

window.addEventListener('DOMContentLoaded', controlSideNavVisibility);
window.addEventListener('resize', controlSideNavVisibility);
