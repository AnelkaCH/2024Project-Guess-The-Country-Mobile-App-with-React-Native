import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import { countryList } from '../../data/Data';

const GuessThatCountry = (props) => {
  const { navigation } = props;
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  const randomIndex = () => {
    setIndex(Math.floor(Math.random() * countryList.length));
  };

  const checkAnswer = () => {
    if (answer.toLowerCase() === countryList[index].country) {
      setResult('correct');
      setScore(score + 10);
    } else {
      setResult('wrong');
    }
    setTimeout(() => {
      setResult('');
      setAnswer('');
      randomIndex();
    }, 1500);
  };

  useEffect(() => {
    const homePage = navigation.addListener('focus', () => {
      randomIndex();
      setScore(0);
    });
    return homePage;
  }, []);

  useEffect(() => {
    if (score === 50) {
      navigation.navigate('Win');
    }
  }, [score]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
        <Text style={{ textDecorationLine:'underline', fontSize:28,
                        fontFamily:'serif', marginBottom:16 }}>
          Guess The Country
        </Text>
        <Text>Score: {score}</Text>
        <Image
          style={{ width:250, height:250, borderRadius:10 }}
          source={{ uri: countryList[index]?.imageLink }}
        />
        <View style={{ margin:8, backgroundColor:'lavender', padding:4, borderWidth:1 }}>
          <Text style={{ fontSize:18 }}>{countryList[index]?.landmark}</Text>
        </View>
        <View style={{ flexDirection:'row', margin:8 }}>
          <TextInput
            style={{ borderWidth:1, width:'50%' }}
            placeholder="Write your answer"
            value={answer}
            onChangeText={(text) => setAnswer(text)}
          />
          <TouchableOpacity
            style={{ borderWidth:1, alignItems:'center', justifyContent:'center',
                      borderRadius:10, padding:8, marginLeft:8,
                      backgroundColor:'skyblue' }}
            onPress={checkAnswer}
          >
            <Text style={{ fontSize:18 }}>Submit</Text>
          </TouchableOpacity>
        </View>
        {result !== '' && <Text style={{ color: result==='correct'?'green':'red' }}>
          {result === 'correct' ? 'Correct!' : 'Wrong!'}
        </Text>}
      </View>
    </ScrollView>
  );
};

export default GuessThatCountry;

    