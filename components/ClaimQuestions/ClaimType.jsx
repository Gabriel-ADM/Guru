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
                <Text style={styles.title}>Qual o tipo de ocorrido?</Text>
                <Pressable style={styles.button} onPress={() => navigation.push("Registro Fotografico")}>
                    <Text style={styles.title}>COLISÃO DIANTEIRA</Text>
                    <Text style={styles.paragraphGood}>Veículo assegurado colidiu pela frente</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.push("Registro Fotografico")}>
                    <Text style={styles.title}>COLISÃO TRASEIRA</Text>
                    <Text style={styles.paragraphGood}>Colidiram na traseira do veículo assegurado</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.push("Registro Fotografico")}>
                    <Text style={styles.title}>COLISÃO LATERAL</Text>
                    <Text style={styles.paragraphGood}>Colidiram na lateral do veículo assegurado</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.push("Registro Fotografico")}>
                    <Text style={styles.title}>ENGAVETAMENTO</Text>
                    <Text style={styles.paragraphGood}>Mais de dois veículos se chocaram</Text>
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
            marginTop: 8,
            fontSize: 18,
            fontWeight: 'bolder',
            textAlign: 'center',
            color: '#35014c'
        },
        paragraphGood: {
            margin: 10,
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
