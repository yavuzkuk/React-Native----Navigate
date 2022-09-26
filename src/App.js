import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import First from "./pages/first";
import Member from "./pages/member"
import MemberResult from "./pages/memberResult";

const App = () => {

  const Stack = createNativeStackNavigator()
  
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="First Screen" component={First}></Stack.Screen>
        <Stack.Screen name="Member Screen" component={Member}></Stack.Screen>
        <Stack.Screen name="Member Result Screen" component={MemberResult}></Stack.Screen>
      </Stack.Navigator>    
    </NavigationContainer>
  )
}

export default App