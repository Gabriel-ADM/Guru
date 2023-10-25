import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function QueryHistory(){
    return (
        <View style={styles.container}>
                    <Icon name="history" size={80} style={styles.icon}/>
                    <Text style={styles.paragraph}>Query History</Text>
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
            marginTop: 0,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white'
        },
        icon: {
            color: 'white'
        }
    }
);