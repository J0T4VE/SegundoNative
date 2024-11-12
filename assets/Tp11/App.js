import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Home from './Home';
import Academico from './Academico';
import Experiencia from './Experiencia';
import Idiomas from './Idiomas';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Acadêmico" 
          component={Academico} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="graduation-cap" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Experiência" 
          component={Experiencia} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="briefcase" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Idiomas" 
          component={Idiomas} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="language" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
 