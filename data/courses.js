/**
 * SPS CODE ORBIT - Courses Data Layer
 * Standardized data format ready for future Supabase migration
 */

const COURSES_DATA = [
  {
    id: "intro-programming",
    title: "Introduction to Programming",
    description: "Learn the fundamentals of coding using Python. Build logic and solve real problems.",
    academicGroup: "secondary",
    academicGroupLabel: "Secondary",
    chaptersCount: 6,
    lessonsCount: 24,
    progress: 62,
    currentChapter: "Chapter 2 · Lesson 3",
    currentLessonId: "lesson-ch2-l3",
    image: "/assets/courses/prog.png",
    accentColor: "#2563EB",
    featured: true,
    enrolled: true
  },
  {
    id: "ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    description: "Explore how AI works and build your first machine learning models.",
    academicGroup: "secondary",
    academicGroupLabel: "Secondary",
    chaptersCount: 5,
    lessonsCount: 18,
    progress: 45,
    currentChapter: "Chapter 1 · Lesson 2",
    currentLessonId: "lesson-ai-ch1-l2",
    image: "/assets/courses/ai.png",
    accentColor: "#8B5CF6",
    featured: true,
    enrolled: true
  },
  {
    id: "robotics-essentials",
    title: "Robotics Essentials",
    description: "Discover robotics components and learn to build and program autonomous robots.",
    academicGroup: "secondary",
    academicGroupLabel: "Secondary",
    chaptersCount: 4,
    lessonsCount: 16,
    progress: 30,
    currentChapter: "Chapter 1 · Lesson 1",
    currentLessonId: "lesson-rob-ch1-l1",
    image: "/assets/courses/robotics.png",
    accentColor: "#0EA5E9",
    featured: true,
    enrolled: true
  },
  {
    id: "digital-design",
    title: "Digital Design & Creativity",
    description: "Learn UI/UX principles and create interactive digital projects.",
    academicGroup: "secondary",
    academicGroupLabel: "Secondary",
    chaptersCount: 4,
    lessonsCount: 14,
    progress: 25,
    currentChapter: "Chapter 1 · Lesson 1",
    currentLessonId: "lesson-des-ch1-l1",
    image: "/assets/courses/design.png",
    accentColor: "#2563EB",
    featured: false,
    enrolled: true
  },
  {
    id: "data-structures",
    title: "Data Structures & Algorithms",
    description: "Master essential algorithms and improve your problem-solving skills.",
    academicGroup: "secondary",
    academicGroupLabel: "Secondary",
    chaptersCount: 6,
    lessonsCount: 22,
    progress: 40,
    currentChapter: "Chapter 2 · Lesson 1",
    currentLessonId: "lesson-ds-ch2-l1",
    image: "/assets/courses/algo.png",
    accentColor: "#38BDF8",
    featured: false,
    enrolled: true
  },
  {
    id: "game-dev-basics",
    title: "Game Development Basics",
    description: "Create your first 2D games and learn the core game development concepts.",
    academicGroup: "secondary",
    academicGroupLabel: "Secondary",
    chaptersCount: 5,
    lessonsCount: 20,
    progress: 15,
    currentChapter: "Chapter 1 · Lesson 1",
    currentLessonId: "lesson-game-ch1-l1",
    image: "/assets/courses/gamedev.png",
    accentColor: "#F59E0B",
    featured: false,
    enrolled: true
  },
  {
    id: "primary-tech-adventure",
    title: "Explore & Create with Code",
    description: "Spark curiosity and creativity through playful visual coding, block challenges, and robotics.",
    academicGroup: "primary_3_4",
    academicGroupLabel: "Primary 3–4",
    chaptersCount: 4,
    lessonsCount: 16,
    progress: 0,
    image: "/assets/paths/primary.png",
    accentColor: "#2563EB",
    featured: false,
    enrolled: false
  },
  {
    id: "primary-creative-ai",
    title: "Creative AI & Young Inventors",
    description: "Discover pattern recognition, voice models, and smart machines with fun interactive experiments.",
    academicGroup: "primary_5_6",
    academicGroupLabel: "Primary 5–6",
    chaptersCount: 4,
    lessonsCount: 18,
    progress: 0,
    image: "/assets/courses/ai.png",
    accentColor: "#8B5CF6",
    featured: false,
    enrolled: false
  },
  {
    id: "prep-think-program",
    title: "Think & Program: Logic Foundations",
    description: "Build strong computational foundations in logic, algorithms, flowcharting, and syntax.",
    academicGroup: "preparatory",
    academicGroupLabel: "Preparatory",
    chaptersCount: 5,
    lessonsCount: 20,
    progress: 0,
    image: "/assets/paths/prep.png",
    accentColor: "#059669",
    featured: false,
    enrolled: false
  }
];

if (typeof window !== 'undefined') {
  window.COURSES_DATA = COURSES_DATA;
}
