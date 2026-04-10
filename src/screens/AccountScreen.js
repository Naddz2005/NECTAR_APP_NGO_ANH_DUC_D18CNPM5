import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const menuItems = [
  { title: "Orders", icon: require("../../assets/images/orders.png") },
  { title: "My Details", icon: require("../../assets/images/details.png") },
  {
    title: "Delivery Address",
    icon: require("../../assets/images/delicery.png"),
  },
  {
    title: "Payment Methods",
    icon: require("../../assets/images/payment.png"),
  },
  { title: "Promo Cord", icon: require("../../assets/images/promo.png") },
  { title: "Notifications", icon: require("../../assets/images/bell.png") },
  { title: "Help", icon: require("../../assets/images/help.png") },
  { title: "About", icon: require("../../assets/images/about.png") },
];

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/avt.jpg")}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>Afsar Hossen</Text>
              <Image
                source={require("../../assets/images/edit.png")}
                style={styles.editIcon}
              />
            </View>
            <Text style={styles.email}>lmshuvo97@gmail.com</Text>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.left}>
                <Image source={item.icon} style={styles.icon} />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <Image
                source={require("../../assets/images/back_arrow.png")}
                style={styles.arrow}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Image
            source={require("../../assets/images/logout.png")}
            style={styles.logoutIcon}
          />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  editIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },

  email: {
    color: "#888",
    marginTop: 4,
  },

  menu: {
    paddingHorizontal: 20,
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },

  menuText: {
    fontSize: 16,
  },

  arrow: {
    width: 16,
    height: 16,
  },

  logoutBtn: {
    margin: 20,
    backgroundColor: "#F2F3F2",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },

  logoutText: {
    color: "#53B175",
    fontWeight: "bold",
    fontSize: 16,
  },
});
