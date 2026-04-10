import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

function Row({ label, value, bold }) {
  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.right}>
        <Text style={[styles.value, bold && { fontWeight: "bold" }]}>
          {value}
        </Text>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function CheckoutModal({
  visible,
  onClose,
  navigation,
  onPlaceOrder,
}) {
  if (!visible) return null;
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Checkout</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Content */}
          <View style={styles.section}>
            <Row label="Delivery" value="Select Method" />
            <Row label="Payment" value="💳" />
            <Row label="Promo Code" value="Pick discount" />
            <Row label="Total Cost" value="$13.97" bold />
          </View>

          {/* Terms */}
          <Text style={styles.terms}>
            By placing an order you agree to our{" "}
            <Text style={styles.link}>Terms</Text> And{" "}
            <Text style={styles.link}>Conditions</Text>
          </Text>

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onClose();
              onPlaceOrder(); // gọi từ CartScreen
            }}
          >
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },

  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  close: {
    fontSize: 20,
  },

  section: {
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  label: {
    color: "#666",
    fontSize: 15,
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  value: {
    fontSize: 15,
    marginRight: 8,
  },

  arrow: {
    fontSize: 18,
    color: "#999",
  },

  terms: {
    marginTop: 15,
    fontSize: 13,
    color: "#777",
  },

  link: {
    fontWeight: "bold",
    color: "#000",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#53B175",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
