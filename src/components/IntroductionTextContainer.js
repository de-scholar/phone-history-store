import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const IntroductionTextContainer = (props) => {
    return (
<View style={styles.welcomeContent}>
            <Text style={styles.text}>{props.textToShow}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    welcomeContent: {
        backgroundColor:'rgba(255,255,255,0.3)',
        margin: 25,
        padding:10,
        borderRadius: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'

    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign:'center'
    }
});

export default IntroductionTextContainer;
