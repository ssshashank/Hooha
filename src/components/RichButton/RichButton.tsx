// import
import { View } from "lucide-react-native";
import React, { forwardRef } from "react";
import { Dimensions, Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

// types of Button
enum ButtonVariant {
    FLAT = "flat",
    ELEVATED = "elevated",
    OUTLINED = "outlined",
    FAB = "fab",
}

/**
 * Props for the RichButton component.
 * Extends TextProps to include all standard Text component props.
 */
interface RichButtonProps extends PressableProps {
    children: React.ReactNode;
    /** Style to apply to the Pressable component */
    buttonStyle?: StyleProp<ViewStyle>;
    /**
     * Style prop for Pressable. Can be ViewStyle, an array of ViewStyle,
     * or a function returning ViewStyle
     */
    style?:
    | StyleProp<ViewStyle>
    | ((state: { pressed: boolean }) => StyleProp<ViewStyle>);
    variants?: ButtonVariant;
}

/**
 * RichButton component
 *
 * A customizable button component for both Android and iOS in Expo projects.
 * It uses Pressable for touch handling and allows for easy styling of both
 * the button and its text.
 *
 * @param props - The props of the component, extending PressableProps
 * @param ref - Forwarded ref that will be attached to the Pressable component
 * @returns A Pressable component containing a Text component */
const RichButton = forwardRef<
    React.ElementRef<typeof Pressable>,
    RichButtonProps
>((props, ref) => {
    const {
        children,
        style,
        buttonStyle,
        variants = ButtonVariant.FLAT,
        ...otherProps
    } = props;

    // return
    return (
        <Pressable
            ref={ref}
            style={({ pressed }) => {
                const baseStyle =
                    typeof style === "function" ? style({ pressed }) : style;
                return [
                    {
                        flex: 1,
                        width: Dimensions.get('window').width,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingVertical: 20,
                    },
                    buttonStyle,
                    baseStyle,
                    pressed && { opacity: 1 }, // Optional: add a press effect
                ];
            }}
            {...otherProps}
        >
            {children}
        </Pressable>
    );
});

// Set a display name for debugging
RichButton.displayName = "RichButton";
const AnimatedRichButton = Animated.createAnimatedComponent(RichButton);

/*------------------------------------------------------------------------------------------------------------------------------------------------------*/

/**
 * Props for the RichFABButton component.
 */
interface RichFABButtonProps extends PressableProps {
    children: React.ReactNode;
    /** Style to apply to the Pressable component */
    buttonStyle?: StyleProp<ViewStyle>;
    /**
     * Style prop for Pressable. Can be ViewStyle, an array of ViewStyle,
     * or a function returning ViewStyle
     */
    style?:
    | StyleProp<ViewStyle>
    | ((state: { pressed: boolean }) => StyleProp<ViewStyle>);
    variants?: ButtonVariant;
}

const RichFABButton = forwardRef<
    React.ElementRef<typeof Pressable>,
    RichFABButtonProps
>((props, ref) => {
    const {
        children,
        style,
        buttonStyle,
        variants = ButtonVariant.FAB,
        ...otherProps
    } = props;

    // return
    return (
        <Pressable
            ref={ref}
            style={({ pressed }) => {
                const baseStyle =
                    typeof style === "function" ? style({ pressed }) : style;
                return [
                    {
                        borderRadius: 10,
                        flex: 1,
                        width: 60,
                        maxHeight: 60,
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                        elevation: 5,
                    },
                    buttonStyle,
                    baseStyle,
                    pressed && { opacity: 0.8 }, // Optional: add a press effect
                ];
            }}
            {...otherProps}
        >
            {children}
        </Pressable>
    );
});

// Set a display name for debugging
RichFABButton.displayName = "RichFABButton";
const AnimatedRichFABButton = Animated.createAnimatedComponent(RichButton);

export { RichButton, AnimatedRichButton, RichFABButton, AnimatedRichFABButton };
