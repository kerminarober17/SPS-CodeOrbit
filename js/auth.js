/**
 * SPS CODE ORBIT - Authentication & Session Engine
 */

const STORAGE_KEYS = {
  CURRENT_USER: 'sps_orbit_current_user',
  ALL_USERS: 'sps_orbit_users_db',
  THEME: 'sps_orbit_theme',
  USER_PROGRESS: 'sps_orbit_progress'
};

class AuthManager {
  constructor() {
    this.initDatabase();
  }

  initDatabase() {
    if (!localStorage.getItem(STORAGE_KEYS.ALL_USERS)) {
      localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(DEFAULT_USERS));
    }
    // Default active user is Shady for frictionless seamless preview
    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) {
      const defaultUser = DEFAULT_USERS[0];
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(defaultUser));
    }
  }

  getCurrentUser() {
    try {
      const userJson = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      return userJson ? JSON.parse(userJson) : DEFAULT_USERS[0];
    } catch (e) {
      return DEFAULT_USERS[0];
    }
  }

  getAllUsers() {
    try {
      const usersJson = localStorage.getItem(STORAGE_KEYS.ALL_USERS);
      return usersJson ? JSON.parse(usersJson) : DEFAULT_USERS;
    } catch (e) {
      return DEFAULT_USERS;
    }
  }

  login(username, password) {
    const users = this.getAllUsers();
    const user = users.find(u => u.username.toLowerCase() === username.trim().toLowerCase());
    
    if (!user) {
      return { success: false, message: 'Invalid username or password.' };
    }
    
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    return { success: true, user };
  }

  register({ fullName, username, password, confirmPassword, academicGroup, grade, className }) {
    if (!fullName || !username || !password || !grade || !className) {
      return { success: false, message: 'Please fill in all required fields.' };
    }

    if (password !== confirmPassword) {
      return { success: false, message: 'Passwords do not match.' };
    }

    const users = this.getAllUsers();
    if (users.some(u => u.username.toLowerCase() === username.trim().toLowerCase())) {
      return { success: false, message: 'Username is already taken.' };
    }

    const newUser = {
      id: 'user-' + Date.now(),
      username: username.trim(),
      fullName: fullName.trim(),
      role: 'student',
      academicGroup: academicGroup || 'secondary',
      grade: grade,
      class: className,
      avatar: '/assets/shady/shady.png',
      xp: 0,
      streak: 1,
      lessonsCompleted: 0,
      overallProgress: 0,
      notificationsCount: 1,
      permissions: ['can_learn', 'can_submit_challenges']
    };

    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(users));
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));

    return { success: true, user: newUser };
  }

  logout() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    window.location.href = '/login.html';
  }

  switchUserRole(role) {
    const users = this.getAllUsers();
    const user = users.find(u => u.role === role);
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      if (role === 'admin') window.location.href = '/admin/dashboard.html';
      else if (role === 'teacher') window.location.href = '/teacher/dashboard.html';
      else window.location.href = '/student/dashboard.html';
    }
  }
}

const auth = new AuthManager();
if (typeof window !== 'undefined') {
  window.auth = auth;
}
