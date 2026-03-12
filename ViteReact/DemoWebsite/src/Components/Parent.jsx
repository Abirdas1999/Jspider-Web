import { Component } from "react";
import { Child } from "./Child";

export class Parent extends Component {
    constructor() {
        super();
        console.log("Parent component constructor...");
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log("Parent Component did mount !...")
        let count = 0;
        this.intervalID = setInterval(() => {
            this.setState(prev => ({ count: prev.count + 1 }))
            console.log("count : " + count);
            count++;
        }, 1000)

    }

    componentDidUpdate() {
        console.log("Parent component did update !...")
    }
    componentWillUnmount() {
        console.log("Parent Component will Unmount !...")
        clearInterval(this.intervalID)
    }

    render() {
        console.log("Parent Render")
        return (
            <>
                <h1>Parent</h1>
                <span>{this.state.count}</span>
                <Child />
            </>
        )
    }

}