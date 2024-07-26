import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.headerCon}>
      <Image source={require('../../../assets/images/bracketocracy-mob-logo-light.png')} style={styles.img} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerCon: {
        backgroundColor: "#454134",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        paddingBottom: 15,
        borderBottomWidth: 3,
        borderColor: "#ebb04b",
        width: "100%",
        height:70,
        paddingHorizontal:8,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
    width: 210,
    height: 40,
    marginTop:10
    }
})