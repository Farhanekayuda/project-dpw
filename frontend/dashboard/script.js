// ---- Countdown ----
function updateCountdown() {
  const eventDate = new Date('2031-03-17');
  const today = new Date();
  today.setHours(0,0,0,0);
  const diff = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
  document.getElementById('countdown-days').textContent = diff > 0 ? diff : 0;
}
updateCountdown();

// ---- Login ----
function doLogin() {
  const name = document.getElementById('login-name').value;
  const pass = document.getElementById('login-pass').value;
  const errEl = document.getElementById('login-error');

  if (name === 'FarhanSelvia' && pass === 'password123') {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('admin-page').style.display = 'block';
    errEl.style.display = 'none';
  } else {
    errEl.style.display = 'block';
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && document.getElementById('login-page').style.display !== 'none') {
    doLogin();
  }
});

// ---- Mobile Sidebar Toggle ----
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
}

// ---- Page Navigation ----
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.getElementById('nav-' + page).classList.add('active');
  
  // Auto-close sidebar on mobile after clicking a link
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('show');
  }
}

// ---- Copy Link ----
function copyLink() {
  navigator.clipboard.writeText('https://farhan-selvia/undangan.site').catch(() => {});
  showToast('Link berhasil disalin!');
}

// ---- Toast ----
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}