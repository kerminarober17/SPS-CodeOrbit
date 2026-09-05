/**
 * SPS CODE ORBIT - Chapters Data Layer
 */

const CHAPTERS_DATA = [
  {
    id: "chapter-01",
    courseId: "intro-programming",
    number: 1,
    title: "Algorithms & The Code Orbit",
    description: "Understand how computers think, sequence commands, and run instructions.",
    icon: "</>",
    progress: 100,
    completedLessons: 4,
    totalLessons: 4,
    lessons: [
      { id: "lesson-ch1-l1", number: 1, title: "What is an Algorithm?", duration: "8 min", status: "completed" },
      { id: "lesson-ch1-l2", number: 2, title: "Sequential Execution", duration: "10 min", status: "completed" },
      { id: "lesson-ch1-l3", number: 3, title: "Debugging First Steps", duration: "12 min", status: "completed" },
      { id: "lesson-ch1-l4", number: 4, title: "Algorithm Challenge", duration: "15 min", status: "completed" }
    ],
    exam: {
      id: "exam-ch1",
      title: "Chapter 1 Exam",
      description: "Foundational exam covering algorithmic thinking and debugging.",
      cumulativeChapters: [1]
    }
  },
  {
    id: "chapter-02",
    courseId: "intro-programming",
    number: 2,
    title: "Variables & Data",
    description: "Learn how programs store, change, and use information.",
    icon: "X=",
    progress: 60,
    completedLessons: 3,
    totalLessons: 5,
    lessons: [
      { id: "lesson-ch2-l1", number: 1, title: "What Is a Variable?", description: "Understand how variables store information.", duration: "8 min", status: "completed" },
      { id: "lesson-ch2-l2", number: 2, title: "Creating Variables", description: "Create and assign values to variables.", duration: "10 min", status: "completed" },
      { id: "lesson-ch2-l3", number: 3, title: "Changing Values", description: "Learn how variables can change while a program runs.", duration: "12 min", status: "current" },
      { id: "lesson-ch2-l4", number: 4, title: "Using Variables", description: "Use variables in expressions and program logic.", duration: "10 min", status: "upcoming" },
      { id: "lesson-ch2-l5", number: 5, title: "Mini Challenge", description: "Apply what you've learned in a short challenge.", duration: "15 min", status: "upcoming" }
    ],
    exam: {
      id: "exam-ch2",
      title: "Chapter 2 Exam",
      description: "Test what you've learned so far. The exam includes material from previous chapters.",
      cumulativeChapters: [1, 2],
      xpReward: 50,
      questionsCount: 5
    },
    project: {
      id: "project-ch2",
      title: "Chapter Project (Optional)",
      description: "Apply your knowledge by building a real program.",
      xpReward: 100
    }
  },
  {
    id: "chapter-03",
    courseId: "intro-programming",
    number: 3,
    title: "Conditionals & Logic",
    description: "Make decisions in code using if, elif, and else logic gates.",
    icon: "IF",
    progress: 0,
    completedLessons: 0,
    totalLessons: 5,
    lessons: [
      { id: "lesson-ch3-l1", number: 1, title: "Boolean Logic & Comparisons", duration: "10 min", status: "locked" },
      { id: "lesson-ch3-l2", number: 2, title: "The If Statement", duration: "10 min", status: "locked" },
      { id: "lesson-ch3-l3", number: 3, title: "Else and Elif Branches", duration: "12 min", status: "locked" },
      { id: "lesson-ch3-l4", number: 4, title: "Logical Operators (AND/OR)", duration: "12 min", status: "locked" },
      { id: "lesson-ch3-l5", number: 5, title: "Decision Maze Challenge", duration: "15 min", status: "locked" }
    ],
    exam: {
      id: "exam-ch3",
      title: "Chapter 3 Exam",
      description: "Cumulative exam covering Chapters 1, 2, and 3.",
      cumulativeChapters: [1, 2, 3],
      xpReward: 50
    }
  }
];

if (typeof window !== 'undefined') {
  window.CHAPTERS_DATA = CHAPTERS_DATA;
}
