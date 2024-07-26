import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../../../assets/images/bracketocracy-mob-logo-light.png")}
            style={styles.logo}
          />
          <Text style={styles.subtitle}>SILPI MANDAL</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require("../../../assets/images/user.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.menuButton}>
          <Image
            source={require("../../../assets/images/menus.png")}
            style={styles.menuImage}
          />
        </TouchableOpacity>
        <Text style={styles.menuText}>MAIN MENU</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    marginBottom: 10,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    height:60,
    paddingHorizontal:8,
    
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap:45
  },
  logo: {
    width: 170,
    height: 33,
  },
  subtitle: {
    fontSize: 12, 
    color: "#fff",
    marginLeft: 10, 
  },
  profileButton: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderColor: "#ebb04b",
    borderRadius: 17.5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop:5
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -15,
    backgroundColor: "#d38f14",
    width: "70%",
    borderRadius: 15,
    marginLeft: "15%",
    borderWidth: 3,
    borderColor: "#ebb04b",
    paddingVertical: 1,
  },
  menuButton: {
    marginRight: 10,
  },
  menuImage: {
    width: 30,
    height: 30,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
