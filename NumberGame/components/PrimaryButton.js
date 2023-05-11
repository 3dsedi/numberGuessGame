import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const PrimaryButton = ({children}) => {
    function pressHandler() {
        console.log('pressed')
    }
  return (
      <View style={styles.buttonOuterContainer}>
        <Pressable style={({pressed}) => pressed? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
         onPress={pressHandler} 
         android_ripple={{color: '#640233'}}>
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
        backgroundColor: '#72063c',
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