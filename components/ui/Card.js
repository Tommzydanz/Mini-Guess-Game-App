import { Text, StyleSheet, View, Dimensions} from 'react-native'
import Colors from '../../constants/Colors';


function Card({children}) {
  return (
    <View style={styles.card}>
        {children}
      </View>
    )
  
}

export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal:24,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: Colors.primary500,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 6
    },
});