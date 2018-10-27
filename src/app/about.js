var React = require('react');
var createReactClass = require('create-react-class');
require('./css/index.css');

//Created nested component
var About = createReactClass({
    render: function(){
        return(
            <div id="todo-list">
                <p>About</p>
                <h3>This website is developed in React.js</h3>
            </div>
        );
    }
});

module.exports=About;