import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";

const HomeScreen = () => <View style={styles.screen}><Text>Home Screen</Text></View>;
const TransactionScreen = () => <View style={styles.screen}><Text>Transaction Screen</Text></View>;
const BudgetScreen = () => <View style={styles.screen}><Text>Budget Screen</Text></View>;
const ProfileScreen = () => <View style={styles.screen}><Text>Profile Screen</Text></View>;

const BottomNav = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  const [expanded, setExpanded] = useState(false);

  // UseRef for smooth animation
  const scaleAnim = useRef(new Animated.Value(0)).current;

  const renderScreen = () => {
    switch (selectedTab) {
      case "home": return <HomeScreen />;
      case "transaction": return <TransactionScreen />;
      case "budget": return <BudgetScreen />;
      case "profile": return <ProfileScreen />;
      default: return <HomeScreen />;
    }
  };

  const toggleExpand = () => {
    if (expanded) {
      Animated.timing(scaleAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => setExpanded(false));
    } else {
      setExpanded(true);
      Animated.timing(scaleAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    }
  };

  return (
    <View style={styles.container}>
      {/* Render Screen */}
      {renderScreen()}

      {/* Floating Buttons */}
      {expanded && (
        <View style={styles.extraButtonsContainer}>
          <Animated.View style={[styles.extraButton, { opacity: scaleAnim, transform: [{ scale: scaleAnim }] }]}>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.extraText}>💰</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={[styles.extraButton, { opacity: scaleAnim, transform: [{ scale: scaleAnim }] }]}>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.extraText}>📊</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab("home")}>
          <Text style={[styles.navText, selectedTab === "home" && styles.activeText]}>🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab("transaction")}>
          <Text style={[styles.navText, selectedTab === "transaction" && styles.activeText]}>🔄</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={toggleExpand}>
          <Text style={styles.addText}>{expanded ? "✖" : "+"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab("budget")}>
          <Text style={[styles.navText, selectedTab === "budget" && styles.activeText]}>📉</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab("profile")}>
          <Text style={[styles.navText, selectedTab === "profile" && styles.activeText]}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 5,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navText: {
    fontSize: 20,
    color: "grey",
  },
  activeText: {
    color: "#6a4df4",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#6a4df4",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -30 }],
    top: -30,
    elevation: 5,
  },
  addText: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
  extraButtonsContainer: {
    position: "absolute",
    display: 'flex',
    bottom: 90, // Adjust as needed
    left: "50%",
    transform: [{ translateX: -25 }], // Centering
    flexDirection: "column", // Stack vertically
    alignItems: "center", // Center buttons horizontally
  },
  extraButton: {
    marginBottom: 10,
  },
  circleButton: {
    backgroundColor: "#6a4df4",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    elevation: 3,
  },
  extraText: {
    fontSize: 24,
    color: "white",
  },
});

export default BottomNav;
