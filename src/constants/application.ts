import { Mode } from "@Styles/theme.type";

export const APP_NAME = 'Hooha';
export const APP_VERSION = '1.0.0';

export class ThemeMode {
    static readonly DARK: Mode   = 'dark';
    static readonly LIGHT: Mode  = 'light';
    static readonly SYSTEM: Mode = 'system';
}

export class FontWeight {
    static readonly w100: Weight = 100;
    static readonly w200: Weight = 200;
    static readonly w300: Weight = 300;
    static readonly w400: Weight = 400;
    static readonly w500: Weight = 500;
    static readonly w600: Weight = 600;
    static readonly w700: Weight = 700;
    static readonly w800: Weight = 800;
    static readonly w900: Weight = 900;
}

export class FontSize {
    static readonly xxs: Size = 10;
    static readonly xs: Size = 12;
    static readonly sm: Size = 14;
    static readonly md: Size = 16;
    static readonly lg: Size = 18;
    static readonly xl: Size = 20;
    static readonly xxl: Size = 24;
    static readonly xxxl: Size = 28;
    static readonly xxxxl: Size = 32;
}

