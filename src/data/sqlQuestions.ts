import type { QuizQuestion } from './crudQuestions';

export const sqlQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which SQL statement is used to extract data from a database?",
    options: ["EXTRACT", "SELECT", "GET", "OPEN"],
    answer: "SELECT",
    explanation: "The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set."
  },
  {
    id: 2,
    question: "Which SQL clause is used to filter records?",
    options: ["FILTER", "WHERE", "ORDER BY", "HAVING"],
    answer: "WHERE",
    explanation: "The WHERE clause is used to extract only those records that fulfill a specified condition."
  },
  {
    id: 3,
    question: "Which SQL statement modifies existing records?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    answer: "UPDATE",
    explanation: "The UPDATE statement changes values in existing rows within a table."
  },
  {
    id: 4,
    question: "What keyword is used to sort the result-set?",
    options: ["SORT BY", "ORDER", "ORDER BY", "ALIGN"],
    answer: "ORDER BY",
    explanation: "The ORDER BY keyword is used to sort the result-set in ascending or descending order."
  }
];
