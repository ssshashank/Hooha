import  {ColorTheme } from "./theme.type";


export const ClassicTheme: ColorTheme = {
    light: {
        primary: '#597445',
        secondary: '#658147',
        tertiary: '#729762',
        background: '#E7F0DC',
        primaryText: '#000000',
        secondaryText: '#FFFFFF',
        textDisabled: '#FFFFFF',
        border: '#FFFFFF',
    },
    dark: {
        primary: '#597445',
        secondary: '#658147',
        tertiary: '#3F4E4F',
        background: '#2C3639',
        primaryText: '#FFFFFF',
        secondaryText: '#000000',
        textDisabled: '#FFFFFF',
        border: '#FFFFFF',
    },
};


/* how to use the above theme
 const styles = StyleSheet.create({
    container: {
        backgroundColor: AppTheme.colors.background,
        padding: 10,
    },
    text: {
        color: AppTheme.colors.text,
        fontSize: AppTheme.fontSizes.md,
        fontWeight: AppTheme.fontWeights.bold,
    },
});


*/

