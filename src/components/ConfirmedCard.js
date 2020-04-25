import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../constants/styles";
import Card from "./Card";
import { secondary } from "../constants/colors";

const ConfirmedCard = ({ selectedNumber, onPressStart }) => {
  return (
    <Card style={styles.confirmCard}>
      <Text style={styles.title}> You Selected </Text>
      <Text style={styles.selectedNumber}>{selectedNumber}</Text>
      <TouchableOpacity
        style={[styles.reset, { backgroundColor: secondary, marginTop: 20 }]}
        onPress={() => onPressStart(selectedNumber)}
      >
        <Text style={{ color: "white", fontSize: 16 }}> Start Game </Text>
      </TouchableOpacity>
    </Card>
  );
};

export default ConfirmedCard;
