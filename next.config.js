const path = require("path");
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            publicPath: "/_next/static",
            outputPath: "static",
          },
        },
      ],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
