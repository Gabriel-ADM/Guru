import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function Question() {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Qual sua dúvida?</Text>
            <TextInput
                onChangeText={setInput}
                value={input}
                placeholder="Descreva sua situação!"
                style={styles.input}
                multiline={true}
                rows={10}
            />
            <Pressable style={styles.button}>
                <Text style={styles.paragraph}>Gerar respostas</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            backgroundColor: 'dimgrey',
          },
          paragraph: {
            margin: 12,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white'
        },
        input: {
            height: "100%",
            width: "80%",
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: 'white'
        },
        button: {
            width: "60%",
            margin: 20,
            padding: 10,
            backgroundColor: "purple",
            borderRadius: "30px",
        }
    }
);