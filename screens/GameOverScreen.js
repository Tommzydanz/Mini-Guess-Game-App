

import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from '../components/ui/PrimaryButton';



function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }){

    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <LinearGradient style={styles.imageContainer} colors={[Colors.accent500, Colors.primary700]}>
                <Image source={require('../assets/images/chess.png')} style={styles.image}/>
            </LinearGradient>
            <View>
                <Text style={styles.summaryText}>Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
        
    )
}

export default GameOverScreen;


const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderColor: Colors.primary800,
        borderWidth: 3,
        overflow: 'hidden',
        margin: 36
    }, 
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.60
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        marginVertical: 24, 
        fontSize: 20,
        textAlign: 'center'
    }, 
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500
    },
});