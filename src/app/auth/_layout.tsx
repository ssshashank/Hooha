// imports
import React from 'react';
import { Stack } from 'expo-router';
import Landing from '.';

// AuthLayout
const AuthLayout = () => {

    // return
    return (
        <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
            <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
    )
}

export default AuthLayout;
