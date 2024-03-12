import { StyleSheet, Text, View } from "react-native";

export default function Label({
  w = "100%",
  h = "100%",
  b = "#ffffff",
}) {
  return (
    <View
      style={{
        backgroundColor: b,
        width: w,
        height: h,
      }}
    ></View>
  );
}
