import React from 'react';
import {View, Button} from 'react-native';

function WelcomeScreen({navigation}) {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}

export default WelcomeScreen;
