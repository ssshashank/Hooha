// imports
import { Link, router } from "expo-router";
import { Text, View } from "react-native";

/*
 * @Function() Login Screen
 * @Description() This is the Login Screen
 * @Params() None
 * @Return() React.FC
*/
const LoginScreen: React.FC = () => {
    
    const handleOnClick = () => router.back();
    // return
    return (
        <View>
            <Text onPress={handleOnClick}>Login</Text>
        </View >
    );
};

export default LoginScreen;
