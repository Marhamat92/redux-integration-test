import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, Button, View} from 'react-native';
import tw from 'twrnc';
import {useDispatch} from 'react-redux';

function Primary() {
  const [text, setText] = useState('');
  const [user, setUser] = useState({username: '', email: ''});
  const dispatch = useDispatch();

  const handleAdd = () => {
    //dispatch the action to update the state
    dispatch({type: 'ADD_NAME', payload: {name: text}});
    setText('');
  };

  const handleClear = () => {
    dispatch({type: 'CLEAR_LİST'});
    setText('');
  };

  const handleSetUser = () => {
    dispatch({type: 'SET_USER', payload: {user}});
    setUser({username: '', email: ''});
  };

  return (
    <SafeAreaView>
      <Text>Primary</Text>
      <TextInput
        value={text}
        onChangeText={text => setText(text)}
        placeholder="Type name here"
        style={tw`border  mx-2 rounded-md mt-4`}
      />
      <TextInput
        value={user.username}
        onChangeText={username => setUser({...user, username})}
        placeholder="User Name"
        style={tw`border  mx-2 rounded-md mt-4`}
      />
      <TextInput
        value={user.email}
        onChangeText={email => setUser({...user, email})}
        placeholder="User Email"
        style={tw`border  mx-2 rounded-md mt-4`}
      />
      <View style={tw`mt-3`}>
        <Button title="Add" onPress={handleAdd} />
        <Button color={'red'} title="Clear List" onPress={handleClear} />
        <Button
          color={'green'}
          title="Add User Details"
          onPress={handleSetUser}
        />
      </View>
    </SafeAreaView>
  );
}

export default Primary;
