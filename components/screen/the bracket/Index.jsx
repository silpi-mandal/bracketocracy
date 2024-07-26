import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './Header';
import Tabs from './Tabs';
import Champion from './Champion';
import ChampionMatch from './ChampionMatch';
import FinalMatchs from './FinalMatchs';
import Elite from './Elite';
import Sweet from './Sweet';
import Round1 from './Round1';
import Round2 from './Round2';
import PlayIn from './PlayIn'
import Footer from './Footer'

const Index = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Header />
        <Tabs />
        <Champion />
        <ChampionMatch />
        <FinalMatchs />
        <Elite />
        <Sweet />
        <Round2 />
        <Round1 />
        <PlayIn/>
        <Footer/>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    position:'relative'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f1ed',
    // position:'relative'
  },
});
