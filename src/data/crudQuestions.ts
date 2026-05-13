export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const crudQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which HTTP method is typically used to CREATE a new resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "POST",
    explanation: "POST is used to submit an entity to the specified resource, often causing a change in state or side effects on the server."
  },
  {
    id: 2,
    question: "What does the 'R' in CRUD stand for?",
    options: ["Restore", "Replace", "Read", "Return"],
    answer: "Read",
    explanation: "CRUD stands for Create, Read, Update, Delete."
  },
  {
    id: 3,
    question: "When updating a resource, which method implies replacing the entire resource?",
    options: ["PATCH", "POST", "PUT", "UPDATE"],
    answer: "PUT",
    explanation: "PUT is used to replace a resource entirely, while PATCH is used for partial updates."
  }
];
