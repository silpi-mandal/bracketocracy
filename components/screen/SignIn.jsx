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

const SignIn = ({ navigation }) => {
  const [checkbox, setCheckbox] = useState(false);
  const [eye, setEye] = useState(true)
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/bracketocracy-dark-logo.png')} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.header}>SIGN IN</Text>
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
          secureTextEntry = {eye}
          autoCapitalize="none"
        />
        <TouchableHighlight style={styles.eyeIcon} onPress={()=>{setEye(!eye)}}>
        {
          eye? <Image source={require('../../assets/images/eye.png')} style={styles.eyeIconImage} /> : <Image source={require('../../assets/images/hidden.png')} style={styles.eyeIconImage} />
        }
        </TouchableHighlight>
        </View>
        <View style={styles.rememberContainer}>
          <TouchableHighlight style={styles.checkboxContainer} onPress={()=>{setCheckbox(!checkbox)}} >
           {
            checkbox? <Image source={require('../../assets/images/checkbox.png')} style={styles.checkbox} /> : <Image source={require('../../assets/images/square.png')} style={styles.checkbox} />
           }
          </TouchableHighlight>
          <Text style={styles.rememberText}>Remember Me</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpText} onPress={()=>{navigation.navigate('signup')}} >Sign up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>- Or sign in with -</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/images/facebook.png")}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/images/google.png")}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
    marginVertical:'3%',
    marginTop:'5%'
  },
  formContainer: {
    padding: 5,
    borderRadius: 10,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "left",
    color: "#333",
    paddingLeft: 5,
  },
  input: {
    height: 42,
    borderColor: "#7d7d7a",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: "#fff",
    borderRadius:3
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 14,
    width: 20,
    height: 20,
  },
  eyeIconImage: {
    width: 20,
    height: 20,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  rememberText: {
    fontSize: 12,
    color: "#333",
  },
  forgotPassword: {
    marginLeft: 88,
    fontSize: 12,
    color: "#d69824",
  },
  signInButton: {
    backgroundColor: "#d69824",
    paddingVertical: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    borderRadius:3
  },
  signInButtonText: {
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
  },
  orText: {
    fontSize: 12,
    textAlign: "center",
    color: "#000",
    marginBottom: 12,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 78,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "center",
  },
  img: {
    width: 20,
    height: 20
  },
});
