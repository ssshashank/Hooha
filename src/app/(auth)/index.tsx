// imports
import { useContext } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { ThemeContext } from "@Providers/themeProvider";
import { AnimatedRichButton } from "@Components/RichButton/RichButton";
import { Colors } from "@Styles/theme.type";
import { hp, wp } from "@Helpers/dimension";
import { RightArrow } from "@Assets/svg/rightArrow";
import { useSharedValue, withSpring } from "react-native-reanimated";
import { FontSize, FontWeight } from "@Constants/application";


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

    const handleButtonPressIn  = () => gap.value = withSpring(30);
    const handleButtonPressOut = () => gap.value = withSpring(15);

    // return
    return (
        <ScrollView style={styles.scrollView} alwaysBounceVertical={false}>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Hoo-Ha</Text>
                        <Text style={styles.tagline}>
                            Easiest way to{'\n'}manage your {'\n'}expenses.
                        </Text>
                        <AnimatedRichButton style={{ ...styles.button, gap }} onPressIn={handleButtonPressIn} onPressOut={handleButtonPressOut}>
                            <Text style={styles.buttonText}>Get Started</Text>
                            <RightArrow />
                        </AnimatedRichButton>
                    </View>
                    <Text style={styles.copyright}>Hoo-Ha | Copyright ©{new Date().getFullYear()}</ Text>
                </View>
            </View>
        </ScrollView>

    );
};


// styleSheet
const createStyles = (theme: Colors) => StyleSheet.create({
    scrollView: {
        backgroundColor: theme.background,
    },
    container: {
        height: hp(89),
        width: wp(90),
        margin: 'auto',
        backgroundColor: 'transparent',
    },
    topContainer: {
        height: hp(45),
        display: 'flex',
        flexDirection: 'column-reverse'
    },
    bottomContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: FontSize.XXXL,
        fontWeight: FontWeight.W500,
        color: theme.primaryText,
        opacity: 0.4
    },
    tagline: {
        fontSize: FontSize.TALL,
        fontWeight: FontWeight.W500,
        color: theme.primaryText,
        opacity: 0.8
    },
    button: {
        flexDirection: 'row',
        marginTop: hp(2),
        color: theme.background,
        borderRadius: 0,
        elevation: 10,
        shadowOpacity: 0.2,
        shadowColor: theme.primary,
        backgroundColor: theme.primary,
    },
    buttonText: {
        color: theme.background,
        fontSize: FontSize.MD
    },
    copyright: {
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: FontWeight.W500,
        color: theme.primaryText,
        opacity: 0.6
    }
});

export default LandingScreen;

