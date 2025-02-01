// imports
import { forwardRef } from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native"

/**
 * Props for the Divider component.
 * Extends ViewProps to include all standard View component props.
 */
interface RichDividerProps extends ViewProps {
    children?: React.ReactNode;
    dividerStyle?: StyleProp<ViewStyle>;
}

/**
 * Divider component
 * 
 * A wrapper around the React Native View component that allows for easy styling
 * and prop forwarding. This component uses forwardRef to allow parent components
 * to access the underlying Text component's ref.
 *
 * @param props - The props of the component, extending ViewProps
 * @param ref - Forwarded ref that will be attached to the View component
 * @returns A View component with the given children and forwarded props
 */
const Divider = forwardRef<React.ElementRef<typeof View>, RichDividerProps>((props, ref) => {
    const { children, dividerStyle, ...otherProps } = props;

    return (
        <>
            <View ref={ref} style={[dividerStyle]} {...otherProps}>
                {children}
            </View>
        </>
    );
});

Divider.displayName = "Divider"; // display name to Pills

export { Divider };
