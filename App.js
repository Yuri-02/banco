import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Home from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack'
import Pix from './src/screens/Pix';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Demo() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',

        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
    </View>
  );
}

export default function App() {
  // const insets = useSafeAreaInsets()

  return (
    
    <SafeAreaProvider style={styles.container}>
    {/* <NavigationContainer>
      <Tab.Navigator initialRouteName="Tela inicial">
      <Tab.Screen name="Tela inicial" component={Home} />
      <Tab.Screen name="Detalhes do amigo" component={Pix} />
      </Tab.Navigator>
      </NavigationContainer> */}


      <NavigationContainer>
        <Stack.Navigator>
           
          <Stack.Screen name="Tela inicial" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Tela pix" component={Pix} />

        </Stack.Navigator>
      </NavigationContainer>    
          <StatusBar style="auto" />
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
 
  },
});
