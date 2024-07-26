import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Elite = () => {
  return (
    <View style={styles.matchContainer}>
    <View style={styles.headerContainer}>
    <Text style={styles.headerText}>ELITE 8</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>30 MARCH 2024</Text>
          <Text style={styles.subHeaderText}>Selection Period Ended</Text>
      </View>
    </View>
    <View style={styles.bodyContainer}>
        <View style={styles.bodyHeaderTextContainer}>
          <Text style={styles.bodyHeaderText}>Pick your winner</Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
            <Image source={require('../../../assets/images/Duke.png')} style={styles.teamLogo} />
              <Text style={styles.teamRank}>4</Text>
              <Text style={styles.teamName}>Duke</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={styles.teamScore}>64</Text>
              <Image source={require('../../../assets/images/basket-ball.png')} style={styles.basketballImage} />
            </View>
          </View>
          <View style={[styles.teamDetails, styles.teamDetailsHighlight]}>
            <View style={styles.teamInfo}>
            <Image source={require('../../../assets/images/North-Carolina.png')} style={styles.teamLogo} />
              <Text style={[styles.teamRank, {color:'#888'}]}>11</Text>
              <Text style={[styles.teamName, {color:'#000'}]}>North Carolina State</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={[styles.teamName, {color:'#000'}]}>76</Text>
              <Image source={require('../../../assets/images/basket-ball2.png')} style={styles.basketballImage} />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Elite

const styles = StyleSheet.create({
    matchContainer: {
        flex: 1,
        padding: 20,
        width: '95%',
        marginTop: -20,
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        backgroundColor: '#454134',
        paddingHorizontal: 20,
        gap: 115,
        paddingVertical: 5,
        borderRadius: 1,
        flex: 1,
      },
      headerText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#fff',
      },
      dateContainer: {
        alignItems: 'flex-end',
        gap: 5,
      },
      dateText: {
        fontSize: 10,
        color: '#d8690a',
      },
      subHeaderText: {
        fontSize: 10,
        color: '#dacb16',
      },
      bodyContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        height: 100,
      },
      bodyHeaderTextContainer: {
        position: 'absolute',
        left: '65%',
        zIndex: 10,
      },
      bodyHeaderText: {
        fontSize: 13,
        marginTop: 10,
      },
      teamContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 25,
      },
      teamDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        padding: 5,
      },
      teamDetailsHighlight: {
        backgroundColor: '#ebb04b',
        marginTop: 5,
      },
      teamInfo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      teamScoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      teamLogo: {
        marginRight: 10,
        width:20,
         height:20
      },
      teamRank: {
        fontSize: 10,
        marginRight: 10,
      },
      teamName: {
        fontSize: 10,
        marginRight: 10,
        color: '#888',
      },
      teamScore: {
        fontSize: 10,
        marginRight: 10,
        color: '#888',
      },
      basketballImage: {
        width: 20,
        height: 20,
        backgroundColor: '#000', 
        borderRadius: 10,
      },
})