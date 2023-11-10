import React, {useState} from "react";
import { Text, Button, View, StyleSheet } from "react-native";


export default ({ inicial = 0, passo = 1 }) => {

    const [numero, setNumero] = useState(inicial);
    const [resultado, setResultado] = useState("");

    function inc(){
       setNumero(numero + passo);
    }

    function dec(){
        setNumero(numero - passo);
    }

    const parImpar = _=> numero % 2 == 0 ? setResultado("Par") : setResultado("Impar");

    return (
        <>
            <Text style={styles.container}>
                {resultado}
            </Text>
            <Text style={styles.container}>
                {numero}
            </Text>
            <View style={{flexDirection: "row"}}>
                <Button 
                    title="+"
                    onPress={inc}
                />
                <Button
                    title="-"
                    onPress={dec}
                />
                <Button
                    title="%"
                    onPress={parImpar}
                />
            </View>
            
        </>
        
    )

}

const styles = StyleSheet.create({
    container: {
      fontSize: 30
    }
  });