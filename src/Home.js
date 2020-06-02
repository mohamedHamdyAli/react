import React from "react"
import {Text, View, Image} from "react-native"
import { Card, Avatar, ListItem, Header,} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const list = [
  {
    name: 'Mohamed',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Hamdy'
  },
  {
    name: 'Ahmed',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Hamdy'
  },
]
export default class Home extends React.Component {

render(){
  return (
    <>
<Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content" // or directly
  centerComponent={{ text: 'Header', style: { color: '#fff' } }}
  containerStyle={{
    backgroundColor: '#3D6DCC',
    justifyContent: 'space-around',
  }}
/>
<Card
  title='HELLO WORLD'
  image={require('../images/pic2.jpg')}>
  <Text style={{marginBottom: 10,textAlign: 'center',}}>
    Tsts Message
  </Text>
</Card>

<Card>
{
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
  }
</Card>
<Card>

<Input
  placeholder='Name'
/>

<Input
  placeholder='Email'
/>
</Card>

      </>
    );
  }
}