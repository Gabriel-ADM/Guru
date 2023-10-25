import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import StackRoutes from "../routes/stack.routes";


export default function TowTruckOne() {
    const [input, setInput] = useState("");

    return (
        <View style={styles.header}>
            <Text style={styles.paragraph}>Local da ocorrência</Text>
            <View style={styles.container}>
            <TextInput
                onChangeText={setInput}
                value={input}
                placeholder="Nos envie a sua localização atual!"
                style={styles.input}
                multiline={true}
                rows={10}
            />
            <Pressable style={({pressed}) => [
                {
                    backgroundColor: pressed ? 'red' : 'blue',
                },
                styles.button,
            ]}onPress={() => <StackRoutes />}>
                <Text style={styles.paragraph}>Localizar no mapa</Text>
            </Pressable>
            </View>
            </View>
    );
}

const styles = StyleSheet.create(
    {
        header: {
            padding: 12,
            backgroundColor: '#5d0184',
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f4f4f4 ',
          },
          paragraph: {
            margin: 12,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black'
        },
        button: {
            width: "60%",
            margin: 20,
            padding: 10,
            backgroundColor: "#f4f4f4",
            borderRadius: "30px",
        }
    }
);