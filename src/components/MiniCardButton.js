import { Text, View, StyleSheet, Image } from "react-native"

export default function MiniButton(props){

    return(
        <View style={[styles.button, props.style]}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </View>
    )

}