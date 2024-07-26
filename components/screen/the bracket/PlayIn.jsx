import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HOU from "../../../assets/images/HOU.svg";
import TEXSO from "../../../assets/images/TEXSO.svg";
import IOWA from "../../../assets/images/IOWA.svg";
import OHIOST from "../../../assets/images/OHIOST.svg";

const PlayIn = () => {
  return (
    <View style={styles.matchContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>PLAY IN MATCHES</Text>
        <Text style={styles.date}>MARCH 19</Text>
        <Text style={styles.selectionPeriod}>SELECTION PERIOD ENDED</Text>
      </View>
      <View style={[styles.bodyContainer, { marginBottom: 10 }]}>
        <View style={styles.bodyHeaderTextContainer}>
          <Text style={styles.bodyHeaderText}>Pick your winner</Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
              <HOU width={20} height={20} style={styles.teamLogo} />
              <Text style={[styles.teamRank, { color: "#888" }]}>1</Text>
              <Text style={[styles.teamName, { color: "#000" }]}>Houston</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={[styles.teamName, { color: "#000" }]}>100</Text>
              <Image
                source={require("../../../assets/images/basket-ball2.png")}
                style={styles.basketballImage}
              />
            </View>
          </View>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
              <TEXSO width={20} height={20} style={styles.teamLogo} />

              <Text style={styles.teamRank}>9</Text>
              <Text style={styles.teamName}>Texas S&U</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={styles.teamScore}>95</Text>
              <Image
                source={require("../../../assets/images/basket-ball.png")}
                style={styles.basketballImage}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bodyContainer, { marginBottom: 10 }]}>
        <View style={styles.bodyHeaderTextContainer}>
          <Text style={styles.bodyHeaderText}>Pick your winner</Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
              <Image
                source={require("../../../assets/images/Bryant-University.webp")}
                style={styles.teamLogo}
              />
              <Text style={styles.teamRank}>12</Text>
              <Text style={styles.teamName}>James Madison</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={styles.teamScore}>55</Text>
              <Image
                source={require("../../../assets/images/basket-ball.png")}
                style={styles.basketballImage}
              />
            </View>
          </View>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
              <Image
                source={require("../../../assets/images/Duke.png")}
                style={styles.teamLogo}
              />
              <Text style={[styles.teamRank, { color: "#888" }]}>4</Text>
              <Text style={[styles.teamName, { color: "#000" }]}>Duke</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={[styles.teamName, { color: "#000" }]}>93</Text>
              <Image
                source={require("../../../assets/images/basket-ball2.png")}
                style={styles.basketballImage}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bodyContainer, { marginBottom: 10 }]}>
        <View style={styles.bodyHeaderTextContainer}>
          <Text style={styles.bodyHeaderText}>Pick your winner</Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
              <Image source={require('../../../assets/images/North-Carolina.png')} width={20} height={20} style={styles.teamLogo} />
              <Text style={[styles.teamRank, { color: "#888" }]}>11</Text>
              <Text style={[styles.teamName, { color: "#000" }]}>North Carolina State</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={[styles.teamName, { color: "#000" }]}>79</Text>
              <Image
                source={require("../../../assets/images/basket-ball2.png")}
                style={styles.basketballImage}
              />
            </View>
          </View>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
              <OHIOST width={20} height={20} style={styles.teamLogo} />
              <Text style={styles.teamRank}>14</Text>
              <Text style={styles.teamName}>Oakland</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={styles.teamScore}>73</Text>
              <Image
                source={require("../../../assets/images/basket-ball.png")}
                style={styles.basketballImage}
              />
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
            <IOWA width={20} height={20} style={styles.teamLogo} />
              <Text style={styles.teamRank}>10</Text>
              <Text style={styles.teamName}>Colorado</Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={styles.teamScore}>77</Text>
              <Image
                source={require("../../../assets/images/basket-ball.png")}
                style={styles.basketballImage}
              />
            </View>
          </View>
          <View style={styles.teamDetails}>
            <View style={styles.teamInfo}>
              <Image
                source={require("../../../assets/images/Marquette.png")}
                style={styles.teamLogo}
              />
              <Text style={[styles.teamRank, { color: "#888" }]}>2</Text>
              <Text style={[styles.teamName, { color: "#000" }]}>
                Marquette
              </Text>
            </View>
            <View style={styles.teamScoreContainer}>
              <Text style={[styles.teamName, { color: "#000" }]}>81</Text>
              <Image
                source={require("../../../assets/images/basket-ball2.png")}
                style={styles.basketballImage}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayIn;

const styles = StyleSheet.create({
  matchContainer: {
    flex: 1,
    padding: 20,
    width: "95%",
    marginTop: -20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#454134',
    padding: 10,
    width:300,
    maxHeight:70,
    borderRadius:5,
    marginTop:12,
    marginBottom:10
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
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    height: 100,
  },
  bodyHeaderTextContainer: {
    position: "absolute",
    left: "65%",
    zIndex: 10,
  },
  bodyHeaderText: {
    fontSize: 13,
    marginTop: 10,
  },
  teamContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 25,
  },
  teamDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    padding: 5,
  },
  teamInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  teamScoreContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  teamLogo: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  teamRank: {
    fontSize: 10,
    marginRight: 10,
  },
  teamName: {
    fontSize: 10,
    marginRight: 10,
    color: "#888",
  },
  teamScore: {
    fontSize: 10,
    marginRight: 10,
    color: "#888",
  },
  basketballImage: {
    width: 20,
    height: 20,
    backgroundColor: "#000",
    borderRadius: 10,
  },
});
