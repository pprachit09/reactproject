var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('./css/additem.css');

var Additem = createReactClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleThis}>
                <input type="text" required ref="additem" />
                <input type="submit" value="Remind me" />
            </form>
        );
    },
    //custom functions
    handleThis: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.additem.value);
    }

});

module.exports = Additem;