import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';

export default function App() {
  return (
    <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
