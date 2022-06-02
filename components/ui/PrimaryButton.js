import {View, Pressable, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';



function PrimaryButton({children, onPress}) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPress} android_ripple={{color: Colors.primary700}}
            style={({pressed}) =>  pressed ?  [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer}>
            <Text style={styles.buttonText} >{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        
        margin: 4,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: Colors.accent500,
        shadowColor: 'black',
        shadowRadius: 24,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        overflow: 'hidden'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,   
    },
    buttonInnerContainer: {
        backgroundColor: Colors.accent500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 8,
    },
    pressed:{
        opacity: 0.75,
    }
});