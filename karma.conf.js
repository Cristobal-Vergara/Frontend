// karma.conf.js
const webpackConfig = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(svg|png|jpg|jpeg|gif)$/, use: "file-loader" }
    ],
  },
  resolve: { extensions: [".js", ".jsx"] },
};

module.exports = function(config) {
  config.set({
    // Ruta base
    basePath: "",

    // Frameworks de test
    frameworks: ["jasmine"],

    // Archivos a testear
    files: ["test/**/*.spec.js"],

    // Preprocesadores
    preprocessors: { "test/**/*.spec.js": ["webpack"] },

    // Configuración de webpack
    webpack: webpackConfig,

    // Navegadores
    browsers: ["ChromeHeadless"],

    // Ejecutar solo una vez
    singleRun: true,

    // Reporters
    reporters: ["spec"],

    // Plugins
    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-webpack",
      "karma-spec-reporter"
    ],

    // Nivel de log
    logLevel: config.LOG_INFO
  });
};
