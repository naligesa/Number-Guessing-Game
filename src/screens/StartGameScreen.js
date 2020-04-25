import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import styles from "../constants/styles";
import Card from "../components/Card";
import ConfirmedCard from "../components/ConfirmedCard";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState(""); //TextInput
  const [isConfirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const onValueChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    let chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    setConfirmed(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <Card style={styles.container}>
          <Text style={styles.title}>Enter a number</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onValueChange}
            value={enteredValue}
          />
          <View style={styles.btnLayout}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.reset, { backgroundColor: "red" }]}
              onPress={resetInputHandler}
            >
              <Text style={{ color: "white", fontSize: 16 }}> Reset </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.reset}
              onPress={confirmInputHandler}
            >
              <Text style={{ color: "white", fontSize: 16 }}> Confirm </Text>
            </TouchableOpacity>
          </View>
        </Card>
        {isConfirmed && (
          <ConfirmedCard
            selectedNumber={selectedNumber}
            onPressStart={props.onStart}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
