import React from "react";
import {render} from "react-dom";
import First from "./components/firstChildComponent";
import Second from "./components/secondChildComponent";

export default class Hello extends React.Component{
    render(){
        return(
        <div>
            <p>Hello World!!</p>
            <First exampleProps = "I am input from parent"/>
            <Second/>
            </div>
        )

    }
}

render(<Hello/>, document.getElementById('app'));