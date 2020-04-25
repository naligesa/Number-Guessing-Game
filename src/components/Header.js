import React from "react";
import { Text, View } from "react-native";
import styles from "../constants/styles";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {props.title} </Text>
    </View>
  );
};

export default Header;
