import { Stack } from "expo-router"
const RootLayot = () => {
    return <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='auth' options={{ headerShown: false }} />
    </Stack>;
};

export default RootLayot;
