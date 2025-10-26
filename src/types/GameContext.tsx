import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserProgress } from './index';

interface GameContextType {
  progress: UserProgress;
  addPoints: (points: number) => void;
  incrementGamesPlayed: () => void;
  incrementPuzzlesCompleted: () => void;
  incrementFlashcardsStudied: () => void;
  addAchievement: (achievement: string) => void;
  resetProgress: () => void;
}

const initialProgress: UserProgress = {
  totalPoints: 0,
  gamesPlayed: 0,
  puzzlesCompleted: 0,
  flashcardsStudied: 0,
  achievements: [],
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(initialProgress);

  const addPoints = (points: number) => {
    setProgress(prev => ({
      ...prev,
      totalPoints: prev.totalPoints + points,
    }));
  };

  const incrementGamesPlayed = () => {
    setProgress(prev => ({
      ...prev,
      gamesPlayed: prev.gamesPlayed + 1,
    }));
  };

  const incrementPuzzlesCompleted = () => {
    setProgress(prev => ({
      ...prev,
      puzzlesCompleted: prev.puzzlesCompleted + 1,
    }));
  };

  const incrementFlashcardsStudied = () => {
    setProgress(prev => ({
      ...prev,
      flashcardsStudied: prev.flashcardsStudied + 1,
    }));
  };

  const addAchievement = (achievement: string) => {
    setProgress(prev => ({
      ...prev,
      achievements: [...prev.achievements, achievement],
    }));
  };

  const resetProgress = () => {
    setProgress(initialProgress);
  };

  return (
    <GameContext.Provider
      value={{
        progress,
        addPoints,
        incrementGamesPlayed,
        incrementPuzzlesCompleted,
        incrementFlashcardsStudied,
        addAchievement,
        resetProgress,
      }}>
      {children}
    </GameContext.Provider>
  );
};
