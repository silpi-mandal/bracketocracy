import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Champion = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>FINAL (CHAMPIONSHIP GAME)</Text>
        <Text style={styles.date}>08 April 2024</Text>
        <Text style={styles.selectionPeriod}>SELECTION PERIOD ENDED</Text>
      </View>
  );
};

export default Champion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#454134',
    padding: 10,
    width:300,
    maxHeight:70,
    borderRadius:5,
    marginTop:12
  },
  title: {
    color: '#fff',
    fontSize: 15,
  },
  date: {
    color: '#d8690a',
    fontSize: 12,
  },
  selectionPeriod: {
    color: '#dacb16',
    fontSize: 12,
  },
});
