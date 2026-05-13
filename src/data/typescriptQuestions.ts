import type { QuizQuestion } from './crudQuestions';

export const typescriptQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you specify that a property is optional in a TypeScript interface?",
    options: ["property: optional type;", "property?: type;", "property: type?;", "?property: type;"],
    answer: "property?: type;",
    explanation: "Adding a '?' after the property name designates it as optional."
  },
  {
    id: 2,
    question: "What is the correct type for a state variable storing a string or null?",
    options: ["useState<string>(null)", "useState<string | null>(null)", "useState<string, null>(null)", "useState<string & null>(null)"],
    answer: "useState<string | null>(null)",
    explanation: "You use a union type (string | null) to allow the state to hold either a string or null."
  },
  {
    id: 3,
    question: "Which keyword allows you to alias an existing type?",
    options: ["type", "interface", "alias", "declare"],
    answer: "type",
    explanation: "The 'type' keyword creates a type alias, which can be used to refer to any valid TypeScript type."
  }
];
