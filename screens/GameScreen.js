import { useState, useEffect } from 'react';

import {View, StyleSheet, Text, Alert, FlatList} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import InstructionText from '../components/ui/InstructionText';
import Colors from '../constants/Colors';
import GuessLogItem from '../components/game/GuessLogItem';

import { Ionicons} from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }){
    const initialGuess = generateRandomBetween(
        1, 
        100, 
        userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);


    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])


    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])



    function nextGuessHandler(direction){ // direction => 'lower' or 'higher'
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert(
                "Don't Lie!", "You know this direction is wrong...",
                [{text: 'Sorry!', style: 'cancel'}]
            )
            return;
        }


        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary);
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevRounds) => [newRndNumber, ...prevRounds]);

    }


    // length of guesses
    const guessRoundLength = guessRounds.length

    return(
        <View style={styles.screen}>
            <Title>Opponent Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    {/* we preconfigure using the function.bind(this, 'firstparameter') */}
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                    
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                data={guessRounds} renderItem={(itemData) => 
                <GuessLogItem roundNumber={(guessRoundLength) - itemData.index} 
                guessNumber={itemData.item}/>}
                keyExtractor={(item) => {
                    return item
                }}
            />
            </View>
            
                
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24, 
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        fontStyle: 'italic',
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
    
    
});