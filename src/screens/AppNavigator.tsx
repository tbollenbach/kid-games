import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './HomeScreen';
import { PuzzlesScreen } from './PuzzlesScreen';
import { FlashcardsScreen } from './FlashcardsScreen';
import { ProfileScreen } from './ProfileScreen';

interface NavigationContext {
  navigate: (screen: string) => void;
  goBack: () => void;
}

export const AppNavigator = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [screenHistory, setScreenHistory] = useState<string[]>([]);

  const navigate = (screenName: string) => {
    setScreenHistory([...screenHistory, currentScreen]);
    setCurrentScreen(screenName);
  };

  const goBack = () => {
    if (screenHistory.length > 0) {
      const previousScreen = screenHistory[screenHistory.length - 1];
      setScreenHistory(screenHistory.slice(0, -1));
      setCurrentScreen(previousScreen);
    }
  };

  const navigation: NavigationContext = { navigate, goBack };

  switch (currentScreen) {
    case 'Puzzles':
      return <PuzzlesScreen navigation={navigation} />;
    case 'Flashcards':
      return <FlashcardsScreen navigation={navigation} />;
    case 'Profile':
      return <ProfileScreen navigation={navigation} />;
    default:
      return <HomeScreen navigation={navigation} />;
  }
};
