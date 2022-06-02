
import { useState } from 'react'

import { StyleSheet, Text, ImageBackground, SafeAreaView } from 'react-native';
import Colors from './constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
// using splash screen to wait for the fonts to load
import AppLoading from 'expo-app-loading';


import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';



export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberRounds){
    setGameIsOver(true);
    setGuessRounds(numberRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }

  

  return (
    <LinearGradient style={styles.rootScreen}
      colors={[Colors.accent500, Colors.primary700]}>
      <ImageBackground
          source={require("./assets/images/mona_esra.jpeg")}
          style={styles.rootScreen}
          resizeMode='cover'
          imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
   rootScreen: {
     flex: 1,
   },
   imageStyle:{
     opacity: 0.45,
   }

});


