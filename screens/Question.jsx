import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function Question () {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Qual sua dúvida?</Text>
            <TextInput  
                onChangeText={setInput}
                value={input}
                placeholder="Está com algum problema?"
                style={styles.input} 
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            backgroundColor: 'gray',
          },
          paragraph: {
            margin: 12,
            marginTop: 0,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white'
          },
            input: {
            height: 40,
            width: "60%",
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: 'white'
          },
    }
);