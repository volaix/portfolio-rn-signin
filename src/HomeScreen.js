import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import TripleAvatar from './components/TripleAvatar';
import { connect } from 'react-redux'
import { fetchData } from './actions';

class HomeScreen extends React.Component {
  onPressGetData = () => {
    console.log('you have press onpressgetdata')
  }
  render() {
    return (
      <View>
        <Text>Sign Up</Text>
        <Text>Who you are?</Text>
        <Text>Three circle images</Text>

        <TripleAvatar />

        <Button
          title='Get Data'
          onPress={this.props.fetchData}
          backgroundColor='green'
        />

        { this.props.appData.isFetching && <Text>Loading</Text> }
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
        { this.props.appData.error && <Text>There has been an error. We have sent the report to the developers!</Text> }

      </View>
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
