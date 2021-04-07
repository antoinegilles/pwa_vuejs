const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
    publicPath: process.env.NODE_ENV === "development" ? "/vuejs-pwa/" : "",

    configureWebpack: {
        plugins: [new GenerateSW()]
    },
    pwa: {
        themeColor: "#42b983",
        msTileColor: "#42b983",
        appleMobileWebAppCache: "yes",
        manifestOptions: {
            background_color: "#42b983"
        }
    }
};