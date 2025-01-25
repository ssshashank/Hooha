const APP_NAME = 'Hooha';
const APP_VERSION = '1.0.0';
const BASE_WIDTH = 375;

type ThemeType = 'CLASSIC' | 'MODERN' | 'VINTAGE' | 'MINIMAL';

type Mode = typeof ThemeMode[keyof typeof ThemeMode];

const enum ThemeMode {
    DARK = 'dark',
    LIGHT = 'light',
    SYSTEM = 'system'
};

const enum FontWeight {
    W100 = '100',
    W200 = '200',
    W300 = '300',
    W400 = '400',
    W500 = '500',
    W600 = '600',
    W700 = '700',
    W800 = '800',
    W900 = '900'
};

const enum FontSize {
    XXS = 10,
    XS = 12,
    SM = 14,
    DEFAULT = 16,
    MD = 20,
    LG = 26,
    XL = 32,
    XXL = 38,
    XXXL = 44,
    XXXXL = 50,
    TALL = 56,
    MEGA = 65
};

export {
    APP_NAME,
    APP_VERSION,
    ThemeType,
    Mode,
    ThemeMode,
    FontWeight,
    FontSize,
    BASE_WIDTH
};
