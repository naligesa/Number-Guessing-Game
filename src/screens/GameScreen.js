import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "../constants/styles";
import Card from "../components/Card";
import { secondary } from "../constants/colors";
import CustomText from "../components/CustomText";

const generateRandomNumber = (min, max, exclude) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (maximum - minimum)) + minimum;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const initialGuess = generateRandomNumber(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      setCurrentGuess(props.userChoice);
      setTimeout(() => {
        props.onGameOver(rounds);
      }, 3000);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont Lie!!!", "You know that is wrong.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    } else {
      if (direction === "lower") {
        currentHigh.current = currentGuess;
      } else {
        currentLow.current = currentGuess;
      }
      const nextNumber = generateRandomNumber(
        currentLow.current,
        currentHigh.current,
        currentGuess
      );

      setCurrentGuess(nextNumber);
      setRounds((rounds) => rounds + 1);
      setPastGuesses([nextNumber, ...pastGuesses]);
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Card style={styles.container}>
          <Text style={styles.title}> Computer's Guess </Text>
          <Text style={styles.selectedNumber}> {currentGuess} </Text>
          <View style={styles.btnLayout}>
            <TouchableOpacity
              style={[styles.reset, { alignSelf: "center" }]}
              onPress={() => nextGuessHandler("lower")}
            >
              <CustomText style={{ fontSize: 16, textAlign: "center" }}>
                Lower
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.reset,
                {
                  backgroundColor: secondary,
                  borderRadius: 30,
                  alignSelf: "center",
                },
              ]}
              onPress={() => nextGuessHandler("greater")}
            >
              <CustomText style={{ fontSize: 16, textAlign: "center" }}>
                {" "}
                Greater{" "}
              </CustomText>
            </TouchableOpacity>
          </View>
        </Card>
        <FlatList
          style={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
          data={pastGuesses}
          keyExtractor={(item, index) => "Key " + index}
          renderItem={({ item, index }) => (
            <View style={styles.guessesTyle}>
              <Text> #{index + 1}</Text>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default GameScreen;
