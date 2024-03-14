import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LevelSelectScreen from "./screens/LevelSelectScreen";

const Stack = createNativeStackNavigator();

function HeaderLogo() {
  return (
    <Image
      style={{ width: 150, height: 40 }}
      source={require("./assets/icons/seed.png")}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: (props) => <HeaderLogo {...props} />,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Levels" component={LevelSelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
