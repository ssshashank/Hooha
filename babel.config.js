module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        //plugins: [
        //    [
        //        'module-resolver',
        //        {
        //            alias: {
        //                '@': './src',
        //                '@Assets': './src/assets',
        //                '@Components': './src/components',
        //                '@Modules': './src/modules',
        //                '@Constants': './src/constants',
        //                '@Hooks': './src/hooks',
        //                '@Styles': './src/styles',
        //                '@Utils': './src/utils',
        //                '@Providers': './src/providers',
        //            },
        //        },
        //    ],
        //],
    };
};
