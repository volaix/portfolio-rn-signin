import React from 'react'
import { Text, View, TouchableOpacity, Icon, Image, ImageBackground } from 'react-native'
import styled from 'styled-components/native';
import RoundedTextbox from '../components/roundedTextbox';

//props taken:


const ImageWrapper = styled.TouchableOpacity`
  alignItems: 'center';
  justifyContent: 'center';
  width: ${props => props.selected ? 90 : 65};
  height: ${props => props.selected ? 90 : 65};
  /* opacity: ${props => props.selected ? 1 : 0.7}; */
  backgroundColor: '#fff';
  borderRadius: 100;
`

const AvatarText = styled.Text`
  font-weight: 800;
  margin-bottom: 7;
  color: props.color;
  color: ${props => props.color};
  opacity: ${props => props.selected ? 1 : 0.5};
`


const RoundedInput = (props) => {
  const selected = props.currentlySelected === props.optionString

  return (
    <View style={{ alignItems: 'center' }}>

      <AvatarText 
      style={{fontSize: '11'}}
      selected={selected}
      color={props.textColor}
      >
      {props.text.toUpperCase()}
      </AvatarText>

      <ImageWrapper
        onPress={() => props.onPress(props.optionString)}
        selected={selected}
      >
        <ImageBackground
          source={props.source}
          style={{
            flex: 1,
            width: '100%',
            borderRadius: '50%',
            height: undefined,
            backgroundColor: 'rgba(0,0,0,0)',
            overflow: 'hidden',
            opacity: (selected ? 1 : 0.7)
          }}
        >
        </ImageBackground>

      </ImageWrapper>
    </View>
  )
}

export default RoundedInput