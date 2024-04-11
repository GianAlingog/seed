import { Image, View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LevelSelectScreen from "./screens/LevelSelectScreen";
import FillerBox from "./components/FillerBox";
import LessonScreen from "./screens/LessonScreen";
import { getData } from "./assets/DataHandler";
import EndScreen from "./screens/EndScreen";
import QuizScreen from "./screens/QuizScreen";

const Stack = createNativeStackNavigator();

// Override back button
function BackIcon() {
  return (
    <Pressable onPress={{}}>
      <Image
        style={{ width: 40, height: 40 }}
        source={require("./assets/icons/seed.png")}
      />
    </Pressable>
  );
}

// Transfer to separate file(s) eventually
function HomeHeaderLogo() {
  return (
    <Image
      style={{ width: 150, height: 40 }}
      source={require("./assets/icons/seed.png")}
    />
  );
}

// Use FlatList if possible
// It's not a good idea to continually call getData() here, instead pass the data as props and call it somewhere else
function StatHeaderLogo() {
  const credits = getData("credits");
  const streak = getData("streak");
  const lives = getData("lives");
  const xp = getData("xp");

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
        <FillerBox w={5} />
        <Text>{credits}</Text>
      </View>

      <FillerBox w={5} />

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/icons/streak.png")}
        />
        <FillerBox w={5} />
        <Text>{streak}</Text>
      </View>

      <FillerBox w={5} />

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/icons/lives.png")}
        />
        <FillerBox w={5} />
        <Text>{lives}</Text>
      </View>

      <FillerBox w={5} />

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/icons/level.png")}
        />
        <FillerBox w={5} />
        <Text>{xp}</Text>
      </View>

      <FillerBox w={50} />
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
            headerBackTitleVisible: "false",
            // headerLeft: () => <BackIcon />,
          }}
        />
        <Stack.Screen
          name="Lesson"
          component={LessonScreen}
          options={{
            headerTitle: () => <StatHeaderLogo />,
            headerTitleAlign: "center",
            headerBackTitleVisible: "false",
            // headerLeft: () => <BackIcon />,
          }}
        />
        <Stack.Screen
          name="EndScreen"
          component={EndScreen}
          options={{
            headerTitle: () => <StatHeaderLogo />,
            headerTitleAlign: "center",
            headerBackTitleVisible: "false",
            // headerLeft: () => <BackIcon />,
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            headerTitle: () => <StatHeaderLogo />,
            headerTitleAlign: "center",
            headerBackTitleVisible: "false",
            // headerLeft: () => <BackIcon />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
