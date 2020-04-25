import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import styles from "../constants/styles";
import Card from "./Card";
import { secondary } from "../constants/colors";

const ConfirmedCard = ({ selectedNumber, onPressStart }) => {
  return (
    <Card style={styles.confirmCard}>
      <Text style={styles.title}> You Selected </Text>
      <Text style={styles.selectedNumber}>{selectedNumber}</Text>
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: secondary,
          marginTop: 20,
          padding: 10,
          borderRadius: 25,
          alignSelf: "center",
        }}
        onPress={() => onPressStart(selectedNumber)}
      >
        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
          {" "}
          Start Game{" "}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

export default ConfirmedCard;
