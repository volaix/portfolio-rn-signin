import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import { Button, Avatar, FormLabel, FormInput } from 'react-native-elements'
import styled from 'styled-components'

import TripleAvatar from './components/TripleAvatar'
import SignUpForm from './components/SignUpForm';


const BackgroundBlueView = styled.View`
  background-color: 'rgba(41, 48, 68, 1)';
  height: 100%;
  width: 100%;
  align-items: center;
`

const SignUp = styled.Text`
  color: white;
  font-size: 60;
  margin-bottom: 50
`

const Subtitle = styled.Text`
  color: 'rgba(100, 110, 150, 1)';
  font-size: 16;
  font-weight: 800;
  margin-bottom: 60
`

class HomeScreen extends React.Component {
  onPressGetData = () => {
    console.log('you have press onpressgetdata')
  }
  render() {
    return (
      <BackgroundBlueView>
        <SignUp>Sign Up</SignUp>

        <Subtitle>{'Who you are?'.toUpperCase()}</Subtitle>

        <TripleAvatar />

        <SignUpForm />

        <Button
          title='Sign Up'
          onPress={this.props.fetchData}
          backgroundColor='green'
          borderRadius={20}
        />


        {this.props.appData.isFetching && <Text>Loading</Text>}
        {
          this.props.appData.data.length ? (
            this.props.appData.data.map((person, i) => {
              return <View key={i} >
                <Text>Name: {person.name}</Text>
                <Text>Age: {person.age}</Text>
              </View>
            })
          ) : null
        }
        {this.props.appData.error && <Text>There has been an error. We have sent the report to the developers!</Text>}

      </BackgroundBlueView>
    )
  }
}

const mapStateToProps = (state) => {
  const appData = state.appData
  return {
    appData,
  }
}

const mapDispatchToProps = {
  fetchData,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
