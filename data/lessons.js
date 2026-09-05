/**
 * SPS CODE ORBIT - Lessons Data Layer
 */

const LESSONS_DATA = {
  "lesson-ch2-l3": {
    id: "lesson-ch2-l3",
    courseId: "intro-programming",
    courseTitle: "Introduction to Programming",
    chapterId: "chapter-02",
    chapterTitle: "Variables & Data",
    chapterNumber: 2,
    lessonNumber: 3,
    totalLessonsInChapter: 5,
    title: "Changing Values",
    duration: "12 min",
    progress: 60,
    xpReward: 25,
    dialogue: {
      shady: "I changed the value, but why did the output change too?",
      cody: "Let's see what the variable is holding."
    },
    concept: {
      title: "What happens when a value changes?",
      body: "A <span class=\"keyword-highlight\">variable</span> acts like a labeled box that can hold a value. When you assign a new value to a variable, the old value is replaced. Any output or calculation that uses that variable will reflect the new value."
    },
    example: {
      title: "See it in action",
      language: "Python",
      code: "score = 10\nscore = 20\nprint(score)",
      explanation: "What happens here?<br>We create a variable called <strong>score</strong> and give it 10. Then we change it to 20. When we <strong>print(score)</strong>, Python shows the current value, which is <strong>20</strong>."
    },
    practice: {
      title: "Try it yourself",
      instruction: "Change the value of score so the program prints 50.",
      language: "Python",
      initialCode: "score = 10\nscore = 20\nprint(score)",
      expectedOutput: "50",
      successMessage: "Correct! Nice work — your program produced the expected result."
    },
    quiz: {
      title: "Check your understanding",
      prompt: "What value will score contain after this code runs?",
      code: "score = 15\nscore = score + 35\nscore = score - 10",
      options: [
        { id: "A", value: "15" },
        { id: "B", value: "25" },
        { id: "C", value: "40", isCorrect: true },
        { id: "D", value: "50" }
      ],
      correctMessage: "Great job! That's correct."
    },
    previousLessonId: "lesson-ch2-l2",
    nextLessonId: "lesson-ch2-l4",
    timeline: [
      { id: "lesson-ch2-l1", num: 1, title: "What Is a Variable?", duration: "8 min", status: "completed" },
      { id: "lesson-ch2-l2", num: 2, title: "Creating Variables", duration: "10 min", status: "completed" },
      { id: "lesson-ch2-l3", num: 3, title: "Changing Values", duration: "12 min", status: "active" },
      { id: "lesson-ch2-l4", num: 4, title: "Using Variables", duration: "10 min", status: "locked" },
      { id: "lesson-ch2-l5", num: 5, title: "Mini Challenge", duration: "15 min", status: "locked" }
    ]
  },
  "lesson-ch2-l1": {
    id: "lesson-ch2-l1",
    courseId: "intro-programming",
    courseTitle: "Introduction to Programming",
    chapterId: "chapter-02",
    chapterTitle: "Variables & Data",
    chapterNumber: 2,
    lessonNumber: 1,
    totalLessonsInChapter: 5,
    title: "What Is a Variable?",
    duration: "8 min",
    progress: 20,
    xpReward: 25,
    dialogue: {
      shady: "Where does a computer store a player's score or name?",
      cody: "In named memory containers we call variables!"
    },
    concept: {
      title: "Variables as Storage Containers",
      body: "Think of a variable as a labeled container in memory. You give it a <strong>name</strong>, and store a <strong>value</strong> inside."
    },
    example: {
      title: "See it in action",
      language: "Python",
      code: "player_name = \"Shady\"\nprint(\"Welcome \", player_name)",
      explanation: "Here <code>player_name</code> holds the string \"Shady\"."
    },
    practice: {
      title: "Try it yourself",
      instruction: "Assign your name or 'Shady' to the variable user and print it.",
      language: "Python",
      initialCode: "user = \"Shady\"\nprint(user)",
      expectedOutput: "Shady",
      successMessage: "Awesome! You created your first variable."
    },
    quiz: {
      title: "Check your understanding",
      prompt: "Which of the following is a valid variable assignment in Python?",
      code: "1) 10 = score\n2) score = 10\n3) let score == 10",
      options: [
        { id: "A", value: "10 = score" },
        { id: "B", value: "score = 10", isCorrect: true },
        { id: "C", value: "let score == 10" },
        { id: "D", value: "print score" }
      ],
      correctMessage: "Spot on! Variables must have the name on the left side of the = sign."
    },
    previousLessonId: "lesson-ch1-l4",
    nextLessonId: "lesson-ch2-l2"
  }
};

if (typeof window !== 'undefined') {
  window.LESSONS_DATA = LESSONS_DATA;
}
