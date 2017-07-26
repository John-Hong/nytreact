// Include the Main React Dependecies

var React = require('react');
var ReactDOM = require('react-dom');


var Main = require('./Components/Main')
//This will render all all the components to app - div (in the index.html)
ReactDOM.render( 

	<Main />,
 document.getElementById("app"))