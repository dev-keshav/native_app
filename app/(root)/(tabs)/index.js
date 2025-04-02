import { Link, router } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Expense Tracker</Text>
      <TouchableOpacity onPress={() => router.push("/firstPage")}><Text style={styles.buttonText}>Let's Get Started</Text> </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7f3dff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: 'white'
  },
  subtitle: {
    fontSize: 38,
    color: "white",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#7f3dff",
    width: 240,
    backgroundColor: '#eee5ff',
    textAlign: 'center',
    paddingBlock: 15,
    paddingInline: 20,
    borderRadius: 10,

  },
});