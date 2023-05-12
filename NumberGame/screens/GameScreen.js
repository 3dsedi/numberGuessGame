import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Title from '../components/Title'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
        <Title>opponnents Guess</Title>
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

