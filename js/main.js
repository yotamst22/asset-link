/* ASSET-LINK — Shared JavaScript */

// Nav scroll effect
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Heart / wishlist toggle
  document.querySelectorAll('.ec-heart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const saved = btn.getAttribute('data-saved') === 'true';
      btn.setAttribute('data-saved', !saved);
      btn.textContent = saved ? '♡' : '♥';
      btn.style.color = saved ? '' : '#E53E3E';
    });
  });

  // Equipment card hover — image fallback
  document.querySelectorAll('.ec-image img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      const placeholder = this.nextElementSibling;
      if (placeholder) placeholder.style.display = 'flex';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Animate on scroll (simple intersection observer)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

  // Range slider (price filter)
  const rangeInputs = document.querySelectorAll('.price-range input[type="range"]');
  rangeInputs.forEach(input => {
    input.addEventListener('input', function() {
      const display = document.getElementById(this.dataset.display);
      if (display) display.textContent = '₪' + Number(this.value).toLocaleString('he-IL');
    });
  });

  // Multi-step form
  const formSteps = document.querySelectorAll('.form-panel');
  const stepDots  = document.querySelectorAll('.form-step-item');
  let currentStep = 0;

  function goToStep(n) {
    formSteps.forEach((p, i) => p.style.display = i === n ? 'block' : 'none');
    stepDots.forEach((d, i) => {
      d.classList.toggle('active', i === n);
      d.classList.toggle('done',   i < n);
    });
    currentStep = n;
  }

  if (formSteps.length) goToStep(0);

  document.querySelectorAll('[data-next]').forEach(btn => {
    btn.addEventListener('click', () => goToStep(Math.min(currentStep + 1, formSteps.length - 1)));
  });
  document.querySelectorAll('[data-prev]').forEach(btn => {
    btn.addEventListener('click', () => goToStep(Math.max(currentStep - 1, 0)));
  });

  // Calendar interaction
  document.querySelectorAll('.cal-day.available').forEach(day => {
    day.addEventListener('click', function() {
      document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Tab switcher
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const group = this.closest('.tabs');
      if (!group) return;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const target = this.dataset.tab;
      group.querySelectorAll('.tab-panel').forEach(p => {
        p.style.display = p.dataset.panel === target ? 'block' : 'none';
      });
    });
  });

  // Filter toggle on mobile
  const filterToggle = document.getElementById('filter-toggle');
  const filterSidebar = document.getElementById('filter-sidebar');
  if (filterToggle && filterSidebar) {
    filterToggle.addEventListener('click', () => {
      filterSidebar.classList.toggle('open');
    });
  }

  // Notification counter animation
  const counters = document.querySelectorAll('[data-count-up]');
  if (counters.length) {
    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.countUp);
          const isFloat = el.dataset.countUp.includes('.');
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          const duration = 1600;
          const start = performance.now();
          const update = (time) => {
            const elapsed = time - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = target * ease;
            el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString('he-IL')) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }
});

// CSS animations
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .animate-in.is-visible {
    opacity: 1;
    transform: none;
  }
  .animate-in:nth-child(2) { transition-delay: 0.1s; }
  .animate-in:nth-child(3) { transition-delay: 0.2s; }
  .animate-in:nth-child(4) { transition-delay: 0.3s; }
  .animate-in:nth-child(5) { transition-delay: 0.4s; }
  .animate-in:nth-child(6) { transition-delay: 0.5s; }

  .tab-panel { display: none; }
  .tab-btn {
    padding: 10px 20px;
    border-radius: var(--r-full);
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--n-600);
    cursor: pointer;
    transition: var(--ease);
    background: transparent;
    border: none;
    font-family: var(--font);
  }
  .tab-btn.active {
    background: var(--primary);
    color: white;
  }
  .tabs-bar {
    display: flex;
    gap: 4px;
    background: var(--n-100);
    border-radius: var(--r-full);
    padding: 4px;
    width: fit-content;
  }
`;
document.head.appendChild(style);
