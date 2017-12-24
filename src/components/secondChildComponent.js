import React from 'react';
import {render} from "react-dom";

export default class secondChildComponent extends React.Component{
    render(){
        return(
            <div>
                <p>Second Child Component</p>
            </div>
        )
    }
}