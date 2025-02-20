import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TaskCardProps {
  title: string;
  description: string;
}
const TaskCard = ({ title, description }:TaskCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 10,
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default TaskCard;
