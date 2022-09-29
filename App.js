import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Start";
import Home from "./screens/Home";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
