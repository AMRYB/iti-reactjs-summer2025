import { Component } from "react";

class Task extends Component {
    constructor() {
        super();
        this.state = {
            name: "Amr Yasser",
            version: 19
        };
    }

    render() {
        return <h1>Task of {this.state.name} , {this.state.version}</h1>;
    }
}

export default Task;
