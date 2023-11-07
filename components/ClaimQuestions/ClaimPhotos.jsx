import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

import { Camera, CameraType } from 'expo-camera';

export default function ClaimPhotos({ navigation }) {
    const [input, setInput] = useState("");

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={"https://reactnative.dev/img/tiny_logo.png"}
            />
            <View style={styles.questionBox}>
                <Text style={styles.title}>Registre imagens do veículo assegurado</Text>
                <Camera style={styles} type={type}>
                    <View style={styles.questionBox}>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                            <Text style={styles.title}>Região da colisão</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                            <Text style={styles.title}>Veículo, parte dianteira e traseira</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                            <Text style={styles.title}>Arredores do ocorrido (sinalizações de trânsito, via, etc...)</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
            <Pressable style={styles.confirmButton} onPress={() => navigation.push("Registro Fotografico")}>
                <Text style={styles.title}>Enviar</Text>
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
            backgroundColor: 'lightergrey',
        },
        cameraText: {
            textAlign: 'center',
        },
        title: {
            // marginTop: 12,
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
            margin: "auto",
            width: "80%"
        },
        button: {
            marginVertical: "15%",
            padding: "10%",
            borderWidth: 1,
            borderRadius: "5px",
        },
        confirmButton: {
            marginVertical: "10%",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: "10px",
            height: 50,
            width: "50%",
        },
        tinyLogo: {
            width: 50,
            height: 50,
        },
    }
);
