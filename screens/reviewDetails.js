import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review details screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
