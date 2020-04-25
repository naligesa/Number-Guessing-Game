import React from "react";
import { View } from "react-native";
import styles from "../constants/styles";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;
