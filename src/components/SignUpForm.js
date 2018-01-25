import { Avatar, FormLabel, FormInput } from "react-native-elements";
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const FormLayout = styled.View`
  /* align-items: flex-evenly; */
  /* justify-content: space-around; */
  background-color: rgba(60,60,80,1);
  width: 100%;
  margin-bottom: 40;
`

const SignUpForm = () => (
  <FormLayout>

    <FormLabel>Name</FormLabel>
    <FormInput onChangeText={console.log('hello world')} />

    <FormLabel>Name</FormLabel>
    <FormInput onChangeText={console.log('hello world')} />

    <FormLabel>Name</FormLabel>
    <FormInput onChangeText={console.log('hello world')} />
  </FormLayout>
)


export default SignUpForm