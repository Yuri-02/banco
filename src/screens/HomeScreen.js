import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, FlatList } from "react-native"
import BigCard from "../components/BigCard"
import MiniButton from "../components/MiniCardButton"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"


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

const miniCardHome = [
    {id: '1', title: 'Investir'},
    {id: '2', title: 'Pix'},
    {id: '3', title: 'Ordens'}
]

export default function Home(){
    const navigation = useNavigation();

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
            <View style={styles.miniCardContainer}>
                <FlatList
                    horizontal={true}
                    data={miniCardHome}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>(
                        <MiniButton miniCard={item}/>
                    )}
                />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {    
        flex: 1,
        backgroundColor: '#000',
      },
   

   icon:{
    fontSize: 24,
    backgroundColor: '#404040',
    color: '#fff',
    width:32,
    textAlign: 'center',
    borderRadius: 50
   },

   userName:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
   },
   
   userIconAndName:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16,
    gap: 8,
   },

  miniCardContainer:{
    
  },

})