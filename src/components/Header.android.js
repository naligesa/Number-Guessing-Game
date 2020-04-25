import React from "react";
import { Text, View, Platform } from "react-native";
import styles from "../constants/styles";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...styles.headerAndroid,
      }}
    >
      <Text style={styles.text}> {props.title} </Text>
    </View>
  );
};

export default Header;
