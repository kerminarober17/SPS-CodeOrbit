/**
 * SPS CODE ORBIT - Reusable UI Component Renderer
 */

function renderSidebar(activeKey = 'dashboard') {
  const user = window.auth ? window.auth.getCurrentUser() : { fullName: 'Shady', grade: 'Secondary 2', class: 'Class D', avatar: '/assets/shady/shady.png' };
  
  const navItems = [
    { key: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard', href: '/student/dashboard.html' },
    { key: 'my-courses', label: 'My Courses', icon: 'book-open', href: '/student/courses.html' },
    { key: 'explore', label: 'Explore Courses', icon: 'compass', href: '/courses.html' },
    { key: 'challenges', label: 'Challenges', icon: 'trophy', href: '/student/challenges.html' },
    { key: 'progress', label: 'Progress', icon: 'bar-chart-2', href: '/student/progress.html' },
    { key: 'profile', label: 'Profile', icon: 'user', href: '/student/profile.html' }
  ];

  const sidebarEl = document.getElementById('app-sidebar');
  if (!sidebarEl) return;

  sidebarEl.className = 'sidebar';
  sidebarEl.innerHTML = `
    <a href="/index.html" class="sidebar-brand" id="sidebar-logo">
      <div class="sidebar-brand-icon">
        <i data-lucide="orbit" style="width: 26px; height: 26px;"></i>
      </div>
      <span>SPS Code Orbit</span>
    </a>

    <nav class="sidebar-nav" id="sidebar-nav-list">
      ${navItems.map(item => `
        <a href="${item.href}" class="nav-item ${activeKey === item.key ? 'active' : ''}" id="nav-item-${item.key}">
          <i data-lucide="${item.icon}"></i>
          <span>${item.label}</span>
        </a>
      `).join('')}
    </nav>

    <div class="sidebar-footer">
      <div class="theme-switch-row" id="theme-switch-row">
        <span>Theme</span>
        <div class="theme-toggle-group">
          <i data-lucide="sun" style="width: 16px; height: 16px;"></i>
          <div class="theme-toggle-pill" onclick="window.toggleTheme()" id="theme-toggle-btn" title="Toggle Light/Dark Theme">
            <div class="theme-toggle-dot"></div>
          </div>
          <i data-lucide="moon" style="width: 16px; height: 16px;"></i>
        </div>
      </div>

      <a href="/student/profile.html#settings" class="nav-item" id="nav-settings">
        <i data-lucide="settings"></i>
        <span>Settings</span>
      </a>

      <a href="/about.html#help" class="nav-item" id="nav-help">
        <i data-lucide="help-circle"></i>
        <span>Help & Support</span>
      </a>

      <div class="sidebar-user-card" onclick="window.location.href='/student/profile.html'" id="sidebar-user-profile">
        <img src="${user.avatar || '/assets/shady/shady.png'}" alt="${user.fullName}" class="sidebar-user-avatar" id="sidebar-user-img">
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">${user.fullName}</div>
          <div class="sidebar-user-meta">${user.grade} · ${user.class}</div>
        </div>
        <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: #64748B;"></i>
      </div>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderHeader(customGreeting = null, customSub = null) {
  const user = window.auth ? window.auth.getCurrentUser() : { fullName: 'Shady' };
  const headerEl = document.getElementById('top-header');
  if (!headerEl) return;

  const titleHtml = customGreeting || `Good morning, <span style="color: var(--color-primary);">${user.fullName}.</span>`;
  const subHtml = customSub || `Ready to continue your learning journey?`;

  headerEl.className = 'top-header';
  headerEl.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1rem;">
      <button class="mobile-nav-toggle" onclick="document.getElementById('app-sidebar').classList.toggle('open')" id="mobile-menu-btn" title="Menu">
        <i data-lucide="menu"></i>
      </button>
      <div class="header-greeting">
        <h1>${titleHtml}</h1>
        <p>${subHtml}</p>
      </div>
    </div>

    <div class="header-actions">
      <div class="notification-bell" onclick="showToast('You have 3 unread course announcements', 'info')" id="header-notif-bell" title="Notifications">
        <i data-lucide="bell" style="width: 20px; height: 20px;"></i>
        <span class="notification-badge">${user.notificationsCount || 3}</span>
      </div>
      <a href="/student/profile.html" id="header-profile-link">
        <img src="${user.avatar || '/assets/shady/shady.png'}" alt="${user.fullName}" class="header-user-avatar" id="header-user-img">
      </a>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div style="flex: 1; font-weight: 500;">${message}</div>
    <button onclick="this.parentElement.remove()" style="color: inherit; opacity: 0.7;">&times;</button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 4000);
}

window.renderSidebar = renderSidebar;
window.renderHeader = renderHeader;
window.showToast = showToast;
