/*module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  }
}*/

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

/*const withImages = require('next-images')
module.exports = withImages({
 esModule: true
})
*/

