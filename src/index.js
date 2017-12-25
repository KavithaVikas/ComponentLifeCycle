import React from "react";
import { render } from "react-dom";
import First from "./components/FirstChild";
import Second from "./components/SecondChild";


export default class Hello extends React.Component {
    render() {

        let user ={
            name:"Kavitha",
            age:"30"
        }
        
        return (
            <div>
                <p>Hello World!!</p>
                <First personDetails = {user}/>
                <Second/>
            </div>
        )

    }
}

render(<Hello />, document.getElementById('app'));