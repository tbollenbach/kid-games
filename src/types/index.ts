export interface FlashCard {
  id: string;
  front: string;
  back: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Puzzle {
  id: string;
  type: 'memory' | 'logic' | 'math';
  question: string;
  answer: string;
  options?: string[];
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface UserProgress {
  totalPoints: number;
  gamesPlayed: number;
  puzzlesCompleted: number;
  flashcardsStudied: number;
  achievements: string[];
}

export type GameType = 'puzzles' | 'flashcards' | 'points';

export type Tab = 'Home' | 'Puzzles' | 'Flashcards' | 'Profile';
