/* ASSET-LINK — Booking JS */

const DAILY_RATE = 850;
const WEEKLY_RATE_MULTIPLIER = 5.5; // weekly = daily × 5.5
const INSURANCE_PCT = 0.03;
const PLATFORM_FEE_PCT = 0.05;
const DELIVERY_COST = 350;

let bookingState = {
  startDate: null,
  endDate: null,
  delivery: false,
  days: 0,
  total: 0
};

function initBooking() {
  const startInput = document.getElementById('booking-start');
  const endInput   = document.getElementById('booking-end');
  const deliverySelect = document.getElementById('delivery-select');

  if (!startInput || !endInput) return;

  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  startInput.min = today;
  endInput.min   = today;

  startInput.addEventListener('change', () => {
    // End can't be before start
    if (endInput.value && endInput.value < startInput.value) {
      endInput.value = startInput.value;
    }
    endInput.min = startInput.value || today;
    recalculate();
  });

  endInput.addEventListener('change', recalculate);

  if (deliverySelect) {
    deliverySelect.addEventListener('change', () => {
      bookingState.delivery = deliverySelect.value === 'delivery';
      recalculate();
    });
  }

  // Book button
  const bookBtn = document.getElementById('book-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', handleBookNow);
  }

  // Modal confirm button
  const confirmBtn = document.getElementById('confirm-booking-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', confirmBooking);
  }

  // Modal close
  const modalClose = document.getElementById('booking-modal-close');
  if (modalClose) {
    modalClose.addEventListener('click', closeBookingModal);
  }
  const bookingModal = document.getElementById('booking-modal');
  if (bookingModal) {
    bookingModal.addEventListener('click', e => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }
}

function recalculate() {
  const startInput = document.getElementById('booking-start');
  const endInput   = document.getElementById('booking-end');

  if (!startInput || !endInput || !startInput.value || !endInput.value) {
    updateBreakdownUI(0, 0, 0, 0, 0);
    return;
  }

  const start = new Date(startInput.value);
  const end   = new Date(endInput.value);

  if (end < start) return;

  const msPerDay = 86400000;
  const days = Math.max(1, Math.round((end - start) / msPerDay) + 1);
  bookingState.days = days;
  bookingState.startDate = startInput.value;
  bookingState.endDate   = endInput.value;

  // Rate: if 7+ days use weekly rate (daily × 5.5) else daily
  let basePrice;
  if (days >= 7) {
    const weeks = Math.floor(days / 7);
    const remainDays = days % 7;
    basePrice = weeks * (DAILY_RATE * WEEKLY_RATE_MULTIPLIER) + remainDays * DAILY_RATE;
  } else {
    basePrice = days * DAILY_RATE;
  }

  const insurance   = Math.round(basePrice * INSURANCE_PCT);
  const platformFee = Math.round(basePrice * PLATFORM_FEE_PCT);
  const delivery    = bookingState.delivery ? DELIVERY_COST : 0;
  const total       = basePrice + insurance + platformFee + delivery;

  bookingState.total = total;

  updateBreakdownUI(days, basePrice, insurance, platformFee, delivery, total);
}

function updateBreakdownUI(days, base, insurance, fee, delivery, total) {
  const el = id => document.getElementById(id);

  // Days label
  const daysLabel = el('breakdown-days-label');
  if (daysLabel) {
    if (days === 0) {
      daysLabel.textContent = 'בחר תאריכים';
    } else if (days >= 7) {
      const weeks = Math.floor(days / 7);
      const rem   = days % 7;
      daysLabel.textContent = `${weeks} שבוע${weeks > 1 ? 'ות' : ''}${rem ? ` + ${rem} ימים` : ''} (מחיר שבועי)`;
    } else {
      daysLabel.textContent = `₪${DAILY_RATE.toLocaleString('he-IL')} × ${days} ימים`;
    }
  }

  const fmt = n => '₪' + n.toLocaleString('he-IL');

  if (el('breakdown-base'))      el('breakdown-base').textContent      = days ? fmt(base) : '—';
  if (el('breakdown-insurance')) el('breakdown-insurance').textContent = days ? fmt(insurance) : '—';
  if (el('breakdown-fee'))       el('breakdown-fee').textContent       = days ? fmt(fee) : '—';
  if (el('breakdown-delivery'))  el('breakdown-delivery').textContent  = delivery ? fmt(delivery) : 'ללא';
  if (el('breakdown-total'))     el('breakdown-total').textContent     = days ? fmt(total) : '—';

  // Update book button text
  const bookBtn = document.getElementById('book-btn');
  if (bookBtn) {
    bookBtn.textContent = days ? `🔒 הזמן עכשיו — ${fmt(total)}` : '🔒 הזמן עכשיו';
  }
}

function handleBookNow() {
  const startInput = document.getElementById('booking-start');
  const endInput   = document.getElementById('booking-end');

  if (!startInput.value || !endInput.value) {
    // Flash the date fields
    [startInput, endInput].forEach(el => {
      el.style.borderColor = 'var(--error)';
      setTimeout(() => el.style.borderColor = '', 1500);
    });
    showToast('אנא בחר תאריכי השכרה', 'error');
    return;
  }

  // Populate modal summary
  const user = window.Auth ? Auth.getUser() : null;
  const fmt = n => '₪' + n.toLocaleString('he-IL');
  const formatDate = d => new Date(d).toLocaleDateString('he-IL', { day: 'numeric', month: 'long', year: 'numeric' });

  const summaryEl = document.getElementById('modal-booking-summary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="bpb-row"><span>ציוד</span><span style="font-weight:600;">ג'ון דיר 6110M</span></div>
      <div class="bpb-row"><span>תאריך התחלה</span><span>${formatDate(bookingState.startDate)}</span></div>
      <div class="bpb-row"><span>תאריך סיום</span><span>${formatDate(bookingState.endDate)}</span></div>
      <div class="bpb-row"><span>מספר ימים</span><span>${bookingState.days} ימים</span></div>
      <div class="bpb-row"><span>אמצעי איסוף</span><span>${bookingState.delivery ? 'משלוח לשדה' : 'איסוף עצמי'}</span></div>
      <div class="bpb-row total"><span>סה"כ לתשלום</span><span>${fmt(bookingState.total)}</span></div>
    `;
  }

  if (user) {
    const renterEl = document.getElementById('modal-renter-name');
    if (renterEl) renterEl.textContent = user.name;
  }

  openBookingModal();
}

function openBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
}

function confirmBooking() {
  const user = window.Auth ? Auth.getUser() : { name: 'אורח', id: 'guest' };

  const booking = {
    id: 'BK' + Date.now(),
    equipment: "ג'ון דיר 6110M",
    equipment_id: 1,
    renter_name: user ? user.name : 'אורח',
    renter_id: user ? user.id : 'guest',
    start: bookingState.startDate,
    end: bookingState.endDate,
    days: bookingState.days,
    delivery: bookingState.delivery,
    total: bookingState.total,
    status: 'pending',
    created: new Date().toISOString()
  };

  // Save to localStorage
  const existing = JSON.parse(localStorage.getItem('al_bookings') || '[]');
  existing.push(booking);
  localStorage.setItem('al_bookings', JSON.stringify(existing));

  closeBookingModal();

  // Show success toast
  showToast(`ההזמנה ${booking.id} נשלחה לאישור! בעל הציוד יאשר בתוך 2-3 שעות.`, 'success');

  // Reset form after 2s
  setTimeout(() => {
    const si = document.getElementById('booking-start');
    const ei = document.getElementById('booking-end');
    if (si) si.value = '';
    if (ei) ei.value = '';
    bookingState = { startDate: null, endDate: null, delivery: false, days: 0, total: 0 };
    updateBreakdownUI(0, 0, 0, 0, 0);
  }, 2000);
}

function showToast(message, type = 'success') {
  const existing = document.getElementById('al-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'al-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 9999;
    background: ${type === 'success' ? 'var(--primary)' : '#DC2626'};
    color: white;
    padding: 14px 22px;
    border-radius: var(--r);
    font-size: 0.9375rem;
    font-weight: 600;
    box-shadow: var(--sh-lg);
    max-width: 380px;
    line-height: 1.5;
    transform: translateY(80px);
    opacity: 0;
    transition: all 0.35s ease;
    font-family: var(--font);
    direction: rtl;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(80px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

document.addEventListener('DOMContentLoaded', initBooking);
