import React from 'react'
import { SafeAreaView,Text,FlatList,View } from 'react-native'
import {useSelector} from 'react-redux';
import tw from 'twrnc';

function Secondary() {
//selector to get the data from the store
  const names = useSelector(selector => selector.nameList);
  const user = useSelector(selector => selector.user);
 

  return (
    <SafeAreaView>
        <Text>Secondary</Text>
        <View style={tw`flex`}>
        <Text>User Name:{user.username}</Text>
        <Text>User Email:{user.email}</Text>
        </View>
        <FlatList
        data={names}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item,index) => index.toString()}
        /> 
    </SafeAreaView>
  )
}

export default Secondary