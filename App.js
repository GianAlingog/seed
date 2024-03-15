import { Image, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LevelSelectScreen from "./screens/LevelSelectScreen";
import FillerBox from "./components/FillerBox"
import LessonScreen from "./screens/LessonScreen";

const Stack = createNativeStackNavigator();

// Re-implement stats
const testData = {
  credits: 0,
  streak: 0,
  lives: 5,
  xp: 0,
};

// Transfer to separate file(s) eventually
function HomeHeaderLogo() {
  return (
    <Image
      style={{ width: 150, height: 40 }}
      source={require("./assets/icons/seed.png")}
    />
  );
}

// Use FlatList instead
function StatHeaderLogo() {
  return (
    <View
      style={{
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/icons/credits.png")}
        />
        <FillerBox w={5}/>
        <Text>{testData.credits}</Text>
      </View>

      <FillerBox w={5}/>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/icons/streak.png")}
        />
        <FillerBox w={5}/>
        <Text>{testData.streak}</Text>
      </View>

      <FillerBox w={5}/>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/icons/lives.png")}
        />
        <FillerBox w={5}/>
        <Text>{testData.lives}</Text>
      </View>

      <FillerBox w={5}/>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/icons/level.png")}
        />
        <FillerBox w={5}/>
        <Text>{testData.xp}</Text>
      </View>


      <FillerBox w={50}/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <HomeHeaderLogo />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Levels"
          component={LevelSelectScreen}
          options={{
            headerTitle: () => <StatHeaderLogo />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Lesson"
          component={LessonScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
