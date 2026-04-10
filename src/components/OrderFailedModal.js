import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";

export default function OrderFailedModal({
  visible,
  onClose,
  onRetry,
  navigation,
}) {
  if (!visible) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Close */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          {/* Image */}
          <Image
            source={require("../../assets/images/fail.png")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Title */}
          <Text style={styles.title}>Oops! Order Failed</Text>

          {/* Desc */}
          <Text style={styles.desc}>Something went terribly wrong.</Text>

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={onRetry}>
            <Text style={styles.buttonText}>Please Try Again</Text>
          </TouchableOpacity>

          {/* Back */}
          <TouchableOpacity
            onPress={() => {
              onClose();
              navigation.navigate("MainTabs", { screen: "Home" });
            }}
          >
            <Text style={styles.back}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
  },

  closeBtn: {
    position: "absolute",
    top: 15,
    left: 15,
  },

  closeText: {
    fontSize: 22,
  },

  image: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  desc: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#53B175",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 15,
    marginBottom: 15,
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
