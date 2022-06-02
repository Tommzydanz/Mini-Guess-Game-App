import { Text, StyleSheet, Platform} from 'react-native';
import Colors from '../../constants/Colors';



function Title({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderColor: 'white',
        // borderWidth: Platform.OS ? 0 : 2,
        //borderWidth: Platform.select({ios: 0, android: 2}),
        borderRadius: 24,
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
});