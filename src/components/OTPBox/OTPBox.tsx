// import
import { Fragment, useContext, useRef, useState } from 'react';
import { InputField } from '../InputField';
import { TextInput, View } from 'react-native';
import { ThemeContext } from '@Providers/themeProvider';
import { useDimension } from '@Hooks/useDimension';
import { Colors } from '@Styles/theme.type';
import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '@Constants/application';

interface OTPBoxProps {
    length?: number;
    keyboardType?: string;
};

const OTPBox: React.FC<OTPBoxProps> = (props) => {
    const { length } = props;
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef<Array<TextInput | null>>(new Array(length).fill(null));
    const appTheme = useContext(ThemeContext);
    const { theme } = appTheme;
    const styles = createStyles(theme, length!);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to the next input if there is text and it's not the last field
        if (text && index < length! - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <Fragment>
            <View style={styles?.container}>
                {Array?.from({ length: length! })?.map((item: any, index: number) => {
                    return <InputField
                        ref={(el) => (inputRefs.current[index] = el)}
                        maxLength={1}
                        key={index}
                        inputFieldStyle={styles?.otpBox}
                        inputStyle={styles?.inputStyle}
                        value={otp[index]}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                    />
                })}
            </View>
        </Fragment >
    );
};

// styleSheet
const createStyles = (theme: Colors, length: number) => {
    const { wp } = useDimension();

    return StyleSheet.create({
        container: {
            width: wp(90),
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10
        },
        otpBox: {
            alignSelf: 'center',
            borderWidth: 0,
            flex: wp(DEVICE_WIDTH / length),
            backgroundColor: "#F3F4F6",
        },
        inputStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }
    });
};

export { OTPBox };
