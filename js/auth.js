/* ASSET-LINK — Auth Module (localStorage-based) */

const AUTH_KEY = 'al_user';

const DEMO_USERS = {
  owner: { role: 'owner', name: 'קיבוץ שדה אליהו', id: 'owner_demo' },
  renter: { role: 'renter', name: 'ישראל ישראלי', id: 'renter_demo' },
  admin: { role: 'admin', name: 'מנהל מערכת', id: 'admin_demo' }
};

const ROLE_REDIRECTS = {
  owner: '../owner/dashboard.html',
  renter: '../marketplace.html',
  admin: '../admin/index.html'
};

// Resolve relative paths based on current page depth
function resolveRedirect(path) {
  const depth = window.location.pathname.split('/').length - 1;
  // If we're at root level (e.g. /auth.html), strip the leading ../
  if (depth <= 2) {
    return path.replace(/^\.\.\//,'');
  }
  return path;
}

function login(role, name) {
  const id = 'user_' + Date.now();
  const user = { role, name, id, loginTime: Date.now() };
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  const dest = ROLE_REDIRECTS[role] || 'index.html';
  window.location.href = resolveRedirect(dest);
}

function loginDemo(role) {
  const user = { ...DEMO_USERS[role], loginTime: Date.now() };
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  const dest = ROLE_REDIRECTS[role] || 'index.html';
  window.location.href = resolveRedirect(dest);
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
  // Go to root index
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  const prefix = depth > 1 ? '../'.repeat(depth - 1) : '';
  window.location.href = prefix + 'index.html';
}

function getUser() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e) {
    return null;
  }
}

function requireRole(role) {
  const user = getUser();
  if (!user || user.role !== role) {
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    const prefix = depth > 1 ? '../'.repeat(depth - 1) : '';
    window.location.href = prefix + 'auth.html';
    return false;
  }
  return true;
}

function isLoggedIn() {
  return !!getUser();
}

// Inject nav auth state into any page that has .nav-actions
function injectNavAuth() {
  const user = getUser();
  const navActions = document.querySelector('.nav-actions');
  if (!navActions) return;

  if (user) {
    const roleLabels = { owner: 'משכיר', renter: 'שוכר', admin: 'אדמין' };
    const roleColors = { owner: 'badge-green', renter: 'badge-earth', admin: 'badge-primary' };
    navActions.innerHTML = `
      <div class="nav-user-pill">
        <span class="nav-user-name">${escapeHtml(user.name)}</span>
        <span class="badge ${roleColors[user.role] || 'badge-gray'}">${roleLabels[user.role] || user.role}</span>
      </div>
      <a href="${getDashboardLink(user.role)}" class="btn btn-primary btn-sm">לוח בקרה</a>
      <button onclick="Auth.logout()" class="nav-login" style="cursor:pointer;">יציאה</button>
    `;
  } else {
    navActions.innerHTML = `
      <a href="${getRootPrefix()}auth.html" class="nav-login">כניסה לפלטפורמה</a>
      <a href="${getRootPrefix()}auth.html?role=owner" class="btn btn-primary btn-sm">הצג את הציוד שלך</a>
    `;
  }
}

function getDashboardLink(role) {
  const prefix = getRootPrefix();
  if (role === 'owner') return prefix + 'owner/dashboard.html';
  if (role === 'admin') return prefix + 'admin/index.html';
  return prefix + 'marketplace.html';
}

function getRootPrefix() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  // Count directories we're inside (excluding filename)
  const dirs = parts.slice(0, -1);
  // Find asset-link root
  const alIdx = dirs.indexOf('asset-link') !== -1
    ? dirs.indexOf('asset-link')
    : dirs.findIndex(p => ['owner','admin','js','css'].includes(p));
  if (alIdx === -1) return '';
  return '../'.repeat(dirs.length - alIdx - 1);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  injectNavAuth();

  // Update nav links for logged-in owner to point to owner portal
  const user = getUser();
  if (user && user.role === 'owner') {
    const dashLink = document.querySelector('.nav-link[href="dashboard.html"]');
    if (dashLink) {
      dashLink.href = getRootPrefix() + 'owner/dashboard.html';
      dashLink.textContent = 'לוח בקרה שלי';
    }
  }
});

// Export as global
window.Auth = { login, loginDemo, logout, getUser, requireRole, isLoggedIn, injectNavAuth };
