// imports
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { AUTH_ROUTES } from '@Constants/routes';
import { ThemeContext } from '@Providers/themeProvider';

/*
 * @Function() Auth Layout
 * @Description() This is the Auth Layout
 * @Params() None
 * @Return() React.FC
*/
const AuthLayout: React.FC = () => {
    const appTheme = useContext(ThemeContext);
    const { theme } = appTheme;

    // return
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
                <Stack screenOptions={{ headerShown: false }}>
                    {Object.entries(AUTH_ROUTES || {}).map(([key, value]) => {
                        return (
                            <Stack.Screen key={key} name={value.name} options={{ headerShown: false, animation: 'none' }} />
                        );
                    })}
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default AuthLayout;
