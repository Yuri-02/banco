import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, FlatList } from "react-native"
import {useNavigation} from "@react-navigation/native"

export default function BigCard({cardList}){

    // const navigation = useNavigation()

    return(
        <View style={styles.container}>
            
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{cardList.title}</Text>
                
                <View style={styles.investmentCard}>
                    < Image style={styles.flag} source = {{uri: cardList.brazilFlag}} />
                    <Text style={styles.investmentSubTitle}>{cardList.subTitle}</Text>
                </View>
                <Text style={styles.investmentDescription}>{cardList.description}</Text>
                <Text style={styles.investmentValue}>{cardList.value}</Text>
                <View style={styles.investmentPercentAndMonth}>
                    <Text style={styles.investmentPercent}>{cardList.percent}</Text>
                    <Text style={styles.investmentMonth}>{cardList.month}</Text>
                    {/* <Image /> Gráfico */}
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#525252',
        borderRadius: 10,
        padding: 20,
    },
    
    title:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    investmentCard:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 10
    },

    flag:{
        width: 32,
        height: 32,
        borderRadius: 50
    },

    investmentSubTitle:{
        color: '#fff',
        fontSize: 16,
        marginTop: 5
    },

    investmentDescription:{
        color: '#fff',
        fontSize: 14,
        marginTop: 10
    },

    investmentValue:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },

    investmentPercentAndMonth:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        gap: 8,
        marginTop: 10
    },

    investmentPercent:{
        color: '#22c55e',
        fontSize: 16,
        fontWeight: 'bold'
    },

    investmentMonth:{
        color: '#fff',
        fontSize: 16
    }
 
})