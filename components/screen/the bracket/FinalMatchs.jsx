import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BAMA from '../../../assets/images/BAMA.svg';
import UCONNLogo from "../../../assets/images/UCONN.svg";
import PURDUELogo from "../../../assets/images/PURDUE.svg";

const FinalMatchs = () => {
  return (
    <View style={styles.matchContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>FINAL 4</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>06 APRIL 2024</Text>
          <Text style={styles.subHeaderText}>Selection Period Ended</Text>
        </View>
      </View>
      <View style={[styles.bodyContainer, {marginBottom:10}]}>
        <View style={styles.bodyHeaderTextContainer}>
          <Text style={styles.bodyHeaderText}>Pick your winner</Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
              <BAMA width={20} height={20} style={styles.teamLogo} />
              <Text style={styles.teamRank}>4</Text>
              <Text style={styles.teamName}>Alabama</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={styles.teamScore}>72</Text>
              <Image source={require('../../../assets/images/basket-ball.png')} style={styles.basketballImage} />
            </View>
          </View>
          <View style={[styles.teamDetails, styles.teamDetailsHighlight]}>
            <View style={styles.teamInfo}>
              <UCONNLogo width={20} height={20} style={styles.teamLogo} />
              <Text style={[styles.teamRank, {color:'#888'}]}>1</Text>
              <Text style={[styles.teamName, {color:'#000'}]}>Connecticut</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={[styles.teamName, {color:'#000'}]}>86</Text>
              <Image source={require('../../../assets/images/basket-ball2.png')} style={styles.basketballImage} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyHeaderTextContainer}>
          <Text style={styles.bodyHeaderText}>Pick your winner</Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
              <Image source={require('../../../assets/images/North-Carolina.png')} style={styles.teamLogo} />
              <Text style={styles.teamRank}>11</Text>
              <Text style={styles.teamName}>North Carolina State</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={styles.teamScore}>50</Text>
              <Image source={require('../../../assets/images/basket-ball.png')} style={styles.basketballImage} />
            </View>
          </View>
          <View style={[styles.teamDetails, styles.teamDetailsHighlight]}>
            <View style={styles.teamInfo}>
              <PURDUELogo width={20} height={20} style={styles.teamLogo} />
              <Text style={[styles.teamRank, {color:'#888'}]}>1</Text>
              <Text style={[styles.teamName, {color:'#000'}]}>Purdue</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={[styles.teamName, {color:'#000'}]}>63</Text>
              <Image source={require('../../../assets/images/basket-ball2.png')} style={styles.basketballImage} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FinalMatchs;

const styles = StyleSheet.create({
  matchContainer: {
    flex: 1,
    padding: 20,
    width: '95%',
    marginTop: 20,
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
});
