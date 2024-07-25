import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Tabs = () => {
  return (
    <View style={{flex:1, flexDirection:'row', gap:25, justifyContent:'center', marginTop:20}}>
      <TouchableOpacity style={{backgroundColor}}>
      <Text>WEST</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>SOUTH</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>EAST</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>MIDWEST</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({})