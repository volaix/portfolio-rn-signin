import { Avatar, FormLabel, FormInput } from "react-native-elements";
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { SUBTITLE_COLOR } from "../constants";
import RoundedInput from '../customComponents/RoundedInput';

const FormLayout = styled.View`
  /* align-items: flex-evenly; */
  /* justify-content: space-around; */
  /* background-color: rgba(60,60,80,1); */
  width: 100%;
  margin-bottom: 40;
`
const roundedBorders = styled.View`
  border-radius: 25px;
  border: 2px solid #73AD21;
  padding: 20px; 
  width: 200px;
  height: 150px; 
`
const inputStyle = {
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: SUBTITLE_COLOR,
  borderBottomColor: SUBTITLE_COLOR, //necessary because of white being specified as default
  borderRadius: 30,
}

const SignUpForm = () => (
  <FormLayout>

<RoundedInput />
    <FormInput 
    onChangeText={console.log('hello world')}
    containerStyle={inputStyle}
    inputStyle={{color: 'red', marginLeft: 40, borderBottomColor: 'red' }}
    placeholder="Username"
    placeholderTextColor={SUBTITLE_COLOR}
    />

    <FormLabel>Name</FormLabel>
    <FormInput onChangeText={console.log('hello world')} />

    <FormLabel>Name</FormLabel>
    <FormInput onChangeText={console.log('hello world')} />
  </FormLayout>
)


export default SignUpForm