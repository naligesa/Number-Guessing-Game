import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import Header from "./src/components/Header";
import StartGameScreen from "./src/screens/StartGameScreen";
import { primary } from "./src/constants/colors";
import styles from "./src/constants/styles";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [noOfRounds, setRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log("App loading error", err)}
      />
    );
  }

  const resetGameHandler = () => {
    setRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);
  };

  const gameOverHandler = (rounds) => {
    setRounds(rounds);
  };

  let content = <StartGameScreen onStart={startGameHandler} />;
  if (userNumber && noOfRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (noOfRounds > 0) {
    content = (
      <GameOverScreen
        rounds={noOfRounds}
        restartGame={resetGameHandler}
        number={userNumber}
      />
    );
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={primary} />
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}
