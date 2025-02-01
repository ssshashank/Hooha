// imports
import { forwardRef } from "react";
import { Pressable, PressableProps, StyleProp, View, ViewProps, ViewStyle } from "react-native"
import Animated from "react-native-reanimated";

/**
 * Props for the RichPicker component.
 * Extends PressableProps to include all standard Pressable component props.
 */
interface RichPickerProps extends PressableProps {
    children?: React.ReactNode;
    variants?: any // TODO:- create diff picker variants
    pickerStyle?: StyleProp<ViewStyle>;
}

/**
 * Props for the RichPickerBodyProps component.
 * Extends ViewProps to include all standard View component props.
 */
interface RichPickerBodyProps extends ViewProps {
    children?: React.ReactNode;
}

/**
 * Picker component
 * 
 * A wrapper around the React Native Pressable component that allows for easy styling
 * and prop forwarding. This component uses forwardRef to allow parent components
 * to access the underlying Pressable component's ref.
 *
 * @param props - The props of the component, extending PressableProps
 * @param ref - Forwarded ref that will be attached to the Pressable component
 * @return A Pressable component with the given children and forwarded props
 */
const Picker = forwardRef<React.ElementRef<typeof Pressable>, RichPickerProps>((props, ref) => {
    const { children, pickerStyle, ...otherProps } = props;

    return (
        <>
            <Pressable ref={ref} style={[pickerStyle]} {...otherProps}>
                {children}
            </Pressable>
        </>
    );
});

Picker.displayName = "Picker"; // display name of Picker

/**
 * Picker Body component
 * 
 * A wrapper around the React Native View component that allows for easy styling
 * and prop forwarding. This component uses forwardRef to allow parent components
 * to access the underlying View component's ref.
 *
 * @param props - The props of the component, extending ViewProps
 * @param ref - Forwarded ref that will be attached to the View component
 * @return A View component with the given children and forwarded props
 */
const PickerBody = forwardRef<React.ElementRef<typeof View>, RichPickerBodyProps>((props, ref) => {
    const { children, ...otherProps } = props;

    return (
        <>
            <View ref={ref} {...otherProps}>
                {children}
            </View>
        </>
    );
});

PickerBody.displayName = "PickerBody"; // display name of picker body

// Animate component using react reanimation
const AnimatedPicker = Animated.createAnimatedComponent(Picker);
const AnimatedPickerBody = Animated.createAnimatedComponent(PickerBody);

export { Picker, AnimatedPicker, PickerBody, AnimatedPickerBody };
