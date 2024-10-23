import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Home from './src/screens/HomeScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* <FlatList data={} */}
          <Home/>
          <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
});
