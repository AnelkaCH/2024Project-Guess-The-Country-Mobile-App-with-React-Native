import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { countryList } from '../../data/Data';
 
const GuessTheCountryScreen = (props) => {
  const { navigation } = props;
 
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');   // 'correct' | 'wrong' | ''
  const [score, setScore] = useState(0);
 
  // Pick a random index from countryList
  const randomIndex = () => {
    setIndex(Math.floor(Math.random() * countryList.length));
  };
 
  const checkAnswer = () => {
    if (answer.toLowerCase() === countryList[index].country) {
      setResult('correct');
      setScore((prev) => {
        const newScore = prev + 10;
        if (newScore >= 50) {
          setTimeout(() => navigation.navigate('Win'), 800);
        }
        return newScore;
      });
    } else {
      setResult('wrong');
    }
 
    setTimeout(() => {
      setResult('');
      setAnswer('');
      randomIndex();
    }, 1500);
  };
 
  // Every time this screen comes into focus, reset game
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      randomIndex();
      setScore(0);
      setAnswer('');
      setResult('');
    });
    return unsubscribe;
  }, [navigation]);
 
  const current = countryList[index];
 
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Guess The Country</Text>
 
        {/* Score */}
        <Text style={styles.score}>Score: {score} / 50</Text>
 
        {/* Landmark image */}
        {current && (
          <Image
            style={styles.image}
            source={{ uri: current.imageLink }}
          />
        )}
 
        {/* Landmark name hint */}
        {current && (
          <View style={styles.hintBox}>
            <Text style={styles.hintText}>🏛 {current.landmark}</Text>
          </View>
        )}
 
        {/* Answer row */}
        <View style={styles.answerRow}>
          <TextInput
            style={styles.input}
            placeholder="Type country name…"
            value={answer}
            onChangeText={(text) => setAnswer(text)}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={checkAnswer}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
 
        {/* Result feedback */}
        {result !== '' && (
          <Text
            style={[
              styles.result,
              { color: result === 'correct' ? 'green' : 'red' },
            ]}
          >
            {result === 'correct' ? '✅ Correct!' : '❌ Wrong! Try next one.'}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 28,
    textDecorationLine: 'underline',
    fontFamily: 'serif',
    marginBottom: 8,
    textAlign: 'center',
  },
  score: {
    fontSize: 18,
    marginBottom: 16,
    color: '#555',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#ddd',
  },
  hintBox: {
    marginBottom: 16,
    backgroundColor: 'lavender',
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  hintText: {
    fontSize: 18,
  },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    width: '55%',
    padding: 8,
    borderRadius: 8,
    fontSize: 16,
  },
  submitBtn: {
    marginLeft: 10,
    backgroundColor: 'skyblue',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
 
export default GuessTheCountryScreen;

    