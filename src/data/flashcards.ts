import { FlashCard } from '../types';

export const flashCards: FlashCard[] = [
  // Animals
  { id: '1', front: '🐱', back: 'Cat', category: 'Animals', difficulty: 'easy' },
  { id: '2', front: '🐶', back: 'Dog', category: 'Animals', difficulty: 'easy' },
  { id: '3', front: '🐘', back: 'Elephant', category: 'Animals', difficulty: 'medium' },
  { id: '4', front: '🦁', back: 'Lion', category: 'Animals', difficulty: 'medium' },
  { id: '5', front: '🦒', back: 'Giraffe', category: 'Animals', difficulty: 'medium' },
  { id: '6', front: '🐧', back: 'Penguin', category: 'Animals', difficulty: 'hard' },
  
  // Colors
  { id: '7', front: 'What color is a banana?', back: 'Yellow', category: 'Colors', difficulty: 'easy' },
  { id: '8', front: 'What color is the sun?', back: 'Yellow', category: 'Colors', difficulty: 'easy' },
  { id: '9', front: 'What color is grass?', back: 'Green', category: 'Colors', difficulty: 'easy' },
  { id: '10', front: 'What color is the sky?', back: 'Blue', category: 'Colors', difficulty: 'easy' },
  
  // Numbers
  { id: '11', front: '1 + 1 = ?', back: '2', category: 'Math', difficulty: 'easy' },
  { id: '12', front: '2 + 2 = ?', back: '4', category: 'Math', difficulty: 'easy' },
  { id: '13', front: '5 + 3 = ?', back: '8', category: 'Math', difficulty: 'medium' },
  { id: '14', front: '10 - 4 = ?', back: '6', category: 'Math', difficulty: 'medium' },
  
  // Shapes
  { id: '15', front: 'A shape with 3 sides', back: 'Triangle', category: 'Shapes', difficulty: 'medium' },
  { id: '16', front: 'A shape with 4 equal sides', back: 'Square', category: 'Shapes', difficulty: 'medium' },
  { id: '17', front: 'A round shape', back: 'Circle', category: 'Shapes', difficulty: 'easy' },
];
