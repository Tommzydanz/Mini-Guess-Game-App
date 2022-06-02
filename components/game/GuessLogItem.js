import { Text, StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors';


function GuessLogItem ({roundNumber, guessNumber}) {
return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>#{roundNumber}</Text>
        <Text style={styles.listText}>Opponent's Guess: {guessNumber}</Text>
      </View>
    )
  }
export default GuessLogItem;

const styles = StyleSheet.create({
    listItem:{
        width: '100%',
        backgroundColor: Colors.accent500,
        padding: 12,
        marginVertical: 8,
        borderRadius: 40,
        borderColor: Colors.primary500,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        shadowOpacity: 0.25
    },
    listText: {
        fontFamily: 'open-sans'
    }
});