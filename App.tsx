import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Keypad from './src/Keypad';
import { RootState } from './src/redux/store';


export default function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  
  return (
    <View style={[styles.container,{backgroundColor: 'white'}]}>
      <View style={styles.toolbar}>
        <Text style={styles.title}>Calculator</Text>
        <Text style={styles.counter}> {count}</Text>
      </View>
      <Keypad/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title:{
    color:'#666',
    fontSize:30,
    textAlign: 'left',
    paddingStart:20
  },
  counter:{
    color:'#666',
    fontSize:30,
    textAlign: 'left',
    paddingStart:0,
    paddingEnd: 20
  },
  toolbar:{
    marginTop:10,
    height:70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'100%'
  }
});