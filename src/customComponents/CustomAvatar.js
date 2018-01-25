import { Avatar } from "react-native-elements";
import React from 'react'
import { View, TouchableOpacity, Icon, Image, ImageBackground } from 'react-native'

//props taken:
//source={ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }
//opacity= number         //default = 1
//selected= boolean

//TODO: Make this use styled components
const CustomAvatar = (props) => (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: (props.selected ? 75 : 65),
        height: (props.selected ? 75 : 65),
        backgroundColor: '#fff',
        borderRadius: 100,
        opacity: (props.selected ? 1 : 0.7),
      }}
        onPress={props.onPress('sending this up')}
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
        }}
      >
      </ImageBackground>

    </TouchableOpacity>
)

export default CustomAvatar