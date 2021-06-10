import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createAppContainer } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/component/Home';
import Logado from './src/component/Logado';
import Sobre from './src/component/Sobre';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  var condicao = false;

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {condicao ? (
          <Drawer.Screen name="Home" component={Home} />
        ) : (
          <Drawer.Screen name="Logado" component={Logado} />
        )}
        <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;