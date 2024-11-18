import { useEffect } from 'react';
import Animated, { useAnimatedProps, useSharedValue, withRepeat, withTiming, Easing } from 'react-native-reanimated';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const PathVector = [
    {
        d: "M11.5617 266.625C-57.6352 -5.18527 198.696 -32.8522 383.682 49.2202C491.613 91.429 562.493 -39.8372 696.199 12.5495C829.904 64.9362 669.619 229.954 874.205 314.646C1078.79 399.338 978.913 778.268 800.102 782.633C621.291 786.999 670.424 850.736 491.613 996.546C312.802 1142.36 11.5621 939.793 86.4693 725.881C161.377 511.969 86.4685 560.863 11.5617 266.625Z",
        strokeOpacity: 1,
    },
    {
        d: "M396.405 478.162C388.421 452.273 425.817 410.509 455.888 428.333C483.424 444.654 511.464 433.647 529.989 440.923C578.76 460.079 560.82 470.219 582.622 492.97C609.152 520.655 621.811 593.149 560.82 593.149C510.658 593.149 525.667 619.559 488.106 631.261C450.544 642.963 407.946 623.044 407.946 570.602C407.946 550.908 409.703 521.28 396.405 478.162Z",
        strokeOpacity: 1,
    },
    {
        d: "M46.5426 284.534C-17.0895 35.0805 219.339 6.13191 390.241 82.3636C490.864 122.219 557.849 1.88538 681.084 50.1711C807.068 99.5368 659.723 250.475 847.692 329.536C1036.09 409.045 946.445 760.117 778.345 764.086C611.229 768.055 657.26 828.398 491.289 962.016C325.319 1095.63 47.5922 909.676 115.69 710.443C183.787 514.187 115.849 555.943 46.5426 284.534Z",
        strokeOpacity: 1,
    },
    {
        d: "M81.5239 302.447C23.4565 75.3499 239.981 45.1197 396.801 115.511C490.115 153.013 553.206 43.6116 665.969 87.7964C784.232 134.141 649.828 271 821.18 344.429C993.392 418.756 913.976 741.971 756.587 745.542C601.167 749.114 644.095 806.065 490.966 927.491C337.837 1048.92 83.6225 879.563 144.91 695.009C206.198 516.41 145.229 551.027 81.5239 302.447Z",
        strokeOpacity: 1,
    },
    {
        d: "M116.505 320.358C64.0025 115.617 260.624 84.1056 403.361 148.656C489.366 183.804 548.562 85.3359 650.855 125.42C761.396 168.744 639.933 291.522 794.668 359.321C950.693 428.465 881.508 723.822 734.83 726.997C591.105 730.172 630.931 783.729 490.642 892.964C350.354 1002.2 119.653 849.448 174.131 679.573C228.609 518.63 174.609 546.109 116.505 320.358Z",
        strokeOpacity: 1,
    },
    {
        d: "M151.487 338.269C104.549 155.885 281.267 123.092 409.921 181.801C488.617 214.596 543.919 127.061 635.741 163.043C738.561 203.346 630.038 312.045 768.156 374.213C907.994 438.175 849.04 705.674 713.073 708.452C581.043 711.23 617.767 761.393 490.319 858.436C362.872 955.479 155.684 819.333 203.352 664.138C251.02 520.85 203.99 541.191 151.487 338.269Z",
        strokeOpacity: 1,
    },
    {
        d: "M186.468 357.093C145.096 197.065 301.911 162.99 416.481 215.859C487.869 246.301 539.276 169.697 620.627 201.579C715.726 238.861 620.143 333.48 741.645 390.017C865.296 448.797 816.572 688.438 691.316 690.819C570.982 693.2 604.603 739.97 489.997 824.822C375.39 909.673 191.715 790.131 232.573 649.614C273.432 523.983 233.371 537.185 186.468 357.093Z",
        strokeOpacity: 1,
    },
    {
        d: "M221.451 376.985C185.643 239.315 322.555 203.958 423.042 250.986C487.121 279.074 534.634 213.404 605.514 241.185C692.891 275.446 610.249 355.985 715.134 406.891C822.598 460.488 784.105 672.271 669.56 674.255C560.921 676.24 591.441 719.616 489.675 792.276C387.909 864.936 227.746 761.998 261.795 636.16C295.844 528.186 262.753 534.249 221.451 376.985Z",
        strokeOpacity: 1,
    },
    {
        d: "M256.435 396.937C226.191 281.623 343.2 244.985 429.604 286.172C486.374 311.907 529.992 257.169 590.402 280.849C670.058 312.089 600.356 378.548 688.624 423.823C779.902 472.238 751.639 656.163 647.804 657.751C550.861 659.338 578.279 699.322 489.354 759.79C400.428 820.258 263.779 733.924 291.018 622.765C318.257 532.447 292.136 531.372 256.435 396.937Z",
        strokeOpacity: 1,
    },
    {
        d: "M291.419 416.98C266.741 324.022 363.846 286.103 436.166 321.449C485.628 344.831 525.352 301.025 575.29 320.604C647.225 348.823 590.464 401.203 662.116 440.847C737.206 484.079 719.174 640.147 626.05 641.337C540.802 642.528 565.118 679.118 489.033 727.394C412.949 775.671 299.813 705.94 320.242 609.461C340.671 536.799 321.519 528.586 291.419 416.98Z",
        strokeOpacity: 1
    },
    {
        d: "M326.407 437.145C307.293 366.543 384.496 327.342 442.732 356.848C484.886 377.876 520.715 345.003 560.182 360.481C624.395 385.679 580.575 423.979 635.61 457.992C694.514 496.041 686.712 624.251 604.299 625.045C530.746 625.839 551.96 659.035 488.716 695.12C425.473 731.206 335.849 678.079 349.469 596.279C363.088 541.273 350.906 525.921 326.407 437.145Z",
        strokeOpacity: 1
    },
    {
        d: "M361.399 457.503C347.85 409.258 405.149 368.775 449.303 392.439C484.148 411.114 516.082 389.174 545.079 400.551C601.571 422.728 570.691 446.948 609.109 475.33C651.826 508.197 654.254 608.55 582.553 608.947C520.695 609.343 538.807 639.146 488.404 663.04C438.001 686.933 371.891 650.411 378.701 583.29C385.51 545.94 380.297 523.45 361.399 457.503Z",
        strokeOpacity: 1
    }
];

interface BgProps {
    width?: number;
    height?: number;
    color?: string;
    style?: any;
}
const AnimatedPath = Animated.createAnimatedComponent(Path);

const BackgroundPattern: React.FC<BgProps> = (props) => {


    // Initialize strokeWidth shared value
    const strokeWidth = useSharedValue(1);

    // Create animated props for strokeWidth
    const animatedProps = useAnimatedProps(() => ({
        strokeWidth: strokeWidth.value,
    }));

    // Start the infinite animation
    useEffect(() => {
        strokeWidth.value = withRepeat(
            withTiming(2, {
                duration: 1000,
                easing: Easing.inOut(Easing.ease),
            }),
            -1,    // Infinite repetitions
            true   // Reverse animation on each repeat
        );
    }, [strokeWidth]);


    // return
    return (
        <Svg viewBox="0 0 900 800" fill="none" {...props}>
            <Defs>
                <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0%" stopColor="blue" stopOpacity="1" />
                    <Stop offset="100%" stopColor="purple" stopOpacity="1" />
                </LinearGradient>
            </Defs>
            {
                PathVector.map((path, index) => {
                    return (
                        <AnimatedPath
                            key={index}
                            d={path?.d}
                            strokeOpacity={path?.strokeOpacity}
                            stroke="url(#gradient)"
                            animatedProps={animatedProps}
                        />
                    );
                })
            }
        </Svg>
    );
};

export {
    BackgroundPattern
}



