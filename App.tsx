import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './app/screens/Home';
import { RestaurantDetails } from './app/screens/RestaurantDetails';
import { RestaurantByCuisine } from './app/screens/RestaurantByCuisine';
import { Favorites } from './app/screens/Favorites';
import { Map } from './app/screens/Map';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FavoritesProvider } from './app/context/FavoritesContext';
import { RootStackParamList } from './app/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: '#1C1C1E' },
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
            <Stack.Screen name="RestaurantByCuisine" component={RestaurantByCuisine} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Favorites" component={Favorites} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </SafeAreaProvider>
  );
}
