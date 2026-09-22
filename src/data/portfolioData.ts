import { SkillItem, ProjectItem, JourneyStep } from '../types';

export const PERSONAL_INFO = {
  name: "Ummu Salma",
  title: "Aspiring AI Engineer | B.Tech Computer Science Student",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    year: "First-Year Student",
  },
  careerStage: "Early-stage computer science student building foundational skills in programming, web development, artificial intelligence, and Generative AI.",
  tagline: "Learning. Building. Growing in AI.",
  aboutText: "Hi, I'm Ummu Salma, a first-year B.Tech Computer Science student and an aspiring AI Engineer. I am currently building my foundation in Python, web development, and Generative AI. I enjoy learning through practical projects and exploring how technology can be used to solve real-world problems. My goal is to continuously improve my programming skills, build meaningful projects, and grow toward a career in Artificial Intelligence and Machine Learning.",
  socials: {
    github: "https://github.com/Ummusalma-cloud",
    linkedin: "https://www.linkedin.com/in/p-m-ummu-salma-3b5703432/",
  },
  footerQuote: "Built with curiosity and a passion for learning AI.",
  copyrightYear: 2026,
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "skill-python",
    name: "Python",
    level: "Basic",
    category: "Core Language",
    description: "Writing scripts, utilizing conditional statements, variables, loops, functions, and standard input/output handling.",
    iconName: "Terminal",
  },
  {
    id: "skill-web-dev",
    name: "Web Development",
    level: "Basic",
    category: "Frontend",
    description: "Understanding HTML structure, CSS styling, responsive layout principles, and foundational web scripting.",
    iconName: "Laptop",
  },
  {
    id: "skill-gen-ai",
    name: "Generative AI",
    level: "Beginner",
    category: "AI & ML",
    description: "Exploring Large Language Models, prompt engineering concepts, and foundational generative technologies.",
    iconName: "BrainCircuit",
  },
  {
    id: "skill-problem-solving",
    name: "Problem Solving",
    category: "Thinking",
    description: "Breaking down computational problems logically and designing step-by-step algorithmic solutions.",
    iconName: "Sparkles",
  },
  {
    id: "skill-programming-fundamentals",
    name: "Programming Fundamentals",
    category: "Foundations",
    description: "Control flow, data structures basics, clean syntax, debugging logic, and algorithmic thinking.",
    iconName: "Code2",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "project-grade-calc",
    title: "Student Grade Calculator",
    description: "A beginner-friendly Python project that calculates a student's grades based on their marks. The project demonstrates basic Python programming, calculations, conditional statements, and logical thinking.",
    technology: "Python",
    level: "Beginner",
    projectUrl: "#project-link",
    highlights: [
      "Calculates average percentage from user inputs",
      "Assigns grades using if-elif-else conditional logic",
      "Demonstrates clean variable naming and input validation",
    ],
    codeSnippet: `# Student Grade Calculator
# Technology: Python (Beginner Level)

def calculate_grade(marks):
    if marks >= 90:
        return "A (Outstanding)"
    elif marks >= 80:
        return "B (Very Good)"
    elif marks >= 70:
        return "C (Good)"
    elif marks >= 60:
        return "D (Pass)"
    else:
        return "F (Needs Improvement)"

def main():
    print("=== Student Grade Calculator ===")
    try:
        score = float(input("Enter marks obtained (0 - 100): "))
        if 0 <= score <= 100:
            grade = calculate_grade(score)
            print(f"Result: {grade}")
        else:
            print("Please enter a valid score between 0 and 100.")
    except ValueError:
        print("Invalid input! Please enter a numerical value.")

if __name__ == "__main__":
    main()`,
  },
  {
    id: "project-voting-calc",
    title: "Voting Eligibility Calculator",
    description: "A simple Python project that determines whether a person is eligible to vote based on their age. The project demonstrates conditional statements, user input, and basic programming logic.",
    technology: "Python",
    level: "Beginner",
    projectUrl: "#project-link",
    highlights: [
      "Reads citizen age through terminal input",
      "Applies comparison operators (age >= 18)",
      "Handles numeric edge cases with friendly feedback",
    ],
    codeSnippet: `# Voting Eligibility Calculator
# Technology: Python (Beginner Level)

def check_voting_eligibility(age):
    VOTING_AGE = 18
    if age >= VOTING_AGE:
        return True, f"Eligible to vote! You are {age} years old."
    else:
        years_left = VOTING_AGE - age
        return False, f"Not eligible yet. You need to wait {years_left} more year(s)."

def main():
    print("=== Voting Eligibility Calculator ===")
    try:
        user_age = int(input("Please enter your age: "))
        if user_age > 0:
            is_eligible, message = check_voting_eligibility(user_age)
            print(message)
        else:
            print("Age must be a positive number.")
    except ValueError:
        print("Invalid entry! Please enter a valid integer for age.")

if __name__ == "__main__":
    main()`,
  },
];

export const LEARNING_JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "Programming Foundations",
    description: "Learning Python and strengthening programming fundamentals.",
    skillsFocus: ["Python Syntax", "Data Types", "Conditionals & Loops", "Logic Building"],
  },
  {
    number: "02",
    title: "Building Projects",
    description: "Creating small practical projects to apply what I learn.",
    skillsFocus: ["Mini Calculators", "Console Apps", "Web Basics", "Git & GitHub"],
  },
  {
    number: "03",
    title: "Exploring AI",
    description: "Learning about Generative AI, Artificial Intelligence, and Machine Learning.",
    skillsFocus: ["LLM Fundamentals", "Prompt Engineering", "Intro to ML Concepts", "Ethics in AI"],
  },
];
