import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Tabs = () => {
  const[activeTab, setActiveTab] = useState(1);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{setActiveTab(1)}} style={activeTab==1? styles.activeTab : styles.tab}>
        <Text style={styles.tabText}>WEST</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setActiveTab(2)}} style={activeTab==2? styles.activeTab : styles.tab}>
        <Text style={styles.tabText}>SOUTH</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setActiveTab(3)}} style={activeTab==3? styles.activeTab : styles.tab}>
        <Text style={styles.tabText}>EAST</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setActiveTab(4)}} style={activeTab==4? styles.activeTab : styles.tab}>
        <Text style={styles.tabText}>MIDWEST</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginTop: 10,
    width:'80%'
  },
  tab: {
    paddingHorizontal: 5,
    paddingVertical:3,
    marginHorizontal: 6,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor:'#948d7b',
    width:65,
    height:30,
    justifyContent:'center',
    alignItems:'center'
  },
  activeTab: {
    backgroundColor: '#454134',
    paddingHorizontal: 5,
    paddingVertical:3,
    marginHorizontal: 6,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    width:65,
    height:30,
    justifyContent:'center',
    alignItems:'center'
  },
  tabText: {
    color: '#fff',
    fontSize: 12
  },
});
