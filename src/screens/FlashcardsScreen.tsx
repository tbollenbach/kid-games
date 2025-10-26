import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { flashCards } from '../data/flashcards';
import { useGame } from '../types/GameContext';

interface FlashcardsScreenProps {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
}

export const FlashcardsScreen: React.FC<FlashcardsScreenProps> = ({ navigation }) => {
  const { addPoints, incrementFlashcardsStudied } = useGame();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashCards[currentIndex];

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (currentIndex < flashCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      addPoints(5);
      incrementFlashcardsStudied();
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string[] } = {
      'Animals': ['#fbbf24', '#f59e0b'],
      'Colors': ['#ef4444', '#dc2626'],
      'Math': ['#3b82f6', '#2563eb'],
      'Shapes': ['#10b981', '#059669'],
    };
    return colors[category] || ['#8b5cf6', '#7c3aed'];
  };

  return (
    <LinearGradient
      colors={['#4facfe', '#00f2fe']}
      style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Flashcards</Text>
        <Text style={styles.counter}>
          {currentIndex + 1} / {flashCards.length}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.cardContainer}>
          {!isFlipped ? (
            <View style={styles.card}>
              <LinearGradient
                colors={getCategoryColor(currentCard.category)}
                style={styles.cardGradient}>
                <Text style={styles.category}>{currentCard.category}</Text>
                <Text style={styles.cardText}>{currentCard.front}</Text>
                <TouchableOpacity
                  style={styles.flipButton}
                  onPress={flipCard}>
                  <Ionicons name="refresh" size={24} color="white" />
                  <Text style={styles.flipButtonText}>Tap to flip</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          ) : (
            <View style={styles.card}>
              <LinearGradient
                colors={getCategoryColor(currentCard.category).reverse()}
                style={styles.cardGradient}>
                <Text style={styles.cardAnswer}>{currentCard.back}</Text>
                <TouchableOpacity
                  style={styles.flipButton}
                  onPress={flipCard}>
                  <Ionicons name="refresh" size={24} color="white" />
                  <Text style={styles.flipButtonText}>Flip back</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
        </View>

        <View style={styles.navigation}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={prevCard}
            disabled={currentIndex === 0}>
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={nextCard}>
            <Text style={styles.nextButtonText}>Next Card</Text>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={nextCard}
            disabled={currentIndex === flashCards.length - 1}>
            <Ionicons name="chevron-forward" size={30} color="white" />
          </TouchableOpacity>
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
  counter: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: 400,
  },
  cardGradient: {
    flex: 1,
    borderRadius: 20,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  category: {
    fontSize: 16,
    color: 'white',
    opacity: 0.8,
    marginBottom: 20,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 64,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  cardAnswer: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  flipButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonDisabled: {
    opacity: 0.3,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
