import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../app/screens/AuthScreen";
import Index from "../app/screens/Index";
import MapsTest from "../app/screens/mapsTest";

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="mapsTest">
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: "papayawhip" } }}>
          <Stack.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: "papayawhip" } }}>
          <Stack.Screen
            name="mapsTest"
            component={MapsTest}
            options={{ headerShown: false }}
          />
        </Stack.Group>

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Index"
            component={Index}
            options={{
              title: "My Index",
              //   headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
