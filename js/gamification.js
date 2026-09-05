/**
 * SPS CODE ORBIT - Gamification & Progress Engine
 */

class GamificationManager {
  constructor() {}

  awardXP(amount, reason = 'Activity completed') {
    const user = window.auth.getCurrentUser();
    user.xp = (user.xp || 0) + amount;
    
    // Save to user storage
    const allUsers = window.auth.getAllUsers();
    const idx = allUsers.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      allUsers[idx].xp = user.xp;
      localStorage.setItem('sps_orbit_users_db', JSON.stringify(allUsers));
    }
    localStorage.setItem('sps_orbit_current_user', JSON.stringify(user));

    if (window.showToast) {
      window.showToast(`+${amount} XP! ${reason}`, 'success');
    }
    return user.xp;
  }

  completeLesson(lessonId) {
    const user = window.auth.getCurrentUser();
    user.lessonsCompleted = (user.lessonsCompleted || 0) + 1;
    this.awardXP(25, 'Lesson Complete');
    return user;
  }

  completeExam(examId, score) {
    const user = window.auth.getCurrentUser();
    this.awardXP(50, `Chapter Exam Passed (${score}%)`);
    return user;
  }
}

window.gamification = new GamificationManager();
