import React, {useState, useEffect} from 'react';
import {Button,SafeAreaView, StatusBar, Text, View } from 'react-native';

export default function Contador() {
    const[counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
    };
  
    return <SafeAreaView>
       <StatusBar />
        <Text>{counter}</Text>
        <Button  title="Increment" onPress= {() => {
            setCounter(counter + 1)
        }} />
        <Button  title="Decrement" onPress= {() => {
            setCounter(counter - 1)
        }} />
        <Button  title="Resetar"  onPress= {() => {
            setCounter(0)
        }} />
        </SafeAreaView>
  }