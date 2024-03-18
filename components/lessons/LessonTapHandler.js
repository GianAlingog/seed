import { useState } from "react";
import { useDebounce } from "react-hook-form";
import {
  View,
  Dimensions,
  LayoutAnimation,
  Platform,
  StyleSheet,
} from "react-native";
import {
  Gesture,
  GestureHandlerRootView,
  TapGestureHandler,
} from "react-native-gesture-handler";

// Note that this must be refactored to work for components

const SCREEN_WIDTH = Dimensions.get("window").width;
const LEFT_THRESHOLD = SCREEN_WIDTH / 3;
const RIGHT_THRESHOLD = (SCREEN_WIDTH / 3) * 2;

const LessonTapHandler = ({ children, onLeftTap, onRightTap }) => {
  const [isLeftTap, setIsLeftTap] = useState(false);
  const [isRightTap, setIsRightTap] = useState(false);

  const handleTap = (event) => {
    const LocationX = event.nativeEvent.absoluteX;
    const isLeft = LocationX <= LEFT_THRESHOLD;
    const isRight = LocationX > LEFT_THRESHOLD; // SCREEN_WIDTH - LEFT_THRESHOLD for thirds

    if (isLeft) {
      setIsLeftTap(true);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); // Fix or adjust this
      onLeftTap();
    } else if (isRight) {
      setIsRightTap(true);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      onRightTap();
    }

    setTimeout(() => {
      setIsLeftTap(false);
      setIsRightTap(false);
    }, 100); // Adjust as needed
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TapGestureHandler onHandlerStateChange={debouncedHandleTap} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {children}
          {isLeftTap && <View style={styles.leftTapIndicator} />}
          {isRightTap && <View style={styles.rightTapIndicator} />}
        </View>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

// Consider altering this stylesheet
const styles = StyleSheet.create({
  container: {},
  leftTapIndicator: {
    position: "absolute",
    left: 0,
    top: 0,
    width: LEFT_THRESHOLD,
    height: "100%",
    // backgroundColor: "rgba(0, 0, 255, 0.2)",
    borderColor: "red",
    borderWidth: 1,
  },
  rightTapIndicator: {
    position: "absolute",
    right: 0,
    top: 0,
    width: RIGHT_THRESHOLD,
    height: "100%",
    // backgroundColor: "rgba(255, 0, 0, 0.2)",
    borderColor: "red",
    borderWidth: 1,
  },
});

export default LessonTapHandler;
