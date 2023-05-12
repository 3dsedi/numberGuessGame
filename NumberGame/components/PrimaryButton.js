import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from '../constents/colors'

const PrimaryButton = ({children, onPress}) => {
    function pressHandler() {
        onPress()
    }
  return (
      <View style={styles.buttonOuterContainer}>
        <Pressable style={({pressed}) => pressed? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
         onPress={pressHandler} 
         android_ripple={{color: Colors.primary600}}>
        <Text style={styles.buttontext} >{children}</Text>
    </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create ({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer :{
        backgroundColor: Colors.primary500,
        paddingVertical:8,
        paddingHorizontal: 16,
        elevation: 3
    }, 
    buttontext:{
        color: 'white',
        textAlign: 'center'
    },
    //for ios
    pressed:{
        opacity: 0.75
    }

})