import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import React, {useState} from "react";

export default function PixTransfer(){

    const [balance, setBalance] = useState(10)
    const [transfer, setTransfer] = useState('')

    const handleTransfer=()=>{
        const value = parseFloat(transfer)
        if (isNaN(value) || value <= 0){
            alert('Valor inválido ou negativo')
            return
        }
        if (value>balance){
            alert('Saldo insuficiente')
            return
        }
        alert('Pix realizado com sucesso')
        
        const newBalance = balance - value
        setBalance(newBalance)
    }


    return(
        <View style={styles.container}>
            <Text>Transferência de Pix</Text>
            <View>
                <TextInput 
                placeholder='Valor de transferência' 
                value={transfer}
                onChangeText={setTransfer}
                />
             </View>
             <View>
                <TouchableOpacity onPress={handleTransfer}>
                    <Text>Transferir</Text>
                </TouchableOpacity>
             </View>
             <Text>
                Saldo: R$ {balance}
                
             </Text>
        </View>

    )
}

const styles = StyleSheet.create({

})
