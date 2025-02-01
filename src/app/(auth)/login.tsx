// imports
import { router } from "expo-router";
import { useContext, useEffect, useRef, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { ThemeContext } from "@Providers/themeProvider";
import Animated, { useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming, FadeIn } from "react-native-reanimated";
import { useDimension } from "@Hooks/useDimension";
import { DEVICE_HEIGHT, DEVICE_WIDTH, FontSize, FontWeight } from "@Constants/application";
import { InputField } from "@Components/InputField";
import { AnimatedRichButton } from "@Components/RichButton/RichButton";
import { LeftArrow, RightArrow } from "@Assets/svg/arrow";
import { Pills } from "@Components/pills";
import { AnimatedPickerBody, Picker } from "@Components/Picker";

/*
 * @Function() Login Screen
 * @Description() This is the Login Screen
 * @Params() None
 * @Return() React.FC
*/
const LoginScreen: React.FC = () => {
    // app theme
    const appTheme = useContext(ThemeContext);
    const { theme } = appTheme;
    const styles = createStyles(theme);

    // button press animation
    const gap = useSharedValue<number>(15);
    const handleButtonPressIn = () => (gap.value = withSpring(30));
    const handleButtonPressOut = () => (gap.value = withSpring(15));
    const handleOnClick = () => router.back();

    // phone number code picker animation
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const height = useSharedValue<number>(46);
    const width = useSharedValue<number>(70);
    const translateY = useSharedValue<number>(0);
    const INITAL_HEIGHT = 46;
    const FINAL_HEIGHT = 400;
    const INITIAL_WIDTH = 70;
    const TOP_DISTANCE = useSharedValue<number>(0);
    const pickerRef = useRef<React.ElementRef<typeof Pressable>>(null);

    const pickerAnimatedStyle = useAnimatedStyle(() => ({
        height: height.value,
        width: width.value,
        zIndex: 1000,
        backgroundColor: 'white',
        borderRadius: 2,
        transform: [
            { translateY: translateY.value },
        ],
    }));

    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

    const handlePress = () => {
        if (!isPressed) {
            height.value = withTiming(FINAL_HEIGHT, { duration: 200, easing: Easing.inOut(Easing.ease) });
            width.value = withTiming(DEVICE_WIDTH * 0.9, { duration: 200, easing: Easing.inOut(Easing.ease) });
            translateY.value = withTiming(-(Math.abs(DEVICE_HEIGHT / 2 - TOP_DISTANCE.value) + ((FINAL_HEIGHT - INITAL_HEIGHT) / 2)),
                { duration: 200, easing: Easing.inOut(Easing.ease) });
            setIsPressed(true);
        }
    }

    const collapseSize = () => {
        if (isPressed) {
            height.value = withTiming(INITAL_HEIGHT, { duration: 200, easing: Easing.inOut(Easing.ease) });
            width.value = withTiming(INITIAL_WIDTH, { duration: 200, easing: Easing.inOut(Easing.ease) });
            translateY.value = withTiming(0, { duration: 200, easing: Easing.inOut(Easing.ease) });
            setIsPressed(false);
        }
    };

    const dismissKeyboard = () => Keyboard.dismiss();

    // login page side effects
    useEffect(() => {
        if (pickerRef.current) {
            // measureInWindow: x, y are relative to the entire window/screen
            pickerRef?.current?.measureInWindow((x: number, y: number) => {
                TOP_DISTANCE.value = y;
            });
        }
    }, []);

    // return
    return (
        <KeyboardAvoidingView
            style={styles.keyboardAvoidView}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={[styles.scrollView]}>
                    <Animated.View style={[styles.container]} >
                        {isPressed && (
                            <TouchableWithoutFeedback onPress={collapseSize}>
                                <View style={styles.overlay} />
                            </TouchableWithoutFeedback>
                        )}
                        <View style={styles?.pillsBox}>
                            <Pills pillStyle={styles?.pills} onPress={handleOnClick}>
                                <LeftArrow color={theme.primaryText} />
                                <Text style={styles?.pillsText}>Go Back</Text>
                            </Pills>
                        </View>
                        <View>
                            <View style={styles?.heading}>
                                <Text style={styles?.title}>Create your account</Text>
                                <Text style={styles?.subtitle}>Let's get started with Hooha</Text>
                            </View>
                            <View>
                                <Text style={styles?.labelStyle}>Phone number</Text>
                                <View style={{
                                    width: DEVICE_WIDTH * 0.9,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    gap: isPressed ? 5 : 0,
                                    paddingVertical: 5,
                                    paddingHorizontal: isPressed ? 0 : 5,
                                    backgroundColor: "#F3F4F6",
                                    zIndex: 100
                                }}>
                                    <Picker onPress={handlePress} ref={pickerRef}>
                                        <AnimatedPickerBody
                                            style={[styles?.pickerBody, pickerAnimatedStyle]}
                                            shouldRasterizeIOS={true}
                                            renderToHardwareTextureAndroid={true}>
                                            {isPressed ?
                                                <View style={styles.pickerContentContainer}>
                                                    <Animated.ScrollView
                                                        entering={FadeIn}
                                                        style={[styles.scrollContainer]}
                                                        showsVerticalScrollIndicator={false}
                                                        nestedScrollEnabled={true}
                                                        stickyHeaderHiddenOnScroll={false}
                                                        stickyHeaderIndices={[0]}
                                                        centerContent={true}
                                                        bounces={false}
                                                    >
                                                        <View style={{
                                                            width: DEVICE_WIDTH * 0.9,
                                                            padding: 20,
                                                            borderTopLeftRadius: 10,
                                                            borderTopRightRadius: 10,
                                                            backgroundColor: '#E5E7EB',
                                                            marginHorizontal: 'auto'
                                                        }}>
                                                            <View style={{
                                                                flexDirection: "row",
                                                                justifyContent: "space-between",
                                                                alignItems: "center"
                                                            }}>
                                                                <View>
                                                                    <Text style={{ fontSize: 35, fontWeight: 600 }}>
                                                                         Code
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={{
                                                            width: DEVICE_WIDTH * 0.9,
                                                            marginHorizontal: "auto"
                                                        }}>
                                                            {Array.from({ length: 20 }).map((_, index) => (
                                                                <AnimatedPressable
                                                                    entering={FadeIn.delay(index * 50).easing(Easing.sin)}
                                                                    key={index}
                                                                    style={styles.countryItem}
                                                                    onPress={() => {
                                                                        // handle country selection
                                                                        collapseSize();
                                                                    }}>
                                                                    <Text>+{index + 1} Country {index + 1}</Text>
                                                                </AnimatedPressable>
                                                            ))}
                                                        </View>
                                                    </Animated.ScrollView>
                                                </View> :
                                                <Text style={{fontSize:18, fontWeight:500}}>+ 91</Text>
                                            }
                                        </AnimatedPickerBody>
                                    </Picker>
                                    <InputField inputFieldStyle={styles?.inputFieldStyle}
                                        placeholder="999 - 999 - 9999"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                            <Animated.View style={{ zIndex: 0 }}>
                                <AnimatedRichButton
                                    style={{ ...styles.button, gap }}
                                    onPress={handleOnClick}
                                    onPressIn={handleButtonPressIn}
                                    onPressOut={handleButtonPressOut}
                                >
                                    <Text style={styles.buttonText}>Get OTP</Text>
                                    <RightArrow />
                                </AnimatedRichButton>
                            </Animated.View>
                        </View >
                        <Animated.View>
                            <Text style={styles.copyright} >
                                Hoo-Ha | Copyright ©{new Date().getFullYear()}
                            </Text>
                        </Animated.View>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

// styleSheet
const createStyles = (theme: any) => {
    const { wp, hp, scaleFontSize } = useDimension();

    return StyleSheet.create({
        keyboardAvoidView: {
            flex: 1,
            backgroundColor: theme.background,
        },
        scrollView: {
            flex: 1,
            backgroundColor: theme.background,
        },
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            width: wp(90),
            margin: "auto",
            backgroundColor: "transparent",
        },
        pickerBody: {
            elevation: 5,
            borderRadius: 2,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
        },
        heading: {
            textAlign: "center",
            width: wp(90),
        },
        pillsBox: {
            marginVertical: hp(3),
            alignSelf: "flex-start",
        },
        pills: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 10,
        },
        pillsText: {
            fontSize: scaleFontSize(FontSize.SM)
        },
        title: {
            textAlign: "center",
            fontSize: scaleFontSize(FontSize.XL),
            fontWeight: FontWeight.W500
        },
        subtitle: {
            textAlign: "center",
            fontSize: scaleFontSize(FontSize.SM),
            fontWeight: FontWeight.W400,
            color: theme.primaryText,
            opacity: 0.7,
            marginBottom: hp(5),
            marginTop: hp(1),
        },
        inputFieldStyle: {
            height: 46,
            zIndex: -1,
            alignSelf: "flex-start",
            marginLeft: 75,
            flex: 1,
            borderWidth: 0
        },
        labelStyle: {
            fontSize: FontSize.SM,
            paddingVertical: hp(1),
        },
        button: {
            width: wp(90),
            flexDirection: "row",
            marginTop: hp(3),
            borderRadius: 2,
            color: theme.background,
            backgroundColor: theme.primary,
        },
        buttonText: {
            color: theme.background,
            fontSize: scaleFontSize(FontSize.SM),
        },
        copyright: {
            textAlign: "center",
            color: theme.primaryText,
            fontSize: scaleFontSize(FontSize.XS),
            opacity: 0.5,
        },
        overlay: {
            flex: 1,
            position: 'absolute',
            inset: 0,
            backgroundColor: 'transparent',
            zIndex: 80,
        },
        pickerContentContainer: {
            width: '100%',
            height: '100%',
            backgroundColor: '#F9FAFB',
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowColor: '#D1D5DB',
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
            borderRadius:2,
        },
        scrollContainer: {
            flex: 1,
            width: wp(90),
            marginHorizontal: "auto",
            marginBottom: 15,
        },
        countryItem: {
            width: '100%',
            padding: 15,
            borderBottomWidth: 0.5,
            borderBottomColor: '#D1D5DB',
        },
    });
};

export default LoginScreen;
