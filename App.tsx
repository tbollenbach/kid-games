import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GameProvider } from './src/types/GameContext';
import { AppNavigator } from './src/screens/AppNavigator';

export default function App() {
  return (
    <GameProvider>
      <StatusBar style="light" />
      <AppNavigator />
    </GameProvider>
  );
}

