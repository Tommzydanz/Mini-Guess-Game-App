

import { View, StyleSheet, Image, Text, ScrollView, useWindowDimensions } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from '../components/ui/PrimaryButton';



function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }){

    const {width , height } =  useWindowDimensions();

    let imageSize = 300

    if(width < 380){
        imageSize = 150;
    }

    if(height < 500){
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
       <ScrollView style={styles.screen}>
           <View style={styles.rootContainer}>
             <Title>GAME OVER!</Title>
                <LinearGradient style={[styles.imageContainer, imageStyle]} colors={[Colors.accent500, Colors.primary700]}>
                <Image source={require('../assets/images/chess.png')} style={styles.image}/>
                </LinearGradient>
                <View>
                    <Text style={styles.summaryText}>Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
                </View>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
       </ScrollView> 
    );
}

export default GameOverScreen;


// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        
        alignItems: 'center'
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
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