import { Avatar } from "react-native-elements";
import React from 'react'
import { View } from 'react-native'

const TripleAvatar = () => (
  <View>
    <Avatar
      medium
      rounded
      source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
    <Avatar
      medium
      rounded
      source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
    <Avatar
      medium
      rounded
      source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  </View>
)

export default TripleAvatar