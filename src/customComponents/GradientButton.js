// import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo';

const GradientButton = (props) => {
  return (
    // Within your render function
    <LinearGradient
      colors={['rgba(241,70,60,1)', 'rgba(246,146,39,1)']}
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        width: 250,
        height: 40,
        justifyContent: 'center',
      }}
      start={[0, 0]} 
      end={[1, 0]}
      
    >
      <Text style={{
        fontSize: 12,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight: "900",
      }}>
        SIGNUP
  </Text>
    </LinearGradient>
  )
}

export default GradientButton