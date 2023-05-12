import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Colors from '../constents/colors'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>Title</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.yellow,
         textAlign: 'center', 
         borderWidth: 2,
         borderColor: '#ddb52f',
         padding: 12
    }
})