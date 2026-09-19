/* ASSET-LINK — Marketplace JS */

const LISTINGS = [
  {
    id: 1, title: "ג'ון דיר 6110M — 110 כ\"ס", type: "טרקטור",
    region: "עמק יזרעאל", price_daily: 850, price_weekly: 4800,
    owner: "קיבוץ שדה אליהו", rating: 4.9, reviews_count: 38,
    available: true, condition: "מצוין",
    image_url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#2D6A4F,#40916C)",
    specs: ["2019", "110 כ\"ס", "4WD"],
    owner_type: "קיבוץ", added_days_ago: 60
  },
  {
    id: 2, title: "קלאס לקסיון 560 — קומביין", type: "קומביין",
    region: "גליל", price_daily: 3800, price_weekly: 22000,
    owner: "קיבוץ חגושה", rating: 4.8, reviews_count: 22,
    available: false, condition: "כמו חדש",
    image_url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#1B4332,#2D6A4F)",
    specs: ["2020", "390 כ\"ס", "GPS"],
    owner_type: "קיבוץ", added_days_ago: 45
  },
  {
    id: 3, title: "הרדי קומנדר 3200 — מרסס שדה", type: "ריסוס",
    region: "שפלה", price_daily: 720, price_weekly: 4100,
    owner: "כ. ויתקין", rating: 4.7, reviews_count: 15,
    available: true, condition: "טוב",
    image_url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#6B8F5E,#7A9E7E)",
    specs: ["3,200 ל'", "24 מ' טווח", "GPS"],
    owner_type: "פרטי", added_days_ago: 30
  },
  {
    id: 4, title: "קון דיסקוור XM — פלח דיסקים", type: "קלאב קאר",
    region: "נגב", price_daily: 680, price_weekly: 3900,
    owner: "חברת אגרי נגב", rating: 4.6, reviews_count: 9,
    available: true, condition: "מצוין",
    image_url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#8A9A5B,#A8B870)",
    specs: ["7.5 מ'", "2021", "הידראולי"],
    owner_type: "חברה", added_days_ago: 20
  },
  {
    id: 5, title: "היסטר H80XM — מלגזה 8 טון", type: "קלאב קאר",
    region: "שרון", price_daily: 490, price_weekly: 2800,
    owner: "מחסני אשדוד", rating: 4.5, reviews_count: 31,
    available: true, condition: "טוב מאוד",
    image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#334155,#475569)",
    specs: ["8 טון", "2018", "דיזל"],
    owner_type: "חברה", added_days_ago: 15
  },
  {
    id: 6, title: "קייס CX130D — מחפר 130 כ\"ס", type: "קלאב קאר",
    region: "נגב", price_daily: 1950, price_weekly: 10500,
    owner: "חברת עפר נגב", rating: 4.8, reviews_count: 18,
    available: true, condition: "מצוין",
    image_url: "https://images.unsplash.com/photo-1590689098671-86a1bcded7c4?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#92400E,#B45309)",
    specs: ["130 כ\"ס", "2020", "GPS"],
    owner_type: "חברה", added_days_ago: 10
  },
  {
    id: 7, title: "מכונת קטיף תמרים — 800 ק\"ג", type: "קלאב קאר",
    region: "ירדן", price_daily: 1100, price_weekly: 6200,
    owner: "קיבוץ עין גדי", rating: 4.9, reviews_count: 7,
    available: true, condition: "כמו חדש",
    image_url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#78350F,#92400E)",
    specs: ["800 ק\"ג/שעה", "2022", "חשמלי"],
    owner_type: "קיבוץ", added_days_ago: 5
  },
  {
    id: 8, title: "קטרפילר C18 ACERT — גנרטור 550 kVA", type: "קלאב קאר",
    region: "שרון", price_daily: 1200, price_weekly: 6800,
    owner: "חברת כוח חשמל", rating: 4.7, reviews_count: 25,
    available: true, condition: "מצוין",
    image_url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#1E3A5F,#2563EB)",
    specs: ["550 kVA", "2019", "אוטומטי"],
    owner_type: "חברה", added_days_ago: 8
  },
  {
    id: 9, title: "ניו הולנד Braud — קוצר זיתים", type: "קומביין",
    region: "גליל", price_daily: 2300, price_weekly: 13500,
    owner: "קיבוץ יגור", rating: 5.0, reviews_count: 4,
    available: true, condition: "כמו חדש",
    image_url: "https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#4A7C59,#6B8F5E)",
    specs: ["4.5 מ'", "2021", "עצמאי"],
    owner_type: "קיבוץ", added_days_ago: 25
  },
  {
    id: 10, title: "נטפים — מערכת טפטפות 50 דונם", type: "זורע",
    region: "ירדן", price_daily: 380, price_weekly: 2200,
    owner: "חקלאי ספיר", rating: 4.6, reviews_count: 11,
    available: true, condition: "כמו חדש",
    image_url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#0369A1,#0EA5E9)",
    specs: ["50 דונם", "2022", "אוטומטי"],
    owner_type: "פרטי", added_days_ago: 12
  },
  {
    id: 11, title: "ניו הולנד T7.270 — 270 כ\"ס", type: "טרקטור",
    region: "ירדן", price_daily: 1100, price_weekly: 6200,
    owner: "מושב בקעות", rating: 4.8, reviews_count: 12,
    available: true, condition: "כמו חדש",
    image_url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#1B4332,#40916C)",
    specs: ["2021", "270 כ\"ס", "4WD"],
    owner_type: "פרטי", added_days_ago: 35
  },
  {
    id: 12, title: "קומצו D65EX-18 — דחפור 200 כ\"ס", type: "באלר",
    region: "נגב", price_daily: 2800, price_weekly: 15500,
    owner: "חברת עפר ערד", rating: 4.7, reviews_count: 8,
    available: false, condition: "מצוין",
    image_url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=420&q=75",
    bg: "linear-gradient(135deg,#1C1917,#44403C)",
    specs: ["200 כ\"ס", "2020", "Track"],
    owner_type: "חברה", added_days_ago: 3
  }
];

let filteredListings = [...LISTINGS];

function getTypeFilters() {
  return Array.from(document.querySelectorAll('#filter-types input:checked')).map(cb => cb.value);
}
function getRegionFilters() {
  return Array.from(document.querySelectorAll('#filter-regions input:checked')).map(cb => cb.value);
}
function getPriceMax() {
  const slider = document.getElementById('price-slider');
  return slider ? parseInt(slider.value) : 99999;
}
function getSearchText() {
  const el = document.getElementById('mp-search');
  return el ? el.value.trim().toLowerCase() : '';
}
function getSortValue() {
  const el = document.getElementById('sort-select');
  return el ? el.value : 'recommended';
}

function applyFilters() {
  const types = getTypeFilters();
  const regions = getRegionFilters();
  const maxPrice = getPriceMax();
  const search = getSearchText();

  filteredListings = LISTINGS.filter(item => {
    if (types.length && !types.includes(item.type)) return false;
    if (regions.length && !regions.includes(item.region)) return false;
    if (item.price_daily > maxPrice) return false;
    if (search && !item.title.toLowerCase().includes(search) &&
        !item.type.toLowerCase().includes(search) &&
        !item.region.toLowerCase().includes(search) &&
        !item.owner.toLowerCase().includes(search)) return false;
    return true;
  });

  applySort();
  renderCards();
  updateResultsCount();
}

function applySort() {
  const sort = getSortValue();
  if (sort === 'price-asc') {
    filteredListings.sort((a, b) => a.price_daily - b.price_daily);
  } else if (sort === 'price-desc') {
    filteredListings.sort((a, b) => b.price_daily - a.price_daily);
  } else if (sort === 'rating') {
    filteredListings.sort((a, b) => b.rating - a.rating || b.reviews_count - a.reviews_count);
  } else if (sort === 'newest') {
    filteredListings.sort((a, b) => a.added_days_ago - b.added_days_ago);
  }
  // default: recommended — keep original order among filtered
}

function renderCards() {
  const grid = document.getElementById('eq-grid');
  if (!grid) return;

  if (filteredListings.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:64px 0; color:var(--n-400);">
        <div style="font-size:3rem; margin-bottom:16px;">🔍</div>
        <h4 style="color:var(--n-600); margin-bottom:8px;">לא נמצאו תוצאות</h4>
        <p style="font-size:0.9rem;">נסה לשנות את הפילטרים או החיפוש</p>
        <button class="btn btn-ghost mt-4" onclick="clearAllFilters()">נקה הכל</button>
      </div>`;
    return;
  }

  grid.innerHTML = filteredListings.map(item => buildCard(item)).join('');

  // Animate cards in with IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  grid.querySelectorAll('.equipment-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
    observer.observe(card);
  });

  // heart toggles
  grid.querySelectorAll('.ec-heart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const saved = btn.getAttribute('data-saved') === 'true';
      btn.setAttribute('data-saved', !saved);
      btn.textContent = saved ? '♡' : '♥';
      btn.style.color = saved ? '' : '#E53E3E';
    });
  });
}

function buildCard(item) {
  const availBadge = item.available
    ? '<span class="badge badge-success">זמין</span>'
    : '<span class="badge badge-warning">לא זמין</span>';
  const stars = '★'.repeat(Math.floor(item.rating)) + (item.rating % 1 >= 0.5 ? '½' : '');
  return `
    <a href="listing.html" class="equipment-card animate-in">
      <div class="ec-image" style="background:${item.bg}">
        <img src="${item.image_url}" alt="${item.title}" loading="lazy">
        <div class="ec-badges">
          <span class="badge badge-verified">✓ מאומת</span>
          ${availBadge}
        </div>
        <button class="ec-heart">♡</button>
      </div>
      <div class="ec-body">
        <div class="ec-category">${item.type}</div>
        <div class="ec-title">${item.title}</div>
        <div class="ec-meta">
          <span>📍 ${item.region}</span>
          <span>🏘️ ${item.owner_type}</span>
        </div>
        <div class="ec-specs">${item.specs.map(s => `<span class="spec-tag">${s}</span>`).join('')}</div>
        <div class="ec-price-row">
          <div>
            <div class="price-day">₪${item.price_daily.toLocaleString('he-IL')} <span>/ יום</span></div>
            <div class="price-week">₪${item.price_weekly.toLocaleString('he-IL')} / שבוע</div>
          </div>
          <div class="rating">
            <span class="stars">${stars}</span>
            <span class="rating-score">${item.rating}</span>
            <span class="rating-count">(${item.reviews_count})</span>
          </div>
        </div>
      </div>
    </a>`;
}

function updateResultsCount() {
  const el = document.getElementById('results-count');
  if (el) {
    el.innerHTML = `מציג <strong>${filteredListings.length}</strong> מתוך ${LISTINGS.length} תוצאות`;
  }
}

function clearAllFilters() {
  document.querySelectorAll('#filter-types input, #filter-regions input').forEach(cb => cb.checked = false);
  const slider = document.getElementById('price-slider');
  if (slider) { slider.value = slider.max; updatePriceDisplay(); }
  const search = document.getElementById('mp-search');
  if (search) search.value = '';
  const sort = document.getElementById('sort-select');
  if (sort) sort.value = 'recommended';
  applyFilters();
}

function updatePriceDisplay() {
  const slider = document.getElementById('price-slider');
  const display = document.getElementById('price-display');
  if (slider && display) {
    display.textContent = '₪' + Number(slider.value).toLocaleString('he-IL');
    const pct = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to left, var(--primary-400) 0%, var(--primary-400) ${pct}%, var(--n-200) ${pct}%)`;
  }
}

// Map modal
function showMapModal() {
  const modal = document.getElementById('map-modal');
  if (modal) modal.style.display = 'flex';
}
function hideMapModal() {
  const modal = document.getElementById('map-modal');
  if (modal) modal.style.display = 'none';
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  applyFilters();

  // Wire up filter checkboxes
  document.querySelectorAll('#filter-types input, #filter-regions input').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

  // Price slider
  const slider = document.getElementById('price-slider');
  if (slider) {
    slider.addEventListener('input', () => { updatePriceDisplay(); applyFilters(); });
    updatePriceDisplay();
  }

  // Search input
  const searchInput = document.getElementById('mp-search');
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
    // Also handle the hero search
    searchInput.form && searchInput.form.addEventListener('submit', e => { e.preventDefault(); applyFilters(); });
  }

  // Hero search form submit
  const heroSearchBtn = document.querySelector('.hs-btn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', e => {
      e.preventDefault();
      const heroInput = document.querySelector('.hs-input[data-search]');
      if (heroInput && searchInput) {
        searchInput.value = heroInput.value;
      }
      applyFilters();
      document.querySelector('.marketplace-body').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Sort
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);

  // Clear button
  const clearBtn = document.getElementById('clear-filters');
  if (clearBtn) clearBtn.addEventListener('click', clearAllFilters);

  // Map toggle
  const mapBtn = document.getElementById('map-toggle-btn');
  if (mapBtn) mapBtn.addEventListener('click', showMapModal);

  // Map modal close
  const mapClose = document.getElementById('map-modal-close');
  if (mapClose) mapClose.addEventListener('click', hideMapModal);
  const mapModal = document.getElementById('map-modal');
  if (mapModal) mapModal.addEventListener('click', e => { if (e.target === mapModal) hideMapModal(); });
});
