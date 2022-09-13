import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';

import ItemListScreen from '../screens/ItemListScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer >
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{
        title: 'EnjoYour trip',
        headerStyle: {
          backgroundColor: '#6ead3a',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontFamily: 'qwitcher-bold',
          fontSize: 40,
        },
      }} />
      <Stack.Screen name="ItemList" component={ItemListScreen} options={{
        title: 'Список вещей', headerStyle: {
          backgroundColor: '#6ead3a',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} options={{
          title: 'Погода',
          headerStyle: {
            backgroundColor: '#6ead3a',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: '#efedef',
        tabBarInactiveTintColor: '#222022',
        tabBarActiveBackgroundColor: '#4c4947',
        tabBarInactiveBackgroundColor: '#ceccce',
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Разделы',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="bag-suitcase" size={24} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialCommunityIcons
                name="weather-partly-cloudy"
                size={30}
                color="black"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Список покупок',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-bag" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Entypo>['name'];
  color: string;
}) {
  return <Entypo size={24} style={{ marginBottom: -3 }} {...props} />;
}
