export type Color = string;

export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type Size = number;

export type Mode = 'light' | 'dark' | 'system';

export interface Colors {
    primary: Color;
    secondary: Color;
    tertiary: Color;
    background: Color;
    primaryText: Color;
    secondaryText: Color;
    textDisabled: Color;
    border: Color;

}

export interface ColorTheme{
    light: Colors;
    dark: Colors;
}




