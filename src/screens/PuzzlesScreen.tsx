import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { puzzles } from '../data/puzzles';
import { useGame } from '../types/GameContext';

interface PuzzlesScreenProps {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
}

export const PuzzlesScreen: React.FC<PuzzlesScreenProps> = ({ navigation }) => {
  const { addPoints, incrementPuzzlesCompleted } = useGame();
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const currentPuzzle = puzzles[currentPuzzleIndex];

  const handleAnswer = (answer: string) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(answer);
    setHasAnswered(true);

    if (answer === currentPuzzle.answer) {
      setTimeout(() => {
        addPoints(currentPuzzle.points);
        incrementPuzzlesCompleted();
        Alert.alert('🎉 Correct!', `You earned ${currentPuzzle.points} points!`);
        nextPuzzle();
      }, 1000);
    } else {
      setTimeout(() => {
        Alert.alert('❌ Wrong!', `The correct answer is: ${currentPuzzle.answer}`);
        nextPuzzle();
      }, 1000);
    }
  };

  const nextPuzzle = () => {
    if (currentPuzzleIndex < puzzles.length - 1) {
      setCurrentPuzzleIndex(currentPuzzleIndex + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      Alert.alert('🏆 Congratulations!', 'You completed all puzzles!');
      setCurrentPuzzleIndex(0);
      setSelectedAnswer(null);
      setHasAnswered(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#4ade80';
      case 'medium': return '#fbbf24';
      case 'hard': return '#f87171';
      default: return '#94a3b8';
    }
  };

  return (
    <LinearGradient
      colors={['#f093fb', '#f5576c']}
      style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Puzzles</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>
            {currentPuzzleIndex + 1} / {puzzles.length}
          </Text>
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>
              {currentPuzzle.difficulty.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{currentPuzzle.question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {currentPuzzle.options?.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentPuzzle.answer;
            const showResult = hasAnswered && isSelected;

            let backgroundColor = '#fff';
            if (showResult && isCorrect) backgroundColor = '#4ade80';
            if (showResult && !isCorrect) backgroundColor = '#f87171';
            if (isSelected && !hasAnswered) backgroundColor = '#e0e7ff';

            return (
              <TouchableOpacity
                key={index}
                style={styles.option}
                onPress={() => handleAnswer(option)}
                disabled={hasAnswered}>
                <Text style={styles.optionText}>{option}</Text>
                {showResult && (
                  <Ionicons
                    name={isCorrect ? "checkmark-circle" : "close-circle"}
                    size={24}
                    color="white"
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  infoText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  questionCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1f2937',
  },
  optionsContainer: {
    // Removed gap for React Native compatibility
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
});
