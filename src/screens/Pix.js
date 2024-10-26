import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import PixTransfer from './PixTransfer';


export default function Pix(){

    const route = useRoute();
    const {miniCard} = route.params;

    return (
        <View style={styles.container}>
            <Text>Pagina Pix</Text>
            <Text>Detalhes do Pix: {miniCard.title}</Text>
            <PixTransfer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    
    }
})