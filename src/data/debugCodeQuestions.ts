import type { QuizQuestion } from './crudQuestions';

export const debugCodeQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is wrong with this code? `const [count, setCount] = useState(0); useEffect(() => { count = count + 1; }, []);`",
    options: ["Missing dependency in array", "Mutating state directly instead of using setCount", "useEffect should be synchronous", "Nothing is wrong"],
    answer: "Mutating state directly instead of using setCount",
    explanation: "In React, state variables are immutable. You must use the setter function (setCount) to update the state."
  },
  {
    id: 2,
    question: "Why will `[1, 2, 3].map(n => { return <div>{n}</div> })` cause a React console warning?",
    options: ["Missing key prop on the root element", "map cannot return JSX elements", "Must use a fragment", "Invalid arrow function"],
    answer: "Missing key prop on the root element",
    explanation: "When rendering lists of elements, React requires a unique 'key' prop on the outermost element to track changes efficiently."
  },
  {
    id: 3,
    question: "What happens if you omit the dependency array in useEffect?",
    options: ["It runs only once on mount", "It runs on every single render", "It never runs", "It throws an error"],
    answer: "It runs on every single render",
    explanation: "Without a dependency array, useEffect executes after every render, which can cause infinite loops if it triggers a state update."
  }
];
