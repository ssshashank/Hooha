// import
import { forwardRef } from 'react';
import { Pressable, PressableProps, StyleProp, Text, TextStyle, ViewStyle } from 'react-native';

// types of Button
enum ButtonVariant {
    FLAT = 'flat',
    ELEVATED = 'elevated',
    OUTLINED = 'outlined',
    FAB = 'fab'
}

/**
 * Props for the RichButton component.
 * Extends TextProps to include all standard Text component props.
 */
interface RichButtonProps extends PressableProps {
    title: string;
    /** Style to apply to the Text component */
    textStyle?: StyleProp<TextStyle>;
    /** Style to apply to the Pressable component */
    buttonStyle?: StyleProp<ViewStyle>;
    /** 
     * Style prop for Pressable. Can be ViewStyle, an array of ViewStyle, 
     * or a function returning ViewStyle 
     */
    style?: StyleProp<ViewStyle> | ((state: { pressed: boolean }) => StyleProp<ViewStyle>);
    variants?: ButtonVariant
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
const RichButton = forwardRef<React.ElementRef<typeof Pressable>, RichButtonProps>((props, ref) => {
    const { title, style, textStyle, buttonStyle, variants = ButtonVariant.FLAT, ...otherProps } = props;

    // return
    return (
        <Pressable
            ref={ref}
            style={({ pressed }) => {
                const baseStyle = typeof style === 'function' ? style({ pressed }) : style;
                return [
                    buttonStyle,
                    baseStyle,
                    pressed && { opacity: 0.7 } // Optional: add a press effect
                ];
            }}
            {...otherProps}
        >
            <Text style={textStyle}>{title}</Text>
        </Pressable>);
});

// Set a display name for debugging
RichButton.displayName = 'RichButton';

export default RichButton;
