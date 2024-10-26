import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function MiniButton({miniCard}){

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.miniCardContainer} onPress={() => navigation.navigate('Tela pix', {miniCard})}>
            <Text style={styles.textMiniCard}>{miniCard.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    miniCardContainer: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius:8,
        borderColor: '#404040',
        marginRight: 6,
        marginLeft: 6,
        
    },

    textMiniCard: {
        color:'#fff',
        fontSize: 22,
        padding: 10,
        textAlign: 'center',
    },
})