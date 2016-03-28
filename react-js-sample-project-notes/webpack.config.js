

module.exports = {
  entry: './js/main',

  output: {
    filename: 'js/bundle.js'
  },

  module: {
    loaders: [
        {
            exclude: /node_modules/, 
            test: /\.js$/,
            loader: "babel",
            query: { 
                presets: ["react", "es2015"]
            }
      }
    ]
  }
};