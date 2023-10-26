import { View, Text, StyleSheet, TextInput, Pressable, Image } from "react-native";
import { useState } from "react";

export default function ClaimType({ navigation }) {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={"https://reactnative.dev/img/tiny_logo.png"}
            />
            <View style={styles.questionBox}>
                <Text style={styles.title}>Está todo mundo bem?</Text>
                {/* <TextInput
                    onChangeText={setInput}
                    value={input}
                    placeholder="Descreva sua situação!"
                    style={styles.input}
                    multiline={true}
                    rows={10}
                /> */}
                <Pressable style={styles.button}>
                    <Text style={styles.title}>CARRO</Text>
                    <Text style={styles.paragraphGood}>Todo mundo está bem!</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.title}>SAÚDE</Text>
                    <Text style={styles.paragraphBad}>Alguém está ferido!</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            backgroundColor: 'lightergrey',
        },
        title: {
            marginTop: 12,
            fontSize: 20,
            fontWeight: 'bolder',
            textAlign: 'center',
            color: '#35014c'
        },
        paragraphGood: {
            margin: 12,
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'green'
        },
        paragraphBad: {
            margin: 12,
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'red'
        },
        questionBox: {
            marginTop: 50,
        },
        // input: {
        //     height: "100%",
        //     width: "100%",
        //     borderWidth: 0.5,
        //     padding: 10,
        //     color: 'white'
        // },
        button: {
            marginTop: 50,
            padding: 10,
            borderWidth: 1,
            borderRadius: "5px",
        },
        tinyLogo: {
            width: 50,
            height: 50,
        },
    }
);
