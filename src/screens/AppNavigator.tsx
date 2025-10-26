import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './HomeScreen';
import { PuzzlesScreen } from './PuzzlesScreen';
import { FlashcardsScreen } from './FlashcardsScreen';
import { ProfileScreen } from './ProfileScreen';

export const AppNavigator = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigate = (screenName: string) => {
    setCurrentScreen(screenName);
  };

  const navigation = { navigate, setCurrentScreen };

  switch (currentScreen) {
    case 'Puzzles':
      return <PuzzlesScreen />;
    case 'Flashcards':
      return <FlashcardsScreen />;
    case 'Profile':
      return <ProfileScreen />;
    default:
      return <HomeScreen navigation={navigation} />;
  }
};
