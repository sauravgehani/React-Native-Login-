import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView } from 'react-native';



export default function App() {
  return (
 <View style={styles.container}>
   <ScrollView>
    
    <Text> </Text>
    <Text> </Text>
    <Text>Register</Text>
    <Text> </Text>

    <Text>First Name</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}/>
    <Text> </Text>

    <Text>Last Name</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}/>
    <Text> </Text>

    <Text>Email Address</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}/>
    <Text> </Text>

    <Text>Password</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}
      placeholder="Must be at least 8 digits long"/>
    <Text> </Text>

    <Text>Mobile Number</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}/>
    <Text> </Text>

    <Text>Address</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}/>
    <Text> </Text>

    <Text>City</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}/>
    <Text></Text>

    <Text>Zip Code</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}/>
    <Text></Text>

    <Text>State</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}/>
    <Text></Text>

    <Text>Country</Text>
    <TextInput
      style={{ width:200, height: 40, borderColor: 'black', borderWidth: 2 }}/>
    <Text></Text>

    <Button title = "Register"></Button>

  </ScrollView>

    <StatusBar style="auto" />
    
 </View>
  );


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
