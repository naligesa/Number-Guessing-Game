import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../constants/styles";
import { secondary, accent, titleColor, primary } from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={[styles.mainContainer, { marginHorizontal: 30 }]}>
      <Text style={styles.text}> Game Over!!! </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/original.png")}
          style={styles.image}
        />
      </View>
      <Text
        style={[styles.roundsText, { textAlign: "center", color: titleColor }]}
      >
        Computer guessed your number in {props.rounds} rounds.
      </Text>
      <Text style={[styles.roundsText, { textAlign: "center", color: accent }]}>
        You Selected : {props.number}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: primary,
          borderRadius: 30,
          marginTop: 30,
          padding: 10,
        }}
        onPress={() => props.restartGame()}
      >
        <Text style={[styles.text, { padding: 3 }]}> Restart Game </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameOverScreen;
