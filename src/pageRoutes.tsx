import {} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Images, routes } from './constants';
import OnBoard from './screens/onBoard';
import DashBoard from './screens/dashBoard';
import SearchPeople from './screens/searchPeople';
import Transaction from './screens/transaction';

const PageRoutes = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={routes.onBoard} component={OnBoard} options={{ headerShown: false }} />
                <Stack.Screen name={routes.dashBoard} component={DashBoard} options={{ headerShown: false }} />
                <Stack.Screen
                    name={routes.searchPeople}
                    component={SearchPeople}
                    options={{
                        headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                        headerTitleAlign: 'center',
                        headerTitle: 'Search people',
                        headerStyle: {backgroundColor: '#0E164D'},
                        headerBackVisible: false,
                        headerShown: false
                    }}
                />
                <Stack.Screen name={routes.transaction} component={Transaction} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PageRoutes;