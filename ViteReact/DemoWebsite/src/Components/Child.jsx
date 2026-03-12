import { Component } from "react";

export class Child extends Component {
    constructor() {
        super();
        console.log("Child component constructor...")
    }

    componentDidMount() {
        console.log("Child Component did mount !...")
    }

    componentDidUpdate() {
        console.log("Child component did update !...")
    }
    componentWillUnmount() {
        console.log("Child Component will Unmount !...")
    }

    render() {
        console.log("Child Render")

        return (
            <>
            
                <h1>Child</h1>
            </>
        )
    }

}