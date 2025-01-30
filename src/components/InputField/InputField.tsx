// imports
import { forwardRef, useState } from "react";
import { NativeSyntheticEvent, StyleProp, Text, TextInput, TextInputFocusEventData, TextInputProps, TextStyle, View, ViewStyle } from "react-native";

// InputField Props
interface InputFieldProps extends TextInputProps {
    isError?: boolean;
    errorMessage?: string;
    label?: React.ReactNode;
    labelStyle?: StyleProp<TextStyle>;
    children?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    prefixIcon?: React.ReactNode;
    inputFieldStyle?: StyleProp<ViewStyle>;
    errorStyle?: StyleProp<TextStyle>;
}

/**
 * Input field component
 *
 * A customizable input field component for both Android and iOS in Expo projects.
 *
 * @param props - The props of the component, extending TextInputProps
 * @param ref - Forwarded ref that will be attached to the input field component
 * @returns An inputfield component containing label, inputfield, icons and error component */
const InputField = forwardRef<
    React.ElementRef<typeof TextInput>,
    InputFieldProps
>((props, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const { onFocus: parentOnFocus, onBlur: parentOnBlur, suffixIcon, prefixIcon, children, label, labelStyle, isError, inputFieldStyle, errorStyle, errorMessage, ...otherProps } = props;

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        // if the parent has its own onFocus prop, call it
        parentOnFocus?.(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        // if the parent has its own onBlur prop, call it
        parentOnBlur?.(e);
    };

    return (
        <>
            {label && <Text style={[{}, labelStyle]}>{label}</Text>}
            <View style={[
                {
                    borderWidth: 1,
                    borderRadius: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderColor: isFocused ? "black" : "#D1D5DB"
                },
                inputFieldStyle
            ]}>
                <View style={[{
                    paddingHorizontal: 5
                }]}>
                    {prefixIcon}
                </View>
                <TextInput ref={ref}
                    style={[
                        {
                            cursor: 'pointer',
                            paddingVertical: 15,
                            paddingHorizontal: 1,
                            fontSize: 14,
                            flex: 1,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }
                    ]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...otherProps}>
                    {children}
                </TextInput >
                <View style={[{ paddingHorizontal: 5 }]}>
                    {suffixIcon}
                </View>
            </View>
            {
                isError && <Text style={[
                    {
                        fontSize: 14,
                        color: '#F05252',
                        fontWeight: 500
                    },
                    errorStyle
                ]}>* {errorMessage ?? 'This is the error message'}
                </Text>
            }
        </>
    );
});

export { InputField };
