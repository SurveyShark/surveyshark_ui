import React from "react";
import { render } from "@testing-library/react";

export default class MainContent extends React.Component {
    state = {
        buttonText: "Get Started"
    };


    render() {
        return (
            <div className="main">
                <button>{this.state.buttonText}</button>
            </div>
        );
    };

};