import React from 'react'
import { Text, View, Image, ImageBackground, TextInput } from 'react-native'
import {Icon} from 'react-native-elements'
import styled from 'styled-components/native';
import { SUBTITLE_COLOR } from '../constants';

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
const inputStyle = {
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: SUBTITLE_COLOR,
  borderBottomColor: SUBTITLE_COLOR, //necessary because of white being specified as default
  borderRadius: 30,
  height: 40,
  width: 250,
  justifyContent: 'center',
  marginBottom: 10,
  // flexDirection: 'row',
}

//Props taken
//placeholder= 'string' \\the name of the placeholder

const RoundedInput = (props) => {
  return (
    <View style={inputStyle}>
    {/* <Icon
  name='sc-telegram' /> */}
      <TextInput
      style={{color: 'white', marginLeft: 40, borderBottomColor: 'red', fontSize: 18 }}
    placeholder={props.placeholder}
    placeholderTextColor={SUBTITLE_COLOR}
    secureTextEntry={props.secureTextEntry}
      />

    </View>
  )
}

export default RoundedInput