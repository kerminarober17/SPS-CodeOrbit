/**
 * SPS CODE ORBIT - Users & Permissions Data Layer
 */

const ACADEMIC_STRUCTURE = {
  "primary_3_4": {
    label: "Primary 3–4",
    grades: [
      { id: "p3", label: "Primary 3", classes: ["Class 3A", "Class 3B", "Class 3C"] },
      { id: "p4", label: "Primary 4", classes: ["Class 4A", "Class 4B", "Class 4C"] }
    ]
  },
  "primary_5_6": {
    label: "Primary 5–6",
    grades: [
      { id: "p5", label: "Primary 5", classes: ["Class 5A", "Class 5B", "Class 5C"] },
      { id: "p6", label: "Primary 6", classes: ["Class 6A", "Class 6B", "Class 6C"] }
    ]
  },
  "preparatory": {
    label: "Preparatory",
    grades: [
      { id: "prep1", label: "Preparatory 1", classes: ["Class Prep 1A", "Class Prep 1B", "Class Prep 1C"] },
      { id: "prep2", label: "Preparatory 2", classes: ["Class Prep 2A", "Class Prep 2B", "Class Prep 2C"] },
      { id: "prep3", label: "Preparatory 3", classes: ["Class Prep 3A", "Class Prep 3B", "Class Prep 3C"] }
    ]
  },
  "secondary": {
    label: "Secondary",
    grades: [
      { id: "sec1", label: "Secondary 1", classes: ["Class A", "Class B", "Class C", "Class D"] },
      { id: "sec2", label: "Secondary 2", classes: ["Class A", "Class B", "Class C", "Class D"] },
      { id: "sec3", label: "Secondary 3", classes: ["Class A", "Class B", "Class C", "Class D"] }
    ]
  }
};

const DEFAULT_USERS = [
  {
    id: "user-shady",
    username: "shady",
    fullName: "Shady",
    role: "student",
    academicGroup: "secondary",
    grade: "Secondary 2",
    class: "Class D",
    avatar: "/assets/shady/shady.png",
    xp: 2450,
    streak: 7,
    lessonsCompleted: 24,
    overallProgress: 58,
    notificationsCount: 3,
    permissions: ["can_learn", "can_submit_challenges"]
  },
  {
    id: "user-teacher",
    username: "teacher_sarah",
    fullName: "Ms. Sarah Jenkins",
    role: "teacher",
    department: "Computer Science & Robotics",
    avatar: "/assets/shady/shady.png",
    permissions: ["can_view_classes", "can_assign_lessons", "can_view_analytics"]
  },
  {
    id: "user-admin",
    username: "admin",
    fullName: "Orbit Administrator",
    role: "admin",
    avatar: "/assets/cody/cody.png",
    permissions: ["can_manage_users", "can_manage_courses", "can_edit_content", "can_view_analytics", "can_configure_settings"]
  }
];

if (typeof window !== 'undefined') {
  window.ACADEMIC_STRUCTURE = ACADEMIC_STRUCTURE;
  window.DEFAULT_USERS = DEFAULT_USERS;
}
