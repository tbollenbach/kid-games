import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useGame } from '../types/GameContext';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { progress } = useGame();

  const GameCard = ({ title, icon, color1, color2, onPress }: any) => (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <LinearGradient
        colors={[color1, color2]}
        style={styles.cardGradient}>
        <Ionicons name={icon} size={50} color="white" />
        <Text style={styles.cardText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}>
        <Text style={styles.headerTitle}>Kids Games</Text>
        <View style={styles.pointsContainer}>
          <Ionicons name="star" size={24} color="#FFD700" />
          <Text style={styles.pointsText}>{progress.totalPoints} Points</Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <GameCard
          title="Puzzles"
          icon="puzzle"
          color1="#f093fb"
          color2="#f5576c"
          onPress={() => navigation.navigate('Puzzles')}
        />
        <GameCard
          title="Flashcards"
          icon="document-text"
          color1="#4facfe"
          color2="#00f2fe"
          onPress={() => navigation.navigate('Flashcards')}
        />
        <GameCard
          title="Profile"
          icon="person"
          color1="#43e97b"
          color2="#38f9d7"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
  },
  pointsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardGradient: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
});
