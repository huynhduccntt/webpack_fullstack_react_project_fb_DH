const path = require("path");

const config = {
  entry: {
    bundle: "./src/app.js"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
    resolve: {
        modules: [__dirname, "node_modules"],
        alias: {
            HomePage: path.resolve(__dirname, "src/components/home/HomePage.js"),
            Main: path.resolve(__dirname, "src/components/Main.js"),
            Nav: path.resolve(__dirname, "src/components/Nav.js"),
            Service: path.resolve(__dirname, "src/components/service/Service.js"),
            Account: path.resolve(__dirname, "src/components/user/Account.js")
        },
        extensions: ["*", ".js", ".jsx"]
    },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js/,

        exclude: "/node_modules/"
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    
    ]
  }
};
module.exports = config;
