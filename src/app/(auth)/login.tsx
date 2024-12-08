// imports
import { router } from "expo-router";
import { useContext, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { hp, wp } from "@Helpers/dimension";
import { ThemeContext } from "@Providers/themeProvider";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


/*
 * @Function() Login Screen
 * @Description() This is the Login Screen
 * @Params() None
 * @Return() React.FC
*/
const LoginScreen: React.FC = () => {
    const appTheme = useContext(ThemeContext);
    const { theme } = appTheme;
    const styles = createStyles(theme);
    const animatedScrollView = useSharedValue<number>(0);
    const handleOnClick = () => router.back();

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: animatedScrollView.value,
    }));

    useEffect(() => {
        animatedScrollView.value = withTiming(1, { duration: 500 });
    }, []);

    // return
    return (
        <ScrollView style={[styles.scrollView]} alwaysBounceVertical={true}>
            <Animated.View style={[styles.container, animatedStyle]}>
                <Text onPress={handleOnClick}>Login</Text>
            </Animated.View>
        </ScrollView>
    );
};

// styleSheet
const createStyles = (theme: any) => StyleSheet.create({
    scrollView: {
        backgroundColor: theme.background,
    },
    container: {
        position: 'relative',
        height: hp(89),
        width: wp(90),
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },

});

export default LoginScreen;
