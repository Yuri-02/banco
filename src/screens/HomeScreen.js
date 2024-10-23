import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, FlatList } from "react-native"
import BigCard from "../components/BigCard"

const cardsHome = [
    {id: '1', 
    title: 'Investimentos', 
    brazilFlag: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg',
    subTitle: 'Investimento Nacional',
    description: 'Total investido + Conta investimento',
    value: 'R$150,00',
    percent: '▲ 10,64%',
    month: '(12 meses)',
    graph: ''
    }
]

export default function Home(){
    return (

        <SafeAreaView style={styles.container}>
            
                
                    <View style={styles.userIconAndName}>
                        <Text style={styles.icon}>Y</Text>
                        <Text style = {styles.userName}>Yuri →</Text>
                    </View>
                    <FlatList
                        data={cardsHome}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) =>(
                            <BigCard cardList={item} />
                        )}
                    />
                    {/* <View style={styles.investmentContainer}>
                        <Text style={styles.investmentTitle}>Investimentos</Text>
                        
                        <View style={styles.investmentCard}>
                            <Image style={styles.brazilFlag} source={require('../img/2-bandeira-do-brasil.webp')}/>
                            <Text style={styles.investmentSubTitle}>  Investimento Nacional </Text>
                            <Text style={styles.investmentDescription}>  Total investido + Conta investimento </Text>
                            <Text style={styles.investmentValue}>R$150,00</Text>
                            <View style={styles.investmentPercentAndMonth}>
                                <Text style={styles.investmentPercent}>Aguardando confirmação</Text>
                                <Text style={styles.investmentMonth}>(12 meses)</Text>
                                <Image /> Gráfico
                            </View>
                            
                        </View>
                    </View> */}
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    // brazilFlag: {
    //     width: 32,
    //     height: 32,
    //     borderRadius: 50,
    // }

})