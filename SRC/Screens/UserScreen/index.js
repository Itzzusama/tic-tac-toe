import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useUserContext} from '../../context/user-context';
import {SafeAreaView} from 'react-native-safe-area-context';

const UserScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const onEnterPress = () => {
    if (firstName.trim() !== '' && secondName.trim() !== '') {
      navigation.navigate('Tic Tac Toe', {
        firstName: firstName,
        secondName: secondName,
      });
    } else {
      alert('Both names are required!');
    }
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
          }}>
          Please Enter your Names
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="First player Name"
          placeholderTextColor={'black'}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Second player Name"
          placeholderTextColor={'black'}
          value={secondName}
          onChangeText={setSecondName}
        />
      </View>
      <TouchableOpacity onPress={onEnterPress}>
        <View
          style={{
            height: 50,
            width: 160,
            backgroundColor: 'blue',
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5,
          }}>
          <Text style={{fontSize: 25, color: 'white'}}>{'Enter Game'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});
