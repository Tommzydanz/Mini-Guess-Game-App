import { Text, View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';

function NumberContainer({children}) {
    return (
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{children}</Text>
      </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width // window exclude status bar while screen include status bar


const styles = StyleSheet.create({
    numberContainer:{
        margin: deviceWidth < 380 ? 12: 24,
        padding: deviceWidth < 380 ? 12: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 4,
        borderColor: Colors.primary500,
        
    },
    numberText:{
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});