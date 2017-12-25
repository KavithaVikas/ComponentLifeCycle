import React from "react";
import PropType from "prop-types";

export default class FirstChild extends React.Component {
    render() {
        let content = "Hi I am exploring React";
        return(
        <div>
          <p> Hello!! I am your first child</p>
          <p> My name is { this.props.personDetails.name} and my age is {this.props.personDetails.age}</p>
        </div>
        )
    }
}

FirstChild.propTypes = {
    personDetails:PropType.object
}