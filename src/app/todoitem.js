var React = require('react');
var createReactClass = require('create-react-class');
require('./css/todoitem.css');

//Created nested component
var Todoitem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.Delete}>x</span>
                </div>
            </li>
        );
    },
    //custom function
    Delete: function(){
        this.props.onDelete(this.props.item);
    }
});

module.exports=Todoitem;