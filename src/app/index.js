var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
//Child components
var Todoitem = require('./todoitem');
var Additem = require('./additem');
var About = require('./about');
require('./css/index.css');
//For routes
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Route component
var App = createReactClass({
    render: function(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">Aboout</Link></li>
                    </ul>

                    <Route exact path={"/"} component={TodoComponent}></Route>
                    <Route path={"/about"} component={About}></Route>
                </div>
            </Router>
        );
    }
});

//Create component
var TodoComponent = createReactClass({
    getInitialState: function(){
        return{
            todos: ['take a bath', 'eat', 'take a nap']
        }
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <Todoitem item={item} index={index} onDelete={this.onDelete}/>
            );
        }.bind(this));
        return(
            <div id="todo-list">
                <p>Need to complete below things....</p>
                <ul>{todos}</ul>
                <Additem onAdd={this.onAdd} />
            </div>
        );
    },

    onDelete: function(item){
        var newTodos = this.state.todos.filter(function(val,index){
            return item !==val;
        });
        this.setState({
            todos: newTodos
        });
    },

    onAdd: function(item){
        var newTodos = this.state.todos;
        newTodos.push(item);
        this.setState({
            todos: newTodos
        });
    },
    
});

//Put component on html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));