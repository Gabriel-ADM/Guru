import { Pressable, StyleSheet, Text, View } from "react-native";

export default function OldChats(props, navigation) {
    return (
        <View style={styles.card} >
            <Pressable
                onPress={() => navigation.navigate(props.link)}
            >
                <Text style={styles.cardTitle}>{props.title}</Text>
                <Text style={styles.cardDesc}>{props.desc}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        paddingHorizontal: 60,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
    cardTitle: {
        margin: "1%",
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardDesc: {
        fontSize: 17,
        fontWeight: 'lighter',
        textAlign: 'center',
    }
})