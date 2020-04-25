import React from "react";
import { Text, View } from "react-native";
import styles from "../constants/styles";

const CustomText = ({ children, style }) => {
  return <Text style={{ ...styles.customText, ...style }}> {children} </Text>;
};

export default CustomText;
