const path = require('path');

module.exports = {
    entry: {
        // index: './index.js',
        common: './src/common.js',
        assessments: './src/assessments.js',
        benefits: './src/benefits.js',
        // compensation: './src/compensation.js',
        // interviewing: './src/interviewing.js',
        // recruiting: './src/recruiting.js',
        screening: './src/screening.js',
        timecard: './src/timecard.js',
        wellness: './src/wellness.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
      loaders: [
         { test: /\.json$/, loader: 'json-loader' }
      ]
  }

}
