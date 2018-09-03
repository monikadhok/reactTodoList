import React from "react"
import TodoItems from "./TodoItems"
 class TaskInput extends React.Component {

    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            items: []
        }
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key);
          });
         
          this.setState({
            items: filteredItems
          });
    }

    addItem(e){
        var itemArray = this.state.items;
 
        if (this._inputElement.value !== "") {
          itemArray.unshift({
            text: this._inputElement.value,
            key: Date.now()
          });
       
          this.setState({
            items: itemArray
          });
       
          this._inputElement.value = "";
        }
       
        console.log(itemArray);
       
        // Override this event's default behaviour
        // By default, when you submit a form, the page reloads and clears 
        // everything out. We definitely don’t want that. By calling preventDefault, 
        // we block the default behavior. That’s a good thing!
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h1> Hello World! </h1>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                         placeholder="enter task">
                    </input>
                    <button type="submit">add</button>  

                     <TodoItems entries={this.state.items}
                      delete={this.deleteItem} />
                </form>
            </div>
            );
    }
}

export default TaskInput;