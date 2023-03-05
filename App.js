import { StatusBar } from 'expo-status-bar';
// import React fromt 'React';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      

<Text style={styles.top} >  </Text>

<TextInput style={styles.gmailSignup} 
placeholder='gmail'
id="gmailInput"
></TextInput>

<TextInput style={styles.signupPassword}
placeholder='nickanme'
dataDetectorTypes='all'
></TextInput>

<TextInput style={styles.signupPassword}
placeholder='password'
dataDetectorTypes='all'
></TextInput>


<TouchableOpacity style={{borderRadius: 15}} style={styles.submit} onPress={() => {
  

  }}>


  <Text style={styles.text} > Курси </Text>
</TouchableOpacity>

<TouchableOpacity style={{borderRadius: 15}} style={styles.submit} onPress={() => {
    alert('You tapped the button!');
  }}>
  <Text style={styles.text} > Події </Text>
</TouchableOpacity>


<TouchableOpacity style={{borderRadius: 15}} style={styles.submit} onPress={() => {
    alert('You tapped the button!');
  }}>
  <Text style={styles.text} > Товари </Text>
</TouchableOpacity>

<TouchableOpacity style={{borderRadius: 15}} style={styles.submit} onPress={() => {
    alert('You tapped the button!');
  }}>
  <Text style={styles.text} > To Do </Text>
</TouchableOpacity>      
      
  
  <TouchableOpacity style={{borderRadius: 15}} style={styles.submit} onPress={() => {
    alert('You tapped the button!');
  }}>
  <Text style={styles.text} > Sign up/Sign in </Text>
</TouchableOpacity>


<Text style={styles.bottom} > </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#6ed3cf',
  },
  submit: {
    color:'green',
    backgroundColor:'#9068be',
    width:'60%',
    alignItems:'center',
    padding: 15,
    margin:10,
    borderRadius: 10,
  },

  text: {
    color:'#e1e8f0',

  },

  top: {
    position:'absolute',
    top:0,
    width:'100%',
    height:'3%',
    color:'green',
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50,
  },


  gmailSignup: {
    // position:'absolute',
    // top:'15%',
    margin:10,
    width:'60%',
    height:'4%',
    color:'#000',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
  },


  signupPassword: {
    // position:'absolute',
    // top:'25%',
    margin:10,
    width:'60%',
    height:'4%',
    color:'#000',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
  },


  bottom: {
    position:'absolute',
    bottom:0,
    width:'100%',
    height:'3%',
    color:'green',
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50,
  }


});
