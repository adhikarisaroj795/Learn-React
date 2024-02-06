const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss("./taiwind.js"), require("autoprefixer")],
};
