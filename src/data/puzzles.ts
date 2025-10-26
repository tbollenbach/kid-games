import { Puzzle } from '../types';

export const puzzles: Puzzle[] = [
  // Math Puzzles
  {
    id: '1',
    type: 'math',
    question: 'What is 2 + 2?',
    answer: '4',
    options: ['3', '4', '5', '6'],
    points: 10,
    difficulty: 'easy'
  },
  {
    id: '2',
    type: 'math',
    question: 'What is 5 + 3?',
    answer: '8',
    options: ['7', '8', '9', '10'],
    points: 15,
    difficulty: 'medium'
  },
  {
    id: '3',
    type: 'math',
    question: 'What is 10 - 4?',
    answer: '6',
    options: ['4', '5', '6', '7'],
    points: 15,
    difficulty: 'medium'
  },
  
  // Logic Puzzles
  {
    id: '4',
    type: 'logic',
    question: 'Which animal lives in water?',
    answer: 'Fish',
    options: ['Dog', 'Cat', 'Fish', 'Bird'],
    points: 10,
    difficulty: 'easy'
  },
  {
    id: '5',
    type: 'logic',
    question: 'What do we use to write?',
    answer: 'Pen',
    options: ['Pen', 'Spoon', 'Fork', 'Plate'],
    points: 10,
    difficulty: 'easy'
  },
  {
    id: '6',
    type: 'logic',
    question: 'What season comes after winter?',
    answer: 'Spring',
    options: ['Summer', 'Fall', 'Spring', 'Winter'],
    points: 15,
    difficulty: 'medium'
  },
  
  // Memory Puzzles
  {
    id: '7',
    type: 'memory',
    question: 'Remember: Apple, Banana, Orange. What was the first fruit?',
    answer: 'Apple',
    options: ['Apple', 'Banana', 'Orange', 'Grape'],
    points: 20,
    difficulty: 'medium'
  },
  {
    id: '8',
    type: 'memory',
    question: 'What comes after A, B, C?',
    answer: 'D',
    options: ['D', 'E', 'F', 'G'],
    points: 10,
    difficulty: 'easy'
  },
  {
    id: '9',
    type: 'math',
    question: 'What is 3 x 2?',
    answer: '6',
    options: ['5', '6', '7', '8'],
    points: 20,
    difficulty: 'hard'
  },
  {
    id: '10',
    type: 'logic',
    question: 'Which is bigger: Elephant or Mouse?',
    answer: 'Elephant',
    options: ['Elephant', 'Mouse', 'Same', 'No idea'],
    points: 10,
    difficulty: 'easy'
  },
];
