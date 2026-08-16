/**
 * Will & Maya's wedding website.
 *
 * The only behaviour the site needs is the mobile hamburger menu, so this is
 * plain JavaScript with no jQuery or Bootstrap. Per the design outline there
 * are no scroll animations and the header does not resize.
 */
(function () {
    'use strict';

    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');

    if (!toggle || !nav) {
        return;
    }

    toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('is-open');
        toggle.classList.toggle('is-open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
})();
