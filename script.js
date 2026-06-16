/**
 * NexaHub – script.js
 * Pure JavaScript: Slideshow, Navbar, Particles, Scroll Reveal, Mobile Nav
 */

(function () {
  'use strict';

  /* ══════════════════════════════════════════
     1. HERO SLIDESHOW
  ══════════════════════════════════════════ */
  const slides      = document.querySelectorAll('.slide');
  const indicators  = document.querySelectorAll('.indicator');
  let   currentSlide = 0;
  let   slideshowTimer;
  const SLIDE_INTERVAL = 5000;

  function goToSlide(index) {
    // Remove active from current
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    indicators[currentSlide].setAttribute('aria-selected', 'false');

    // Activate new
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    indicators[currentSlide].setAttribute('aria-selected', 'true');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startSlideshow() {
    slideshowTimer = setInterval(nextSlide, SLIDE_INTERVAL);
  }

  function resetSlideshow() {
    clearInterval(slideshowTimer);
    startSlideshow();
  }

  // Indicator click handlers
  indicators.forEach(function (indicator, idx) {
    indicator.addEventListener('click', function () {
      goToSlide(idx);
      resetSlideshow();
    });
  });

  // Touch swipe support for slideshow
  let touchStartX = 0;
  const heroEl = document.getElementById('hero');
  if (heroEl) {
    heroEl.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    heroEl.addEventListener('touchend', function (e) {
      const delta = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(delta) > 40) {
        if (delta < 0) goToSlide(currentSlide + 1);
        else           goToSlide(currentSlide - 1);
        resetSlideshow();
      }
    }, { passive: true });
  }

  // Start
  startSlideshow();


  /* ══════════════════════════════════════════
     2. FLOATING PARTICLES
  ══════════════════════════════════════════ */
  const particleContainer = document.getElementById('hero-particles');
  const PARTICLE_COUNT     = 40;

  const PARTICLE_COLORS = [
    'rgba(0, 212, 255, 0.7)',
    'rgba(180, 77, 255, 0.6)',
    'rgba(0, 255, 136, 0.5)',
    'rgba(255, 107, 0, 0.5)',
    'rgba(255, 255, 255, 0.3)',
  ];

  function createParticle() {
    const p = document.createElement('div');
    p.classList.add('particle');

    const size     = Math.random() * 3 + 1;        // 1–4 px
    const left     = Math.random() * 100;           // % from left
    const delay    = Math.random() * 15;            // s
    const duration = Math.random() * 15 + 10;      // 10–25 s
    const color    = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];

    p.style.cssText = [
      'width:'             + size + 'px',
      'height:'            + size + 'px',
      'left:'              + left + '%',
      'bottom: -10px',
      'background:'        + color,
      'animation-duration:'  + duration + 's',
      'animation-delay:'     + delay + 's',
      'box-shadow: 0 0 '   + (size * 2) + 'px ' + color,
    ].join(';');

    return p;
  }

  if (particleContainer) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      fragment.appendChild(createParticle());
    }
    particleContainer.appendChild(fragment);
  }


  /* ══════════════════════════════════════════
     3. INTERACTIVE HERO LIGHT (mouse parallax)
  ══════════════════════════════════════════ */
  const heroLight = document.getElementById('hero-light');
  if (heroLight && heroEl) {
    heroEl.addEventListener('mousemove', function (e) {
      const rect  = heroEl.getBoundingClientRect();
      const xPct  = ((e.clientX - rect.left) / rect.width)  * 100;
      const yPct  = ((e.clientY - rect.top)  / rect.height) * 100;
      heroLight.style.background =
        'radial-gradient(ellipse 50% 40% at ' + xPct + '% ' + yPct + '%, rgba(0,136,255,0.1) 0%, transparent 70%),' +
        'radial-gradient(ellipse 30% 50% at ' + (100 - xPct) + '% ' + (100 - yPct) + '%, rgba(124,58,237,0.07) 0%, transparent 70%)';
    });

    heroEl.addEventListener('mouseleave', function () {
      heroLight.style.background = '';
    });
  }


  /* ══════════════════════════════════════════
     4. NAVBAR SCROLL BEHAVIOUR
  ══════════════════════════════════════════ */
  const navbar     = document.getElementById('navbar');
  const scrollHint = document.getElementById('scroll-hint');

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Navbar glass when scrolled
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 60);
    }

    // Hide scroll hint after 100px
    if (scrollHint) {
      scrollHint.style.opacity = scrollY > 100 ? '0' : '';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial call


  /* ══════════════════════════════════════════
     5. MOBILE NAV TOGGLE
  ══════════════════════════════════════════ */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on backdrop click (outside menu)
    document.addEventListener('click', function (e) {
      if (navLinks.classList.contains('open') &&
          !navLinks.contains(e.target) &&
          !navToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }


  /* ══════════════════════════════════════════
     6. SCROLL REVEAL (IntersectionObserver)
  ══════════════════════════════════════════ */
  const REVEAL_CLASSES = ['.reveal-left', '.reveal-right', '.reveal-section'];
  const revealTargets  = document.querySelectorAll(REVEAL_CLASSES.join(', '));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // Staggered delay based on element order within parent
            const siblings = Array.from(entry.target.parentElement.children);
            const idx      = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = (idx * 0.12) + 's';
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    revealTargets.forEach(function (el) {
      el.classList.add('visible');
    });
  }


  /* ══════════════════════════════════════════
     7. SMOOTH ACTIVE NAV LINK ON SCROLL
  ══════════════════════════════════════════ */
  const sections  = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollMid = (window.scrollY || window.pageYOffset) + window.innerHeight / 2;
    let activeId = '';

    sections.forEach(function (section) {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollMid >= top && scrollMid < top + height) {
        activeId = section.id;
      }
    });

    navAnchors.forEach(function (anchor) {
      const href = anchor.getAttribute('href') || '';
      anchor.classList.toggle('active-nav', href === '#' + activeId);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });


  /* ══════════════════════════════════════════
     8. CTA BUTTON RIPPLE EFFECT
  ══════════════════════════════════════════ */
  document.querySelectorAll('.btn-section, .btn-primary, .btn-ghost').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const rect   = btn.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const ripple = document.createElement('span');

      ripple.style.cssText = [
        'position: absolute',
        'border-radius: 50%',
        'width: 1px',
        'height: 1px',
        'background: rgba(255,255,255,0.25)',
        'transform: scale(0)',
        'animation: rippleExpand 0.6s ease-out forwards',
        'left: ' + x + 'px',
        'top: '  + y + 'px',
        'pointer-events: none',
      ].join(';');

      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);

      setTimeout(function () { ripple.remove(); }, 700);
    });
  });

  // Inject ripple keyframe once
  (function injectRippleStyle() {
    if (document.getElementById('ripple-style')) return;
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = '@keyframes rippleExpand { to { transform: scale(300); opacity: 0; } }';
    document.head.appendChild(style);
  }());


  /* ══════════════════════════════════════════
     9. SMOOTH SCROLL for anchor links
  ══════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });


  /* ══════════════════════════════════════════
     10. TILT EFFECT on image frames
  ══════════════════════════════════════════ */
  document.querySelectorAll('.image-frame').forEach(function (frame) {
    frame.addEventListener('mousemove', function (e) {
      const rect   = frame.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -5;
      const rotateY = ((e.clientX - centerX) / (rect.width  / 2)) *  5;
      frame.style.transform =
        'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
    });

    frame.addEventListener('mouseleave', function () {
      frame.style.transform = '';
      frame.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    frame.addEventListener('mouseenter', function () {
      frame.style.transition = 'transform 0.15s ease-out';
    });
  });


  /* ══════════════════════════════════════════
     11. KEYBOARD NAVIGATION for slideshow
  ══════════════════════════════════════════ */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  { goToSlide(currentSlide - 1); resetSlideshow(); }
    if (e.key === 'ArrowRight') { goToSlide(currentSlide + 1); resetSlideshow(); }
  });

}());
