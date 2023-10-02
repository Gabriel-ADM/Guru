import { Text, View, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Welcome to the home page</Text>
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
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: 'white'
          },
    }
);