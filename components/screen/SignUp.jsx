import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const SignUp = ({ navigation }) => {
  const [checkbox, setCheckbox] = useState(false);
  const [eye, setEye] = useState(true);
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/bracketocracy-dark-logo.png')} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.header}>SIGN UP</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          keyboardType='default'
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={eye}
            autoCapitalize="none"
          />
          <TouchableHighlight
            style={styles.eyeIcon}
            onPress={() => {
              setEye(!eye);
            }}
          >
            {eye ? (
              <Image
                source={require("../../assets/images/eye.png")}
                style={styles.eyeIconImage}
              />
            ) : (
              <Image
                source={require("../../assets/images/hidden.png")}
                style={styles.eyeIconImage}
              />
            )}
          </TouchableHighlight>
        </View>
        <View style={styles.conditionContainer}>
          <TouchableHighlight
            style={styles.checkboxContainer}
            onPress={() => {
              setCheckbox(!checkbox);
            }}
          >
            {checkbox ? (
              <Image
                source={require("../../assets/images/checkbox.png")}
                style={styles.checkbox}
              />
            ) : (
              <Image
                source={require("../../assets/images/square.png")}
                style={styles.checkbox}
              />
            )}
          </TouchableHighlight>
          <Text style={styles.agreeText}>I agree to the</Text>
          <TouchableOpacity>
            <Text style={styles.termcondition}>Term's and condition</Text>
          </TouchableOpacity>
          <Text style={styles.agreeText}>and</Text>
          <TouchableOpacity>
            <Text style={styles.privacypolicy}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.SignUpButton}>
          <Text style={styles.SignUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.noAccountText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.signUpText}
              onPress={() => {
                navigation.navigate("signin");
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "auto",
    backgroundColor: "#f2f1ed",
    paddingHorizontal: 25,
  },
  logo:{
    width:'75%',
    height:45,
    marginLeft:'12%',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:'1%',
    marginTop:'5%'
  },
  formContainer: {
    padding: 8,
    borderRadius: 10,
  },
  header: {
    fontSize: 15,
    fontWeight:'bold',
    marginBottom: 15,
    textAlign: "left",
    color: "#333",
    paddingLeft: 5,
  },
  input: {
    height: 42,
    borderColor: "#7d7d7a",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: "#fff",
    borderRadius:3
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 14,
    width: 20,
    height: 20,
  },
  eyeIconImage: {
    width: 20,
    height: 20,
  },
  conditionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 3,
    width:'90%',
    flexWrap:'wrap'
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginHorizontal:10,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginTop:15
  },
  agreeText: {
    fontSize: 12,
    color: "#333",
    marginLeft:3
  },
  termcondition: {
    marginLeft: 3,
    fontSize: 12,
    color: "#d69824",
    borderBottomWidth:1,
    borderColor:"#d69824"
  },
  privacypolicy:{
    marginLeft: 53,
    fontSize: 12,
    color: "#d69824",
    borderBottomWidth:1,
    borderColor:"#d69824",
    textAlign:'left'
  },
  SignUpButton: {
    backgroundColor: "#d69824",
    paddingVertical: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    borderRadius:3
  },
  SignUpButtonText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  noAccountText: {
    fontSize: 12,
    color: "#333",
  },
  signUpText: {
    fontSize: 12,
    color: "#d69824",
    marginLeft: 5,
    borderBottomWidth: 1,
    borderColor: "#d69824",
  }
});
