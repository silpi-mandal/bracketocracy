import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UCONNLogo from "../../../assets/images/UCONN.svg";
import PURDUELogo from "../../../assets/images/PURDUE.svg";

const ChampionMatch = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Champion Match</Text>
          <Text style={styles.dateText}>April 8</Text>
        </View>
        <View style={styles.matchContainer}>
          <View style={styles.teamContainer}>
            <View style={styles.teamDetails}>
              <UCONNLogo width={50} height={50} style={styles.teamLogo} />
              <Text style={styles.teamName}>Connecticut</Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreTop}>75</Text>
              <Text style={styles.score}>1</Text>
            </View>
          </View>
          <View style={styles.teamContainer}>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreTop}>60</Text>
              <Text style={styles.score}>1</Text>
            </View>
            <View style={styles.teamDetails}>
              <PURDUELogo width={50} height={50} style={styles.teamLogo} />
              <Text style={styles.teamName}>Purdue</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.championContainer}>
        <Text style={styles.championText}>Champion</Text>
        <UCONNLogo width={80} height={80} style={styles.championLogo} />
        <Text style={styles.championTeamName}>Connecticut</Text>
      </View>
    </View>
  );
};

export default ChampionMatch;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    width: "85%",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    color: "#454134",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 16,
    color: "#4d4c47",
  },
  matchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    paddingVertical: 10,
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "45%",
    paddingHorizontal: 16,
  },
  teamDetails: {
    alignItems: "center",
    justifyContent: "center",
  },
  teamLogo: {
    marginBottom: 8,
  },
  teamName: {
    fontSize: 14,
    fontWeight: "400",
    color: "#4d4c47",
  },
  scoreContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    fontSize: 12,
    color: "#888",
  },
  scoreTop: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4d4c47",
  },
  separator: {
    width: 1,
    backgroundColor: "#888",
    height: 60,
  },
  championContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    padding: 10,
    paddingHorizontal: 55,
  },
  championText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#454134",
  },
  championLogo: {
    marginBottom: 8,
  },
  championTeamName: {
    fontSize: 14,
    fontWeight: "100",
    color: "#4d4c47",
  },
});
