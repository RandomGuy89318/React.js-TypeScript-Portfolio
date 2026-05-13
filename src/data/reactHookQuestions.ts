import type { QuizQuestion } from './crudQuestions';

export const reactHookQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which hook is used for side effects like API calls or DOM manipulation?",
    options: ["useState", "useEffect", "useMemo", "useContext"],
    answer: "useEffect",
    explanation: "useEffect is specifically designed to handle side effects in functional components."
  },
  {
    id: 2,
    question: "Which hook allows you to memoize a computationally expensive value?",
    options: ["useCallback", "useEffect", "useMemo", "useRef"],
    answer: "useMemo",
    explanation: "useMemo caches a calculated value between renders so you don't re-compute it unnecessarily."
  },
  {
    id: 3,
    question: "Which hook is best for keeping a mutable reference that does not trigger re-renders?",
    options: ["useState", "useRef", "useMemo", "useCallback"],
    answer: "useRef",
    explanation: "useRef returns a mutable ref object whose .current property is initialized to the passed argument. Mutating it doesn't trigger re-renders."
  }
];
