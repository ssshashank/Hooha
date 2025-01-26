// imports
import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import Animated, { FadeIn, useSharedValue, withSpring } from "react-native-reanimated";
import { ThemeContext } from "@Providers/themeProvider";
import { AnimatedRichButton } from "@Components/RichButton/RichButton";
import { Colors } from "@Styles/theme.type";
import { RightArrow } from "@Assets/svg/rightArrow";
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
                        <Animated.Text style={styles.title} entering={FadeIn.delay(200).duration(300)}>Hooha</Animated.Text>
                        <Animated.Text style={styles.tagline} entering={FadeIn.delay(400).duration(300)} >
                            Split your bills{'\n'}with Hooha
                        </Animated.Text>
                        <Animated.Text style={styles.subTitle} entering={FadeIn.delay(400).duration(300)}>
                            Splitting bills with your friends? We've got you covered.
                        </Animated.Text>
                        <Animated.View entering={FadeIn.delay(600).duration(300)}>
                            <AnimatedRichButton
                                style={{ ...styles.button, gap }}
                                onPress={handleOnClick}
                                onPressIn={handleButtonPressIn}
                                onPressOut={handleButtonPressOut}
                            >
                                <Text style={styles.buttonText}>Get Started</Text>
                                <RightArrow />
                            </AnimatedRichButton>
                        </Animated.View>
                        <Animated.Text style={styles.copyright} entering={FadeIn.delay(800).duration(300)}>
                            Hoo-Ha | Copyright ©{new Date().getFullYear()}
                        </Animated.Text>
                    </View>
                </View>
            </View>
        </View >
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
            margin: 'auto',
            backgroundColor: "transparent",
            flex: 1
        },
        backgroundPattern: {
            position: "absolute",
            right: -wp(40),
            top: -hp(26),
            width: wp(100),
            height: hp(100),
        },
        bottomContainer: {
            bottom: 30,
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            position: 'absolute'
        },
        title: {
            fontSize: scaleFontSize(FontSize.LG),
            fontWeight: FontWeight.W500,
            color: theme.primaryText,
            opacity: 0.4,
        },
        tagline: {
            fontSize: scaleFontSize(FontSize.XXL),
            fontWeight: FontWeight.W500,
            color: theme.primaryText,
            opacity: 0.8,
        },
        subTitle: {
            fontSize: scaleFontSize(FontSize.XS),
            marginVertical: hp(1),
            color: theme.secondaryText,
            opacity: 0.7
        },
        button: {
            width: wp(90),
            flexDirection: "row",
            marginTop: hp(2),
            borderRadius: 1,
            color: theme.background,
            backgroundColor: theme.primary,
            marginBottom: hp(5)
        },
        buttonText: {
            color: theme.background,
            fontSize: scaleFontSize(FontSize.DEFAULT),
        },
        copyright: {
            textAlign: "center",
            marginTop: 20,
            fontWeight: FontWeight.W500,
            color: theme.primaryText,
            fontSize: scaleFontSize(FontSize.XS),
            opacity: 0.6,
        }
    });
};

export default LandingScreen;


