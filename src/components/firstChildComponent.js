import React from "react";
import { render } from "react-dom";

export default class FirstChild extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <p>First Child Component</p>
                {this.props.exampleProps}
            </div>
        )
    }
}