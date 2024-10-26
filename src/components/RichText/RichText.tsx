// import
import { forwardRef } from 'react';
import { Text, TextProps } from 'react-native';

/**
 * Props for the RichText component.
 * Extends TextProps to include all standard Text component props.
 */
interface RichTextProps extends TextProps {
    title: string
}


/**
 * RichText component
 * 
 * A wrapper around the React Native Text component that allows for easy styling
 * and prop forwarding. This component uses forwardRef to allow parent components
 * to access the underlying Text component's ref.
 *
 * @param props - The props of the component, extending TextProps
 * @param ref - Forwarded ref that will be attached to the Text component
 * @returns A Text component with the given text and forwarded props
 */
const RichText = forwardRef<Text, RichTextProps>((props, ref) => {
    const { style, title, ...otherProps } = props;

    // return
    return (
        <Text ref={ref} style={[style]} {...otherProps}> {title} </Text>
    );
});

// Set a display name for debugging
RichText.displayName = 'RichText';

export default RichText;
