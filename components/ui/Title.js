import { Text, StyleSheet} from 'react-native';
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
        borderWidth: 2,
        borderRadius: 24,
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
});