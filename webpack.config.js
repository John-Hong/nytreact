module.exports = {

	//entry point of react application
	entry: "./app/index.js"

	output: {
		filename: "public/bundle.js"
	},

	//This section describes the transformations we will perform
	module: {

    	loaders: [
      		{
      			//this will be the jsx extenstion
        test: /\.jsx?$/,
        //Webpack will only go to app folder.
        include: /app/,
     	// JS - Babel
        loader: 'babel',
        query: {
          // react and es2015 only
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  //This is the debug chrome dev tools.
  devtool: "eval-source-map"
};