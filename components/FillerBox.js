import { StyleSheet, Text, View } from "react-native";

export default function Label({
  w = "100%",
  h = "100%",
  b = "",
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
