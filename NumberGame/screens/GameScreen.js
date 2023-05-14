import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Title from '../components/UI/Title'
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from '../components/UI/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
  const rndnum = Math.floor(Math.random() * (max - min)) + min;
  
  if(rndnum === exclude) {
    return generateRandomBetween (min, max , exclude);
  }else {
    return rndnum
  }
  }

const GameScreen = ({userNumber}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber );
const [currentGuess, setCurrentGuess] = useState(initialGuess);

function nextGuessHandler() {
  
}
  return (
    <View style={styles.screen}>
        <Title>opponnents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text>Higher or Lower?</Text>
          <View>
          <PrimaryButton onPress={}>+</PrimaryButton>
          <PrimaryButton onPress={}>-</PrimaryButton>
          </View>
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create ({
screen: {
    flex: 1,
    padding: 24,
   
}, 

})

