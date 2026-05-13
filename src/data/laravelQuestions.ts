import type { QuizQuestion } from './crudQuestions';

export const laravelQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which Artisan command creates a model along with its migration file?",
    options: ["php artisan make:model User -m", "php artisan create:model User --migration", "php artisan model:make User -m", "php artisan make:migration User --model"],
    answer: "php artisan make:model User -m",
    explanation: "The '-m' or '--migration' flag tells Artisan to generate a database migration for the new model."
  },
  {
    id: 2,
    question: "What command generates a new controller?",
    options: ["php artisan create:controller", "php artisan make:controller", "php artisan generate:controller", "php artisan new:controller"],
    answer: "php artisan make:controller",
    explanation: "'make:controller' creates a new controller class in the app/Http/Controllers directory."
  },
  {
    id: 3,
    question: "How do you run all pending migrations?",
    options: ["php artisan db:migrate", "php artisan migrate", "php artisan migrate:run", "php artisan migrate:up"],
    answer: "php artisan migrate",
    explanation: "'php artisan migrate' applies all pending migrations to your database."
  }
];
