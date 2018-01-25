import { Avatar } from "react-native-elements";
import React from 'react'
import { View, TouchableOpacity, Icon, Image, ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import CustomAvatar from '../customComponents/CustomAvatar';


const AvatarLayout = styled.View`
  flex-direction: row;
  /* align-items: flex-evenly; */
  justify-content: space-around;
  /* background-color: red; */
  width: 100%;
  margin-bottom: 30;
`

class TripleAvatar extends React.Component {
  state = {
    avatarSelected: {
      option1: false,
      option2: true,
      option3: false
    }
  }

  avatarPress = (optionNumber) =>{
    console.log('Update Avatar Selection')
    // console.log('Will update avatar selection:', optionNumber)
  }

  render() {
    return (
      <AvatarLayout>
        <CustomAvatar
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
          onPress={this.avatarPress}
          selected={false}
          optionNumber={'option1'}
        />

        <CustomAvatar
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
          onPress={this.avatarPress}
          selected={true}
        />

        <CustomAvatar
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
          onPress={this.avatarPress}
          selected={false}
        />

      </AvatarLayout>
    )
  }

}
export default TripleAvatar