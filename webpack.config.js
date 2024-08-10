const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:  {
    index: './src/index.js',
    addShips: './src/components/add-ships.js',
    auxiliaryFunctions: './src/components/auxiliary-functions.js',
    createContainer: './src/components/create-container.js',
    deleteDivError: './src/components/delete-div-error.js',
    gameController: './src/components/game-controller.js',
    gameboard: './src/components/gameboard.js',
    player: './src/components/player.js',
    randomShips: './src/components/random-ships.js',
    screenController: './src/components/screen-controller.js',
    showError: './src/components/show-error.js',
    updateComputerBoard: './src/components/update-computer-board.js',
    updateHumanBoard: './src/components/update.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Study Project Battleship',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
    ],
  },
};