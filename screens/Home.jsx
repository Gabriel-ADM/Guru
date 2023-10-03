import { Text, View, StyleSheet, VirtualizedList, FlatList } from "react-native";
import OldChats from "../components/OldChats";

const getOldChats = (_data, index) => ({
  id: index,
  title: `Item de número ${index + 1}`,
  desc: `Resumo de chat ${index + 1}`,
})

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GURU</Text>
      <Text style={styles.paragraph}>Alguma curiosidade personalizada para o usuário</Text>
      {/* <FlatList
        data={oldChatsArray} // Replace with your actual data array
        initialNumToRender={5}
        renderItem={({ item }) => <OldChats title={item.title} desc={item.desc} />}
        keyExtractor={item => item.id}
      /> */}

      <VirtualizedList
        initialNumToRender={3}
        renderItem={({ item }) => <OldChats title={item.title} desc={item.desc} />}
        keyExtractor={item => item.id}
        getItemCount={(_data) => 5}
        getItem={getOldChats}
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
    title: {
      margin: "7%",
      fontSize: 25,
      fontWeight: 'bolder',
      textAlign: 'center',
      color: 'white'
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