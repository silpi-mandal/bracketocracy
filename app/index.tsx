import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../components/screen/SignIn";
import SignUp from "../components/screen/SignUp"
import { SafeAreaView, StyleSheet } from 'react-native';
import Bracket from '../components/screen/the bracket/Index' 
import Home from "../components/screen/home/Home";
import Notification from '../components/screen/Notification'

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="signin">
          <Stack.Screen
            name="signin"
            component={SignIn}
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer> */}
      {/* <Bracket/> */}
      {/* <Home/> */}
     <Notification/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
