// imports
import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import Animated, {
    FadeIn,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { ThemeContext } from "@Providers/themeProvider";
import { AnimatedRichButton } from "@Components/RichButton/RichButton";
import { Colors } from "@Styles/theme.type";
import { RightArrow } from "@Assets/svg/arrow";
import { FontSize, FontWeight } from "@Constants/application";
import { BackgroundPattern } from "@Assets/svg/bgPattern";
import { useDimension } from "@Hooks/useDimension";

/*
 * @Function() Landing Screen
 * @Description() This is the Landing Screen
 * @Params() None
 * @Return() React.FC
 */
const LandingScreen: React.FC = () => {
    const gap = useSharedValue<number>(15);
    const appTheme = useContext(ThemeContext);
    const { theme } = appTheme;
    const styles = createStyles(theme);

    // animate button on press
    const handleButtonPressIn = () => (gap.value = withSpring(30));
    const handleButtonPressOut = () => (gap.value = withSpring(15));
    const handleOnClick = () => router.push("/login");

    return (
        <View style={styles.scrollView}>
            <View style={styles.container}>
                <BackgroundPattern style={styles.backgroundPattern} />
                <View style={styles.bottomContainer}>
                    <View style={{ flex: 1 }}>
                        <Animated.View entering={FadeIn.delay(200).duration(300)}>
                            <Text style={styles.title}>Hooha</Text>
                        </Animated.View>
                        <Animated.View entering={FadeIn.delay(400).duration(300)}>
                            <Text style={styles.tagline}>Split your bills{"\n"}with Hooha</Text>
                        </Animated.View>
                        <Animated.View entering={FadeIn.delay(400).duration(300)}>
                            <Text style={styles.subTitle}>Splitting bills with your friends? We've got you covered.</Text>
                        </Animated.View>
                        <Animated.View entering={FadeIn.delay(600).duration(300)}>
                            <AnimatedRichButton
                                style={{ ...styles.button, gap }}
                                onPress={handleOnClick}
                                onPressIn={handleButtonPressIn}
                                onPressOut={handleButtonPressOut}>
                                <Text style={styles.buttonText}>Get Started</Text>
                                <RightArrow />
                            </AnimatedRichButton>
                        </Animated.View>
                        <Animated.View entering={FadeIn.delay(800).duration(300)}>
                            <Text style={styles.copyright}>
                                Hoo-Ha | Copyright ©{new Date().getFullYear()}
                            </Text>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </View>
    );
};

// styleSheet
const createStyles = (theme: Colors) => {
    const { wp, hp, scaleFontSize } = useDimension();
    return StyleSheet.create({
        scrollView: {
            flex: 1,
            backgroundColor: theme.background,
        },
        container: {
            width: wp(90),
            margin: "auto",
            backgroundColor: "transparent",
            flex: 1,
        },
        backgroundPattern: {
            position: "absolute",
            right: -wp(40),
            top: -hp(26),
            width: wp(100),
            height: hp(100),
        },
        bottomContainer: {
            bottom: 0,
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
        },
        title: {
            fontSize: scaleFontSize(FontSize.XL),
            fontWeight: FontWeight.W500,
            color: theme.primaryText,
            opacity: 0.5,
            marginVertical: hp(0.5),
        },
        tagline: {
            fontSize: scaleFontSize(FontSize.XXL),
            fontWeight: FontWeight.W600,
            color: theme.primaryText,
            opacity: 0.8,
        },
        subTitle: {
            fontSize: scaleFontSize(FontSize.SM),
            marginVertical: hp(1),
            fontWeight: FontWeight.W400,
            color: theme.secondaryText,
            opacity: 0.5,
        },
        button: {
            width: wp(90),
            flexDirection: "row",
            marginTop: hp(2),
            borderRadius: 2,
            color: theme.background,
            backgroundColor: theme.primary,
            marginBottom: hp(15),
        },
        buttonText: {
            color: theme.background,
            fontSize: scaleFontSize(FontSize.SM),
        },
        copyright: {
            position: 'absolute',
            bottom: 0,
            left:0,
            right:0,
            textAlign: "center",
            fontWeight: FontWeight.W400,
            color: theme.primaryText,
            fontSize: scaleFontSize(FontSize.XS),
            opacity: 0.5,
        }
    });
};

export default LandingScreen;
