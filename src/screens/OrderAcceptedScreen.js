import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function OrderAcceptedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Icon success */}
      <Image
        source={require("../../assets/images/tick.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Your Order has been accepted</Text>

      {/* Description */}
      <Text style={styles.desc}>
        Your items has been placed and is on
        {"\n"}it's way to being processed
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Track Order</Text>
      </TouchableOpacity>

      {/* Back */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MainTabs", {
            screen: "Home",
          })
        }
      >
        <Text style={styles.back}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  desc: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 20,
  },

  button: {
    backgroundColor: "#53B175",
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 15,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  back: {
    fontSize: 15,
    color: "#333",
  },
});
