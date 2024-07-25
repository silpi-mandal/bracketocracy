import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Tabs from './Tabs'

const Index = () => {
  return (
    <View style={{flex:1}}>
      <Header/>
      <Tabs/>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})